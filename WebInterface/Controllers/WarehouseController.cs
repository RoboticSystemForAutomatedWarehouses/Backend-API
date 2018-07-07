using System.Linq;
using Microsoft.AspNetCore.Mvc;
using WebInterface.Data;
using WebInterface.Models;
using WebInterface.Services;

namespace WebInterface.Controllers
{
    [Produces("application/json")]
    public class WarehouseController : Controller
    {
        private readonly ApplicationDbContext _context;
        private WarehouseStorageFactory _factory;

        public WarehouseController(ApplicationDbContext db, WarehouseStorageFactory factory)
        {
            _factory = factory;
            _context = db;
        }

        [HttpGet, HttpPost]
        public JsonResponse List() => new JsonResponse()
        {
            Success = true,
            Result = _context.Warehouses.Select(w => new
            {
                w.Name,
                w.Id,
                PriceSchema = new { w.PriceSchema.BaseCost, w.PriceSchema.DailyRate, w.PriceSchema.TaxPercent }
            }).AsEnumerable().Select(r => new
            {
                r.PriceSchema,
                r.Name,
                r.Id,
                Available = _factory.GetStorageService(r.Id)?.GetEstimatedFreeSpace()
            })
        };
    }
}