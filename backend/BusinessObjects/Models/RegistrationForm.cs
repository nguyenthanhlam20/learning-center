using System;
using System.Collections.Generic;

namespace BusinessObjects.Models
{
    public partial class RegistrationForm
    {
        public int Id { get; set; }
        public string StudentEmail { get; set; } = null!;
        public int ClassId { get; set; }
        public int CourseId { get; set; }
        public int? Status { get; set; }
        public string? Response { get; set; }
        public DateTime? CreatedDate { get; set; }

        public virtual Class Class { get; set; } = null!;
        public virtual Course Course { get; set; } = null!;
        public virtual Account StudentEmailNavigation { get; set; } = null!;
    }
}
