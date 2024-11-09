using BusinessObjects.DTO.ClassMembers;
using BusinessObjects.DTO.RegistrationForms;
using BusinessObjects.Models;

namespace BusinessObjects.DTO.Classes;
public class ClassDTO
{
    public int ClassId { get; set; }
    public int? CourseId { get; set; }
    public string ClassName { get; set; } = null!;
    public string? StartDate { get; set; }
    public string? EndDate { get; set; }
    public int NumberOfStudent { get; set; }
    public int NumberOfSlots { get; set; }
    public string? StaffEmail { get; set; }
    public string? TeacherEmail { get; set; }
    public string? Room { get; set; }
    public string? DaysOfWeek { get; set; }
    public TimeSpan? StartTime { get; set; }
    public TimeSpan? EndTime { get; set; }
    public int? Status { get; set; }
    public string? ClassCode { get; set; }
    public CourseDTO? Course { get; set; }
    public AccountDTO? StaffEmailNavigation { get; set; }
    public AccountDTO? TeacherEmailNavigation { get; set; }
    public IList<ClassMemberDTO>? ClassMembers { get; set; }
    public IList<Grade>? Grades { get; set; }
    public IList<RegistrationFormDTO>? RegistrationForms { get; set; }
    public IList<AccountDTO>? StudentEmails { get; set; }
}
