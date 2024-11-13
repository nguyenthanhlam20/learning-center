using System;
using System.Collections.Generic;

namespace BusinessObjects.Models
{
    public partial class Course
    {
        public Course()
        {
            Classes = new HashSet<Class>();
            Feedbacks = new HashSet<Feedback>();
            Payments = new HashSet<Payment>();
            RegistrationForms = new HashSet<RegistrationForm>();
            UserCourses = new HashSet<UserCourse>();
        }

        public int CourseId { get; set; }
        public string? CourseAvatarUrl { get; set; }
        public string? CourseName { get; set; }
        public string? Description { get; set; }
        public int? Duration { get; set; }
        public double? Price { get; set; }
        public bool? Status { get; set; }
        public DateTime? CreatedAt { get; set; }
        public int? NumberOfSlots { get; set; }
        public string? Code { get; set; }
        public string? Level { get; set; }

        public virtual ICollection<Class> Classes { get; set; }
        public virtual ICollection<Feedback> Feedbacks { get; set; }
        public virtual ICollection<Payment> Payments { get; set; }
        public virtual ICollection<RegistrationForm> RegistrationForms { get; set; }
        public virtual ICollection<UserCourse> UserCourses { get; set; }
    }
}
