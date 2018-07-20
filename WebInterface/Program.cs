using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace WebInterface
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                //.UseUrls("http://192.168.43.40:5000")
                .UseUrls("http://192.168.137.1:5000")
                .Build();
    }
}
