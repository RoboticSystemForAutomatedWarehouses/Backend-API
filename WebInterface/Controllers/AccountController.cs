using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WebInterface.Models;
using WebInterface.Models.DataBase;
using WebInterface.Models.ViewModel;

namespace WebInterface.Controllers
{
    [Produces("application/json")]
    public class AccountController : Controller
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;

        public AccountController(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }

        [HttpPost]
        public async Task<JsonResponse> Login([Required][FromBody]LoginViewModel login)
        {
            try
            {
                var user = await _userManager.FindByEmailAsync(login.Email);
                if (user == null)
                {
                    return new JsonResponse { Success = false, Result = new[] { new { code = "Mismatch", description = "User doesn't exist or password mismatch" } } };
                }
                var result = await _signInManager.PasswordSignInAsync(user, login.Password, login.Remember, false);
                if (result.Succeeded)
                    Response.Headers.Add("isAuthenticated", "1");
                return new JsonResponse { Success = result.Succeeded, Message = user.Id.ToString() };
            }
            catch (Exception e)
            {
                return new JsonResponse { Success = false, Message = e.Message, Result = e };
            }
        }

        [Authorize]
        [HttpGet, HttpPost]
        public async Task<JsonResponse> Logout()
        {
            await _signInManager.SignOutAsync();
            return new JsonResponse { Success = true };
        }

        [HttpGet, HttpPost]
        public async Task<JsonResponse> Register([FromBody]UserViewModel model)
        {
            if (!ModelState.IsValid || string.IsNullOrWhiteSpace(model.Email) ||
                string.IsNullOrWhiteSpace(model.Password) || string.IsNullOrWhiteSpace(model.Name))
                return new JsonResponse { Success = false, Message = "Invalid Model" };

            var user = new ApplicationUser
            {
                Email = model.Email,
                EmailConfirmed = true,
                UserName = model.Name,
                Name = model.Name,
                Gender = model.Gender,
            };
            try
            {
                var result = await _userManager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                    return new JsonResponse { Success = true };

                return new JsonResponse { Success = false, Result = result.Errors };
            }
            catch (Exception e)
            {
                return new JsonResponse { Success = false, Message = e.Message };
            }
        }

        [HttpGet, HttpPost]
        [Authorize]
        public async Task<JsonResponse> Get([FromRoute]int id)
        {
            var uid = User.Claims.Single(c => c.Type == ClaimTypes.NameIdentifier).Value;
            if (id.ToString() == User.Claims.Single(c => c.Type == ClaimTypes.NameIdentifier).Value
                || User.IsInRole("Admin"))
            {
                var user = await _userManager.FindByIdAsync(id.ToString());
                return new JsonResponse { Success = true, Result = new { user.Id, user.Email, user.Gender, user.Name } };
            }
            Response.StatusCode = (int)HttpStatusCode.Unauthorized;
            return new JsonResponse { Message = "Unauthorized", Success = false };
        }

        [HttpPut]
        [HttpGet, HttpPost]
        [Authorize]
        public async Task<JsonResponse> Update([FromRoute] int id, [FromBody] EditUserViewModel model)
        {
            if (ModelState.IsValid && id > 0 && id.ToString() == User.Claims.Single(c => c.Type == ClaimTypes.NameIdentifier).Value)
            {
                var user = await _userManager.FindByIdAsync(id.ToString());
                user.Email = model.Email;
                user.Gender = model.Gender;
                user.Name = model.Name;
                user.UserName = model.Name;
                var result = await _userManager.UpdateAsync(user);
                if (result.Succeeded)
                {
                    result = await _userManager.ChangePasswordAsync(user, model.OldPassword, model.NewPassword);
                    if (result.Succeeded)
                        return new JsonResponse() { Success = true };
                }
                return new JsonResponse() { Success = false, Message = "Identity error", Result = result.Errors };
            }
            else
            {
                return new JsonResponse() { Success = false, Message = "Invalid model" };
            }
        }
    }

}