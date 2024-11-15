namespace BusinessObjects.DTO.Feedback;
public class AddFeedbackDTO
{
    public int Star { get; set; }
    public string Message { get; set; } = null!;
    public int CourseId { get; set; }
    public int ClassId { get; set; }
    public string Email { get; set; } = null!;
}
