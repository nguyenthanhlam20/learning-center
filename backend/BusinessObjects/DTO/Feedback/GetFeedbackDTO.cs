namespace BusinessObjects.DTO.Feedback;
public class GetFeedbackDTO
{
    public int CourseId { get; set; }
    public int ClassId { get; set; }
    public string Email { get; set; } = null!;
}
