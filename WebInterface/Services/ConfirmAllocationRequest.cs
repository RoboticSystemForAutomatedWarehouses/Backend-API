using System;

namespace WebInterface.Services
{
    public class ConfirmAllocationRequest
    {
        public int WarehouseId { get; set; }
        public string Id { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}