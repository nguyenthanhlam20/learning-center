namespace BusinessObjects.DTO.ClassMembers;
public class AddMemberClassDTO
{
    public string StudentEmail { get; set; } = null!;
    public int ClassId { get; set; }
    public DateTime? EnrollmentDate { get; set; }
    public int? Status { get; set; }
}
