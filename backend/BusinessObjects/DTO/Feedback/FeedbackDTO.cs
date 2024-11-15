using BusinessObjects.DTO.Classes;
using BusinessObjects.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace BusinessObjects.DTO
{
    public class FeedbackDTO
    {
        public int? FeedbackId { get; set; }
        public int? Star { get; set; }
        public string? Message { get; set; }
        public CourseDTO? Course { get; set; }
        public ClassDTO? Class { get; set; }
        public AccountDTO? EmailNavigation { get; set; }

    }
}
