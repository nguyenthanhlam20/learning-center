using System;
using System.Collections.Generic;

namespace BusinessObjects.Models
{
    public partial class Contact
    {
        public int ContactId { get; set; }
        public string Email { get; set; } = null!;
        public string Name { get; set; } = null!;
        public DateTime? RequestDate { get; set; }
        public DateTime? ResponseDate { get; set; }
        public bool? Status { get; set; }
        public string RequestMessage { get; set; } = null!;
        public string? ResponseMessage { get; set; }
    }
}
