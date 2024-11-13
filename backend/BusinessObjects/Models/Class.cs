using System;
using System.Collections.Generic;

namespace BusinessObjects.Models
{
    public partial class Class
    {
        public Class()
        {
            ClassMembers = new HashSet<ClassMember>();
            Grades = new HashSet<Grade>();
            Payments = new HashSet<Payment>();
            RegistrationForms = new HashSet<RegistrationForm>();
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
        public TimeSpan? StartTime { get; set; }
        public TimeSpan? EndTime { get; set; }
        public string? ClassCode { get; set; }
        public bool? Status { get; set; }

        public virtual Course? Course { get; set; }
        public virtual Account? StaffEmailNavigation { get; set; }
        public virtual Account? TeacherEmailNavigation { get; set; }
        public virtual ICollection<ClassMember> ClassMembers { get; set; }
        public virtual ICollection<Grade> Grades { get; set; }
        public virtual ICollection<Payment> Payments { get; set; }
        public virtual ICollection<RegistrationForm> RegistrationForms { get; set; }
    }
}
