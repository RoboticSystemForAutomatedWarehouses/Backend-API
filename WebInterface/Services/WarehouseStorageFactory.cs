using System.Collections.Generic;
using System.Linq;
using WebInterface.Data;
using WebInterface.Models;

namespace WebInterface.Services
{
    public class WarehouseStorageFactory
    {
        private readonly ApplicationDbContext _context;
        private readonly Config _config;
        private readonly Dictionary<int, SingleWarehouseStorageService> _services;

        public WarehouseStorageFactory(ApplicationDbContext context, Config config)
        {
            _context = context;
            _config = config;
            _services = new Dictionary<int, SingleWarehouseStorageService>();
        }

        public SingleWarehouseStorageService GetStorageService(int id)
        {
            if (!_services.ContainsKey(id))
            {
                if (!_context.Warehouses.Any(w => w.Id == id))
                    return null;
                _services.Add(id, new SingleWarehouseStorageService(_context, _config, id));
            }
            return _services[id];
        }
    }
}