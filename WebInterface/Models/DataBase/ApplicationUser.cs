using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace WebInterface.Models.DataBase
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser<int>
    {
        public ApplicationUser()
        {
            Orders = new HashSet<Order>();
        }

        [Key]
        [Required]
        public override int Id { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 3)]
        public override string UserName { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        [EmailAddress]
        public override string Email { get; set; }
        [Required]
        public Gender? Gender { get; set; }

        [InverseProperty("User")]
        public ICollection<Order> Orders { get; set; }
    }
}
