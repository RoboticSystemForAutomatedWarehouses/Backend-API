using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebInterface.Models.DataBase
{
    public class News
    {
        [Key][Required]public int Id { get; set; }
        [Required] public DateTime Date { get; set; }
        [Required][StringLength(255)] public string Title { get; set; }
        [Required][Column(TypeName = "ntext")] public string Content { get; set; }
    }
}