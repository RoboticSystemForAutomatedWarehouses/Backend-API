using System.ComponentModel.DataAnnotations;

namespace WebInterface.Models.DataBase
{
    public class Category
    {
        [Key] [Required] public int Id { get; set; }
        [Required] public string Name { get; set; }
    }
}