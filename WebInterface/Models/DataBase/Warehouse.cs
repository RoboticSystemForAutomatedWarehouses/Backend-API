using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebInterface.Models.DataBase
{
    public class Warehouse
    {
        public Warehouse()
        {
            StorageSpaces = new HashSet<StorageSpace>();
        }

        [Key] [Required] public int Id { get; set; }
        [Required] public string Name { get; set; }
        [Required] [Range(0, int.MaxValue)] public int MaxX { get; set; }
        [Required] [Range(0, int.MaxValue)] public int MaxY { get; set; }
        [Required] [Range(0, int.MaxValue)] public int MaxZ { get; set; }
        [Required] public int PriceSchemaId { get; set; }

        [ForeignKey("PriceSchemaId")]
        public PriceSchema PriceSchema { get; set; }

        [InverseProperty("Warehouse")]
        public ICollection<StorageSpace> StorageSpaces { get; set; }
    }
}