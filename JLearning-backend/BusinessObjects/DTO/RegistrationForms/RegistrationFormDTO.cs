using BusinessObjects.DTO.Classes;

namespace BusinessObjects.DTO.RegistrationForms;
public class RegistrationFormDTO
{
    public string StudentEmail { get; set; } = null!;
    public int ClassId { get; set; }
    public int CourseId { get; set; }
    public int? Status { get; set; }
    public DateTime? CreatedDate { get; set; }
    public ClassDTO Class { get; set; } = null!;
    public CourseDTO Course { get; set; } = null!;
    public AccountDTO StudentEmailNavigation { get; set; } = null!;
}
