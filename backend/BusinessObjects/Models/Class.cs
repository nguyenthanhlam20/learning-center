using System;
using System.Collections.Generic;

namespace BusinessObjects.Models
{
    public partial class Class
    {
        public Class()
        {
            ClassMembers = new HashSet<ClassMember>();
            Feedbacks = new HashSet<Feedback>();
            Grades = new HashSet<Grade>();
            Payments = new HashSet<Payment>();
            RegistrationForms = new HashSet<RegistrationForm>();
        }

        public int ClassId { get; set; }
        public int CourseId { get; set; }
        public string ClassName { get; set; } = null!;
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int NumberOfStudent { get; set; }
        public int NumberOfSlots { get; set; }
        public string StaffEmail { get; set; } = null!;
        public string TeacherEmail { get; set; } = null!;
        public string Room { get; set; } = null!;
        public string DaysOfWeek { get; set; } = null!;
        public TimeSpan StartTime { get; set; }
        public TimeSpan EndTime { get; set; }
        public bool Status { get; set; }

        public virtual Course Course { get; set; } = null!;
        public virtual Account StaffEmailNavigation { get; set; } = null!;
        public virtual Account TeacherEmailNavigation { get; set; } = null!;
        public virtual ICollection<ClassMember> ClassMembers { get; set; }
        public virtual ICollection<Feedback> Feedbacks { get; set; }
        public virtual ICollection<Grade> Grades { get; set; }
        public virtual ICollection<Payment> Payments { get; set; }
        public virtual ICollection<RegistrationForm> RegistrationForms { get; set; }
    }
}
