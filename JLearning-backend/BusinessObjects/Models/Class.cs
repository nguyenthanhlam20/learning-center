using System;
using System.Collections.Generic;

namespace BusinessObjects.Models
{
    public partial class Class
    {
        public Class()
        {
            Grades = new HashSet<Grade>();
            StudentEmails = new HashSet<Account>();
        }

        public int ClassId { get; set; }
        public int? CourseId { get; set; }
        public string ClassName { get; set; } = null!;
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int NumberOfStudent { get; set; }
        public int NumberOfSlots { get; set; }
        public string? StaffEmail { get; set; }
        public string? TeacherEmail { get; set; }
        public string? Room { get; set; }
        public string? DaysOfWeek { get; set; }

        public virtual Course? Course { get; set; }
        public virtual Account? StaffEmailNavigation { get; set; }
        public virtual Account? TeacherEmailNavigation { get; set; }
        public virtual ICollection<Grade> Grades { get; set; }

        public virtual ICollection<Account> StudentEmails { get; set; }
    }
}
