using System;
using System.Linq;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebInterface.Data;
using WebInterface.Models;
using WebInterface.Models.DataBase;
using WebInterface.Models.ViewModel;

namespace WebInterface.Controllers
{
    [Produces("application/json")]
    [Authorize]
    [Route("api/Order/{orderId}/StorageSpaces/[action]")]
    public class StorageSpacesController : Controller
    {
        private readonly ApplicationDbContext _context;

        public StorageSpacesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet, HttpPost]
        public JsonResult List([FromRoute]int orderId)
        {
            var order = _context.Orders.Include(o => o.User).Include(o => o.Spaces).ThenInclude(s => s.Items).Single(o => o.Id == orderId);
            if (order.User.Id.ToString() != User.Claims.Single(c => c.Type == ClaimTypes.NameIdentifier).Value ||
                User.IsInRole("Admin"))
                return Json(new JsonResponse { Success = false, Message = "Unauthorized" });
            return Json(new JsonResponse { Success = true, Result = order.Spaces });
        }

        [HttpPost("{storageId}"), HttpGet("{storageId}")]
        public JsonResponse Insert([FromRoute]int orderId, [FromRoute]int storageId, [FromBody]ItemViewModel item)
        {
            var user = _context.Orders.Include(o => o.User).Single(o => o.Id == orderId).User;
            if (user.Id.ToString() != User.Claims.Single(c => c.Type == ClaimTypes.NameIdentifier).Value ||
               User.IsInRole("Admin"))
                return new JsonResponse { Success = false, Message = "Unauthorized" };
            var space = _context.Spaces.Include(s => s.Items).Single(s => s.Id == storageId);
            if (space.StartDate > item.ArriveDate)
                return new JsonResponse { Success = false, Message = "Item can't arrive before contract start date." };
            if (space.EndDate < item.ArriveDate)
                return new JsonResponse { Success = false, Message = "Item can't arrive after contract start date." };
            if (!space.Items.All(i => (i.ArriveDate > item.RemoveDate) ^ (i.RemoveDate < item.ArriveDate)))
                return new JsonResponse { Success = false, Message = "Storage already in used at this date." };
            var it = new Item
            {
                ArriveDate = item.ArriveDate,
                RemoveDate = item.RemoveDate,
                CategoryId = item.CategoryId,
                StorageSpaceId = storageId
            };
            _context.Items.Add(it);
            _context.Tasks.AddRange(new[]
            {
                new Task {Delivered = false, Done = false, IsOut = false, Item = it},
                new Task {Delivered = false, Done = false, IsOut = true, Item = it}
            });
            _context.SaveChanges();
            return new JsonResponse { Success = true };
        }

        [HttpPost("{storageId}"), HttpGet("{storageId}")]
        public JsonResponse Remove([FromRoute] int orderId, [FromRoute] int storageId, DateTime? removeDate)
        {
            if (removeDate == null)
                return new JsonResponse { Success = false, Message = "removeDate can't be null." };
            var user = _context.Orders.Include(o => o.User).Single(o => o.Id == orderId).User;
            if (user.Id.ToString() != User.Claims.Single(c => c.Type == ClaimTypes.NameIdentifier).Value ||
                User.IsInRole("Admin"))
                return new JsonResponse { Success = false, Message = "Unauthorized" };
            var space = _context.Spaces.Include(s => s.Items).Single(s => s.Id == storageId);
            if (removeDate > space.EndDate)
                return new JsonResponse { Success = false, Message = "Must remove item before contract ends." };
            var item = space.Items.FirstOrDefault(i => i.RemoveDate == null);
            if (item == null)
                return new JsonResponse { Success = false, Message = "No item in this storage unit." };
            if (item.ArriveDate >= removeDate)
                return new JsonResponse { Success = false, Message = "Can't remove item before it arrives at warehouse." };
            item.RemoveDate = removeDate.Value;
            _context.Items.Update(item);
            _context.Tasks.Add(new Task { Delivered = false, Done = false, IsOut = true, Item = item });
            _context.SaveChanges();
            return new JsonResponse { Success = true };
        }
    }
}