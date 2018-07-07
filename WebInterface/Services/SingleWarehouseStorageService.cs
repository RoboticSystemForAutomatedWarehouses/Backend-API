using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using WebInterface.Data;
using WebInterface.Models;
using WebInterface.Models.DataBase;
using Task = System.Threading.Tasks.Task;

namespace WebInterface.Services
{
    public class SingleWarehouseStorageService
    {

        private readonly object _lock;
        private readonly ApplicationDbContext _context;
        private readonly int _warehouseId;
        private readonly Config _config;

        private bool[,,] _usedStorage;
        private Dictionary<string, (Task task, List<(int x, int y, int z)>)> _tempTasks;

        public PriceSchema PriceSchema => _context.Warehouses.Where(o => o.Id == _warehouseId)
            .Include(p => p.PriceSchema).First().PriceSchema;

        public SingleWarehouseStorageService(ApplicationDbContext context, Config config, int warehouseId)
        {
            _config = config;
            _lock = new object();
            _context = context;
            _warehouseId = warehouseId;
            Refresh();

        }

        async void Refresh()
        {
            while (true)
            {
                LoadFromDb();
                await Task.Delay(new TimeSpan(0, _config.WarehouseCacheMinutes, 0));
            }
        }

        public void LoadFromDb()
        {
            try
            {
                var now = DateTime.UtcNow;
                var config = _context.Warehouses.Find(_warehouseId);
                var spaces = _context.Spaces.Where(s => s.WarehouseId == config.Id && s.StartDate <= now && s.EndDate >= now);
                lock (_lock)
                {
                    _tempTasks = new Dictionary<string, (Task task, List<(int x, int y, int z)> idx)>();
                    _usedStorage = new bool[config.MaxX, config.MaxY, config.MaxZ];
                    foreach (var space in spaces)
                    {
                        //if (_usedStorage[space.X, space.Y, space.Z])
                        //    throw new Exception("This should never happen, 2 items in same storage space...");
                        _usedStorage[space.X, space.Y, space.Z] = true;
                    }
                }
            }
            catch (Exception)
            {
                // ignored
            }
        }

        public int GetEstimatedFreeSpace()
        {
            return _usedStorage.Cast<bool>().Count(b => !b);
        }

        public string TempAllocate(int count)
        {
            lock (_lock)
            {
                var testStorage = new bool[_usedStorage.GetLength(0), _usedStorage.GetLength(1),
                    _usedStorage.GetLength(2)];
                var list = new List<(int x, int y, int z)>(count);
                for (int i = 0; i < testStorage.GetLength(0) && count > 0; i++)
                {
                    for (int j = 0; j < testStorage.GetLength(1) && count > 0; j++)
                    {
                        for (int k = 0; k < testStorage.GetLength(2) && count > 0; k++)
                        {
                            testStorage[i, j, k] = _usedStorage[i, j, k];
                            if (testStorage[i, j, k])
                                continue;
                            testStorage[i, j, k] = true;
                            list.Add((i, j, k));
                            count--;
                        }
                    }
                }

                if (count != 0)
                    return null;
                _usedStorage = testStorage;
                var id = Guid.NewGuid().ToString();
                _tempTasks.Add(id, (Task.Delay(new TimeSpan(0, _config.OrderTimeoutMinutes, 0)).ContinueWith(task => FreeTempAllocate(id)), list));
                return id;
            }
        }

        public void FreeTempAllocate(string id)
        {
            lock (_lock)
            {
                if (!_tempTasks.Remove(id, out var result))
                    return;
                foreach (var (x, y, z) in result.Item2)
                {
                    _usedStorage[x, y, z] = false;
                }
            }
        }

        public List<StorageSpace> ConfirmAllocate(IEnumerable<ConfirmAllocationRequest> requests, int orderId)
        {
            var result = new List<StorageSpace>();
            lock (_lock)
            {
                var total = 0d;
                var schema = PriceSchema;
                foreach (var request in requests)
                {
                    if (!_tempTasks.Remove(request.Id, out var entry))
                        throw new Exception("Couldn't find id...");
                    result.AddRange(entry.Item2.Select(location =>
                    {
                        total += (schema.BaseCost + (request.EndDate - request.StartDate).Days * schema.DailyRate) *
                                 (1 + schema.TaxPercent);
                        return _context.Spaces.Add(new StorageSpace
                        {
                            X = location.x,
                            Y = location.y,
                            Z = location.z,
                            StartDate = request.StartDate,
                            EndDate = request.EndDate,
                            OrderId = orderId,
                            WarehouseId = _warehouseId,
                            PriceSchemaId = schema.Id
                        }).Entity;
                    }).ToList());
                }

                var order = _context.Orders.Single(o => o.Id == orderId);
                order.Price = total;
                _context.Orders.Update(order);
                _context.SaveChanges();
            }

            return result;
        }
    }
}
