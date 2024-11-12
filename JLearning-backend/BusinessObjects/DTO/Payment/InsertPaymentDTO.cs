namespace BusinessObjects.DTO.Payment;
public class InsertPaymentDTO
{
    public int? RegisterId { get; set; }
    public string PaymentMethod { get; set; } = null!;
    public int? ClassId { get; set; } = null!;
    public int? CourseId { get; set; } = null!;
    public string? StudentEmail { get; set; } = null!;
    public decimal Amount { get; set; }
    public DateTime PaymentDate { get; set; } 
    public string StudentName { get; set; } = null!;
    public string StudentPhone { get; set; } = null!;
    public string Address { get; set; } = null!;
    public string DateOfBirth { get; set; } = null!;
}
