using System;
using System.ComponentModel.DataAnnotations;

namespace WebInterface.Models.ViewModel
{
    public class ItemViewModel
    {
        [Required] public DateTime ArriveDate { get; set; }
        [Required] public DateTime RemoveDate { get; set; }
        [Required] [Range(1, int.MaxValue)] public int CategoryId { get; set; }
    }
}