using System.Text.Json.Serialization;

namespace BusinessObjects.DTO;
public class CourseDTO
{
    [JsonPropertyName("course_id")]
    public int CourseId { get; set; }
    [JsonPropertyName("course_avatar_url")]
    public string? CourseAvatarUrl { get; set; }
    [JsonPropertyName("course_name")]
    public string? CourseName { get; set; }
    [JsonPropertyName("description")]
    public string? Description { get; set; }
    [JsonPropertyName("duration")]
    public int Duration { get; set; }
    [JsonPropertyName("price")]
    public double Price { get; set; }
    [JsonPropertyName("status")]
    public bool Status { get; set; }
    [JsonPropertyName("created_at")]
    public DateTime CreatedAt { get; set; }
    [JsonPropertyName("chapters")]
    public  ICollection<ChapterDTO>? Chapters { get; set; }

    [JsonPropertyName("number_of_slots")]
    public int? NumberOfSlots { get; set; }

    [JsonPropertyName("code")]
    public string? Code { get; set; }

    [JsonPropertyName("level")]
    public string? Level { get; set; }
}
