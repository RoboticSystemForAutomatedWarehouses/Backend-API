using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebInterface.Models.DataBase
{
    public class Order
    {
        public Order()
        {
            Spaces = new HashSet<StorageSpace>();
        }
        [Key] [Required] public int Id { get; set; }
        [Required] public double Price { get; set; }
        [Required] public DateTime? PlacementDate { get; set; }
        [Required] public int UserId { get; set; }

        [ForeignKey("UserId")]
        public ApplicationUser User { get; set; }

        [InverseProperty("Order")]
        public ICollection<StorageSpace> Spaces { get; set; }
    }
}