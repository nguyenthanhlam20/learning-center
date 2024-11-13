namespace BusinessObjects.DTO.Classes;
public class AddClassDTO
{
    public int? CourseId { get; set; }
    public string ClassName { get; set; } = null!;
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public int NumberOfStudent { get; set; }
    public int NumberOfSlots { get; set; }
    public string? StaffEmail { get; set; }
    public string? TeacherEmail { get; set; }
    public string? Room { get; set; }
    public bool? Status { get; set; }
    public string? ClassCode { get; set; }
    public string? DaysOfWeek { get; set; }
    public TimeSpan? StartTime { get; set; }
    public TimeSpan? EndTime { get; set; }
}
