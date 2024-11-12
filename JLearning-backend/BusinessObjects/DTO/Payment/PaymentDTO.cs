
using BusinessObjects.DTO.Classes;
using System.Text.Json.Serialization;

namespace BusinessObjects.DTO
{
    public class PaymentDTO
    {
        public int PaymentId { get; set; }
        public string PaymentMethod { get; set; } = null!;
        public int? ClassId { get; set; }
        public int? CourseId { get; set; }
        public string? StudentEmail { get; set; }
        public decimal Amount { get; set; }
        public DateTime PaymentDate { get; set; }
        public virtual ClassDTO? Class { get; set; }
        public virtual CourseDTO? Course { get; set; }

        [JsonPropertyName("student")]
        public virtual AccountDTO? StudentEmailNavigation { get; set; }

    }
}


