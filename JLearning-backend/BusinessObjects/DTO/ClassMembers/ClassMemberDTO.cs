using BusinessObjects.DTO.Classes;

namespace BusinessObjects.DTO.ClassMembers;
public class ClassMemberDTO
{
    public string StudentEmail { get; set; } = null!;
    public int ClassId { get; set; }
    public DateTime? EnrollmentDate { get; set; }
    public int? Status { get; set; }
    public ClassDTO Class { get; set; } = null!;
    public AccountDTO StudentEmailNavigation { get; set; } = null!;
}
