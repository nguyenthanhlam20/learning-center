using BusinessObjects.DTO.Classes;

namespace BusinessObjects.DTO.Calendar;
public class CalendarDTO
{
    public int CalendarId { get; set; }
    public int? ClassId { get; set; }
    public TimeSpan StartTime { get; set; }
    public TimeSpan EndTime { get; set; }
    public string? DayOfWeeks { get; set; }
    public virtual ClassDTO? Class { get; set; }
}
