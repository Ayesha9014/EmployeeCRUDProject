
using System.ComponentModel.DataAnnotations;

namespace BaseLibrary.DTOs
{
    public class Register:AccountBase
    {
        [Required]
        [MinLength(4)]
        [MaxLength(50)]
        public string? FullName { get; set; }
        [DataType(DataType.Password)]
        [Compare(nameof(Password))]
        public string? ConfirmPassword { get; set; }
    }
}
