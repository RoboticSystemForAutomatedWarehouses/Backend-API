using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WebInterface.Models.DataBase;

namespace WebInterface.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser, ApplicationRole, int>
    {
        public ApplicationDbContext(DbContextOptions options)
            : base(options)
        {
        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<PriceSchema> Prices { get; set; }
        public DbSet<StorageSpace> Spaces { get; set; }
        public DbSet<Task> Tasks { get; set; }
        public DbSet<Warehouse> Warehouses { get; set; }
        public DbSet<News> News { get; set; }
    }
}
