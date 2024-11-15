using System.Text.Json.Serialization;

namespace BusinessObjects.DTO
{
    public class UpdateCourseDTO
    {
        [JsonPropertyName("course_id")]
        public int CourseId { get; set; }
        [JsonPropertyName("course_avatar_url")]
        public string CourseAvatarUrl { get; set; }
        [JsonPropertyName("course_name")]
        public string CourseName { get; set; }
        [JsonPropertyName("description")]
        public string Description { get; set; }
        [JsonPropertyName("number_of_slots")]
        public int NumberOfSlots { get; set; }
        [JsonPropertyName("price")]
        public double Price { get; set; }
        [JsonPropertyName("status")]
        public bool Status { get; set; }
        [JsonPropertyName("level")]
        public string? Level { get; set; }

        [JsonPropertyName("code")]
        public string? Code { get; set; }
    }
}
