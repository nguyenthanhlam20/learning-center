using System;
using System.Collections.Generic;

namespace BusinessObjects.Models
{
    public partial class Support
    {
        public int SupportId { get; set; }
        public string SupportName { get; set; } = null!;
        public string Message { get; set; } = null!;
    }
}
