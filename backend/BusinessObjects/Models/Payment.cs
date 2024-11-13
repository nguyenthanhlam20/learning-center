using System;
using System.Collections.Generic;

namespace BusinessObjects.Models
{
    public partial class Payment
    {
        public int PaymentId { get; set; }
        public string PaymentMethod { get; set; } = null!;
        public int? ClassId { get; set; }
        public int? CourseId { get; set; }
        public string? StudentEmail { get; set; }
        public decimal Amount { get; set; }
        public DateTime PaymentDate { get; set; }

        public virtual Class? Class { get; set; }
        public virtual Course? Course { get; set; }
        public virtual Account? StudentEmailNavigation { get; set; }
    }
}
