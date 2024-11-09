using System;
using System.Collections.Generic;

namespace BusinessObjects.Models
{
    public partial class Calendar
    {
        public int CalendarId { get; set; }
        public int? ClassId { get; set; }
        public TimeSpan StartTime { get; set; }
        public TimeSpan EndTime { get; set; }
        public string? DayOfWeeks { get; set; }

        public virtual Class? Class { get; set; }
    }
}
