namespace BusinessObjects.DTO.Calendar;
public class AddCalendarDTO
{
    public int? ClassId { get; set; }
    public TimeSpan StartTime { get; set; }
    public TimeSpan EndTime { get; set; }
    public string? DayOfWeeks { get; set; }
}
