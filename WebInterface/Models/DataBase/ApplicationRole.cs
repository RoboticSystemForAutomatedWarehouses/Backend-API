using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace WebInterface.Models.DataBase
{
    public class ApplicationRole : IdentityRole<int>
    {
        [Key]
        [Required]
        public override int Id { get; set; }
        [Required]
        public string Description { get; set; }
    }
}