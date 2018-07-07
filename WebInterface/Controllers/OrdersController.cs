using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Options;
using WebInterface.Data;
using WebInterface.Models;
using WebInterface.Models.DataBase;
using WebInterface.Models.ViewModel;
using WebInterface.Services;

namespace WebInterface.Controllers
{
    [Produces("application/json")]
    [Authorize]
    public class OrdersController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IMemoryCache _cache;
        private readonly Config _config;
        private readonly WarehouseStorageFactory _factory;

        public OrdersController(
            ApplicationDbContext context,
            IMemoryCache cache,
            WarehouseStorageFactory warehouseStorageFactory,
            IOptions<Config> config
            )
        {
            _context = context;
            _cache = cache;
            _config = config.Value;
            _factory = warehouseStorageFactory;
        }

        [HttpGet, HttpPost]
        public JsonResponse List()
        {
            var result = _context.Orders
                .Where(o => o.UserId == int.Parse(User.Claims.Single(c => c.Type == ClaimTypes.NameIdentifier).Value))
                .Include(o => o.Spaces).ThenInclude(s => s.Items).Select(o => new
                {
                    o.Id,
                    o.Price,
                    o.PlacementDate,
                    StorageSpaces = o.Spaces.Select(s => new
                    {
                        s.Id,
                        s.StartDate,
                        s.EndDate,
                        Item = s.Items.OrderBy(i=> i.ArriveDate).Select(i => new { i.Id, i.Category.Name, i.ArriveDate, i.RemoveDate }),
                        s.Warehouse.Name
                    })
                });
            return new JsonResponse
            {
                Success = true,
                Result = result
            };
        }

        [HttpGet, HttpPost]
        public JsonResult Get(int id)
        {
            var result = _context.Orders
                .Where(o => o.Id == id)
                .Include(o => o.User)
                .Include(o => o.Spaces)
                .ThenInclude(s => s.Items)
                .SingleOrDefault();

            if (result == null)
                return Json(new JsonResponse { Message = "Not Found", Success = false });

            if (result.User.Id.ToString() == User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value
                || User.IsInRole("Admin"))
                return Json(new JsonResponse { Success = true, Result = result });
            Response.StatusCode = (int)HttpStatusCode.Unauthorized;
            return Json(new JsonResponse { Message = "Unauthorized", Success = false });
        }

        [HttpGet, HttpPost]
        public JsonResult Check([FromBody][Required]List<StorageSpaceViewModel> model)
        {
            // todo: check if updating an older request.
            if (!ModelState.IsValid || model.Count < 1 || model.Any(m => !m.IsValid()))
                return Json(new JsonResponse { Message = "Invalid Model", Success = false });

            if (Request.Cookies.TryGetValue("OrderId", out var oldOrderId) && _cache.TryGetValue(oldOrderId,
                    out List<(StorageSpaceViewModel model, string allocationId)> oldOrder))
            {
                foreach (var tuple in oldOrder)
                {
                    _factory.GetStorageService(tuple.model.WarehouseId ?? -1)?.FreeTempAllocate(tuple.allocationId);
                }
            }

            var results = new List<(string id, double price)>();
            var cachedResult = new List<(StorageSpaceViewModel, string)>();
            foreach (var request in model)
            {
                var warehouse = _factory.GetStorageService(request.WarehouseId ?? -1);
                if (warehouse == null)
                    continue;
                var priceSchema = warehouse.PriceSchema;
                var result = (request.StartDate.Value.ToUniversalTime() >= DateTime.UtcNow && request.EndDate > request.StartDate) ? warehouse.TempAllocate(request.Quantity) : null;
                results.Add(
                    (result,
                        (priceSchema.BaseCost +
                         (request.EndDate - request.StartDate).Value.Days * priceSchema.DailyRate) *
                        (1 + priceSchema.TaxPercent) * request.Quantity));
                cachedResult.Add((request, result));
            }

            if (results.Any(o => string.IsNullOrWhiteSpace(o.id)))
                return Json(new JsonResponse { Success = true, Result = results });

            var id = Guid.NewGuid().ToString();
            _cache.Set(id, cachedResult, new TimeSpan(0, _config.OrderTimeoutMinutes, 0));
            Response.Cookies.Append("OrderId", id,
                new CookieOptions
                {
                    Expires = new DateTimeOffset(DateTime.UtcNow + new TimeSpan(0, _config.OrderTimeoutMinutes, 0))
                });
            return Json(new JsonResponse { Success = true, Result = results, Message = id });
        }

        [HttpGet, HttpPost]
        public JsonResult Confirm()
        {
            if (!Request.Cookies.TryGetValue("OrderId", out var id))
                return Json(new JsonResponse { Message = "No Id, cookie expired", Success = false });
            if (!_cache.TryGetValue(id, out List<(StorageSpaceViewModel model, string allocationId)> result))
                return Json(new JsonResponse { Message = "No cached entry found, order expired", Success = false });

            var order = _context.Orders.Add(new Order
            {
                PlacementDate = DateTime.UtcNow,
                UserId = int.Parse(User.Claims.First(c => c.Type == ClaimTypes.NameIdentifier).Value)
            });
            _context.SaveChanges();
            var requests = result.Select(entry => new ConfirmAllocationRequest
            {
                Id = entry.allocationId,
                StartDate = entry.model.StartDate.Value,
                EndDate = entry.model.EndDate.Value,
                WarehouseId = entry.model.WarehouseId.Value
            }).GroupBy(o => o.WarehouseId);
            try
            {
                foreach (var group in requests)
                {
                    _factory.GetStorageService(group.Key).ConfirmAllocate(group, order.Entity.Id);
                }
                //_warehouseService.ConfirmAllocate(requests, order.Entity.Id);
            }
            catch (Exception e)
            {
                // roll back.
                _context.Orders.Remove(order.Entity);
                _context.SaveChanges();
                return Json(new JsonResponse { Success = false });
            }

            Response.Cookies.Delete("OrderId");
            return Json(new JsonResponse { Success = true });
        }
    }
}