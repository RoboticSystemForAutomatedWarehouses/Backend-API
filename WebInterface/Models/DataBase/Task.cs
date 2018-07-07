using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebInterface.Models.DataBase
{
    public class Task
    {
        [Key] [Required] public int Id { get; set; }
        [Required] public int ItemId { get; set; }
        public bool Delivered { get; set; }
        public bool Done { get; set; }
        public bool IsOut { get; set; }

        [ForeignKey("ItemId")] public Item Item { get; set; }
    }
}