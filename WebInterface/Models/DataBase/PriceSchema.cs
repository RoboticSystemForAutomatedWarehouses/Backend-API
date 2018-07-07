using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebInterface.Models.DataBase
{
    public class PriceSchema
    {
        public PriceSchema()
        {
            Warehouses = new HashSet<Warehouse>();
            StorageSpaces = new HashSet<StorageSpace>();
        }

        [Key] [Required] public int Id { get; set; }
        [Required] [Range(double.Epsilon, double.MaxValue)] public double BaseCost { get; set; }
        [Required] [Range(double.Epsilon, double.MaxValue)] public double DailyRate { get; set; }
        [Required] [Range(double.Epsilon, double.MaxValue)] public double TaxPercent { get; set; }

        [InverseProperty("PriceSchema")]
        public ICollection<Warehouse> Warehouses { get; set; }
        [InverseProperty("PriceSchema")]
        public ICollection<StorageSpace> StorageSpaces { get; set; }
    }
}