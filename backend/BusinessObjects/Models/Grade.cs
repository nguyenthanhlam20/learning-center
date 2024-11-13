using System;
using System.Collections.Generic;

namespace BusinessObjects.Models
{
    public partial class Grade
    {
        public int GradeId { get; set; }
        public string? StudentEmail { get; set; }
        public int? ClassId { get; set; }
        public string? GradeName { get; set; }
        public decimal? Listening { get; set; }
        public decimal? Reading { get; set; }
        public decimal? Writing { get; set; }
        public decimal? Speaking { get; set; }
        public decimal? Overall { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public virtual Class? Class { get; set; }
        public virtual Account? StudentEmailNavigation { get; set; }
    }
}
