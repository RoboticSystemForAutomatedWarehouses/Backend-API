using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebInterface.Models.DataBase
{
    public class StorageSpace
    {
        public StorageSpace()
        {
            Items = new HashSet<Item>();
        }

        [Key] [Required] public int Id { get; set; }
        [Required] public int X { get; set; }
        [Required] public int Y { get; set; }
        [Required] public int Z { get; set; }
        [Required] public DateTime? StartDate { get; set; }
        [Required] public DateTime? EndDate { get; set; }

        [Required] public int OrderId { get; set; }
        [Required] public int WarehouseId { get; set; }
        [Required] public int PriceSchemaId { get; set; }

        [ForeignKey("PriceSchemaId")]
        public PriceSchema PriceSchema { get; set; }
        [ForeignKey("OrderId")]
        public Order Order { get; set; }
        [ForeignKey("WarehouseId")]
        public Warehouse Warehouse { get; set; }

        [InverseProperty("StorageSpace")]
        public ICollection<Item> Items { get; set; }
    }
}