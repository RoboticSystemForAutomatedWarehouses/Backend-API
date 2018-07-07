using System;
using WebInterface.Models.DataBase;

namespace WebInterface.Models.ViewModel
{
    public class EditUserViewModel
    {
        public string NewPassword { get; set; }
        public string OldPassword { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public Gender Gender { get; set; }

        public bool IsValid()
        {
            return !(string.IsNullOrWhiteSpace(OldPassword)
                     || string.IsNullOrWhiteSpace(NewPassword)
                     || string.IsNullOrWhiteSpace(Email)
                     || string.IsNullOrWhiteSpace(Name)) && Enum.TryParse(typeof(Gender), Gender.ToString(), out var _);
        }
    }
}