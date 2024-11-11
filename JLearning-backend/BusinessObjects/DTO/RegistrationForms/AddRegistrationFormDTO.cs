namespace BusinessObjects.DTO.RegistrationForms;
public class AddRegistrationFormDTO
{
    public string StudentEmail { get; set; } = null!;

    public string Name { get; set; } = null!;
    public string Phone { get; set; } = null!;
    public int ClassId { get; set; }
    public int CourseId { get; set; }
    public int? Status { get; set; }
    public DateTime? CreatedDate { get; set; }
}
