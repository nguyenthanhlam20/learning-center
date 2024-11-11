using System;
using System.Collections.Generic;

namespace BusinessObjects.Models
{
    public partial class ClassMember
    {
        public string StudentEmail { get; set; } = null!;
        public int ClassId { get; set; }
        public DateTime? EnrollmentDate { get; set; }
        public bool? Status { get; set; }

        public virtual Class Class { get; set; } = null!;
        public virtual Account StudentEmailNavigation { get; set; } = null!;
    }
}
