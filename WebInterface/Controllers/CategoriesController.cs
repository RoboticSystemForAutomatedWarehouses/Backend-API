using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebInterface.Data;
using WebInterface.Models;

namespace WebInterface.Controllers
{
    [Produces("application/json")]
    [Authorize]
    public class CategoriesController : Controller
    {
        private readonly ApplicationDbContext _context;

        public CategoriesController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet, HttpPost]
        public JsonResponse List()
        {
            return new JsonResponse{Success = true, Result = _context.Categories};
        }
    }
}