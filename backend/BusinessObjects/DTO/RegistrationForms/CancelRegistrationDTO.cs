
using System.ComponentModel.DataAnnotations;

namespace BusinessObjects.DTO.RegistrationForms;
public class CancelRegistrationDTO
{
    [Required]
    public int Id { get; set; }

    [Required]
    public string Reason { get; set; } = null!;
}
