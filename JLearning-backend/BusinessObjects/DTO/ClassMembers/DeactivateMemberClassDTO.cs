namespace BusinessObjects.DTO.ClassMembers;
public class DeactivateMemberClassDTO
{
    public string StudentEmail { get; set; } = null!;
    public int ClassId { get; set; }
    public int? Status { get; set; }
}
