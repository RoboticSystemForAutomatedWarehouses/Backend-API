using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using WebInterface.Data;
using WebInterface.Models;
using WebInterface.Models.DataBase;

namespace WebInterface.Controllers
{
    [Produces("application/json")]
    public class NewsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public NewsController(ApplicationDbContext db)
        {
            _context = db;
        }

        public JsonResponse List(int count)
        {
            return new JsonResponse { Success = true, Result = _context.News.OrderBy(o => o.Date).Take(count) };
        }
    }
}