using System;
using WebInterface.Models.DataBase;

namespace WebInterface.Models.ViewModel
{
    public class UserViewModel
    {
        public string Password { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public Gender Gender { get; set; }

        public bool IsValid()
        {
            return !(string.IsNullOrWhiteSpace(Password)
                     || string.IsNullOrWhiteSpace(Email)
                     || string.IsNullOrWhiteSpace(Name)) && Enum.TryParse(typeof(Gender), Gender.ToString(),out var _);
        }
    }
}