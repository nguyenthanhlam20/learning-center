using System;
using System.Collections.Generic;

namespace BusinessObjects.Models
{
    public partial class Feedback
    {
        public int FeedbackId { get; set; }
        public string? Email { get; set; }
        public int? Star { get; set; }
        public string? Message { get; set; }
        public int? CourseId { get; set; }
        public int? ClassId { get; set; }

        public virtual Class? Class { get; set; }
        public virtual Course? Course { get; set; }
        public virtual Account? EmailNavigation { get; set; }
    }
}
