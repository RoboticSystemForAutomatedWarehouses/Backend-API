using System.Net;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using WebInterface.Data;
using WebInterface.Models;
using WebInterface.Models.DataBase;
using WebInterface.Services;
using Task = System.Threading.Tasks.Task;

namespace WebInterface
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<Config>(Configuration.GetSection("Config"));

            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration["DefaultConnection"]), ServiceLifetime.Singleton);

            services.AddIdentity<ApplicationUser, ApplicationRole>(action =>
                 {
                     action.User.RequireUniqueEmail = true;
                     action.SignIn.RequireConfirmedEmail = true;
                     action.Password = new PasswordOptions { RequireDigit = false, RequireLowercase = false, RequireNonAlphanumeric = false, RequireUppercase = false, RequiredUniqueChars = 0, RequiredLength = 6 };
                 })
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            services.AddMemoryCache();

            services.AddSingleton(provider =>
                new WarehouseStorageFactory(
                    provider.GetRequiredService<ApplicationDbContext>(),
                    provider.GetRequiredService<IOptions<Config>>().Value));

            services.AddMvc().AddJsonOptions(options =>
            {
                options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
            });

            services.ConfigureApplicationCookie(options =>
            {
                options.Events.OnRedirectToLogin = ctx =>
                {
                    ctx.Response.StatusCode = (int)HttpStatusCode.Unauthorized;
                    return Task.FromResult(0);
                };
            });

            services.AddCors(action => action.AddPolicy("all",
                builder => builder.AllowAnyHeader().WithExposedHeaders("isAuthenticated").AllowAnyMethod().AllowCredentials().SetIsOriginAllowed(o => true)));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseCors("all");
            app.UseStaticFiles();

            app.UseAuthentication();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "api/{controller}/{action}/{id?}");
            });
        }
    }
}
