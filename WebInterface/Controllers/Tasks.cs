using System;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebInterface.Data;
using WebInterface.Models;

namespace WebInterface.Controllers
{
    [Produces("application/json")]
    public class Tasks : Controller
    {
        private static readonly TimeSpan TaskDeliverWindow = new TimeSpan(360, 0, 0, 0);
        private readonly ApplicationDbContext _context;

        public Tasks(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet, HttpPost]
        public JsonResponse Get(int warehouseId)
        {
            var now = DateTime.Now + TaskDeliverWindow;

            var tasks = _context.Tasks.Include(t => t.Item).ThenInclude(i => i.StorageSpace)
                .Where(t => !t.Delivered && t.Item.StorageSpace.WarehouseId == warehouseId)
                .Where(t => t.IsOut ? t.Item.RemoveDate < now : t.Item.ArriveDate < now)
                .OrderBy(t => t.IsOut ? t.Item.RemoveDate : t.Item.ArriveDate);
            var result = new System.Collections.ArrayList();
            foreach (var t in tasks)
            {
                t.Delivered = true;
                result.Add(new
                {
                    t.Id,
                    t.IsOut,
                    t.Item.StorageSpace.X,
                    t.Item.StorageSpace.Y,
                    t.Item.StorageSpace.Z
                });
            }
            _context.SaveChanges();

            return new JsonResponse
            {
                Success = true,
                Result = result
            };
        }

        [HttpGet, HttpPost]
        public JsonResponse Done(int id)
        {
            var task = _context.Tasks.Find(id);
            if (task == null)
                return new JsonResponse {Success = false, Message = "Can't find task Id"};
            task.Done = true;
            _context.SaveChanges();
            return new JsonResponse {Success = true};
        }
    }
}