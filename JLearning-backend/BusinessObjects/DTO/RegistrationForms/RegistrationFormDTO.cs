using BusinessObjects.DTO.Classes;
using System.Text.Json.Serialization;

namespace BusinessObjects.DTO.RegistrationForms;
public class RegistrationFormDTO
{
    public int Id { get; set; }
    public string StudentEmail { get; set; } = null!;
    public int ClassId { get; set; }
    public int CourseId { get; set; }
    public int? Status { get; set; }
    public string? CreatedDate { get; set; }
    public ClassDTO Class { get; set; } = null!;
    public CourseDTO Course { get; set; } = null!;

    [JsonPropertyName("student")]
    public AccountDTO StudentEmailNavigation { get; set; } = null!;
}
