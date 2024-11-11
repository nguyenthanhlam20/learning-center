using BusinessObjects.DTO.Classes;
using System.Text.Json.Serialization;

namespace BusinessObjects.DTO.ClassMembers;
public class ClassMemberDTO
{
    public string StudentEmail { get; set; } = null!;
    public int ClassId { get; set; }
    public string? EnrollmentDate { get; set; }
    public int? Status { get; set; }
    public ClassDTO Class { get; set; } = null!;

    [JsonPropertyName("student")]
    public AccountDTO StudentEmailNavigation { get; set; } = null!;
}
