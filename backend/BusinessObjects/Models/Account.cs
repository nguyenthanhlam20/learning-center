using System;
using System.Collections.Generic;

namespace BusinessObjects.Models
{
    public partial class Account
    {
        public Account()
        {
            ClassMembers = new HashSet<ClassMember>();
            ClassStaffEmailNavigations = new HashSet<Class>();
            ClassTeacherEmailNavigations = new HashSet<Class>();
            Feedbacks = new HashSet<Feedback>();
            Grades = new HashSet<Grade>();
            Payments = new HashSet<Payment>();
            RegistrationForms = new HashSet<RegistrationForm>();
            UserCourses = new HashSet<UserCourse>();
        }

        public string Email { get; set; } = null!;
        public string Name { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string? AvatarUrl { get; set; }
        public string? Phone { get; set; }
        public string? Address { get; set; }
        public bool? Gender { get; set; }
        public int RoleId { get; set; }
        public bool? ActiveStatus { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string? Description { get; set; }
        public DateTime? CreatedDate { get; set; }

        public virtual Role Role { get; set; } = null!;
        public virtual ICollection<ClassMember> ClassMembers { get; set; }
        public virtual ICollection<Class> ClassStaffEmailNavigations { get; set; }
        public virtual ICollection<Class> ClassTeacherEmailNavigations { get; set; }
        public virtual ICollection<Feedback> Feedbacks { get; set; }
        public virtual ICollection<Grade> Grades { get; set; }
        public virtual ICollection<Payment> Payments { get; set; }
        public virtual ICollection<RegistrationForm> RegistrationForms { get; set; }
        public virtual ICollection<UserCourse> UserCourses { get; set; }
    }
}
