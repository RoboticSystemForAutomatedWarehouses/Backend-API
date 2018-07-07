using System;
using System.ComponentModel.DataAnnotations;

namespace WebInterface.Models.ViewModel
{
    public class StorageSpaceViewModel
    {
        [Required] public DateTime? StartDate { get; set; }
        [Required] public DateTime? EndDate { get; set; }
        [Required] public int? WarehouseId { get; set; }
        [Required] public int Quantity { get; set; }

        public bool IsValid()
        {
            return StartDate.HasValue
                   && EndDate.HasValue
                   && (EndDate - StartDate).Value.Days > 7
                   && WarehouseId > 0
                   && Quantity > 0;
        }
    }
}
