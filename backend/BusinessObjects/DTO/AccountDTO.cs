using BusinessObjects.DTO.Classes;
using BusinessObjects.DTO.ClassMembers;
using BusinessObjects.DTO.Grades;
using System.Text.Json.Serialization;

namespace BusinessObjects.DTO
{
    public class AccountDTO
    {
        [JsonPropertyName("email")]
        public string Email { get; set; }

        [JsonPropertyName("password")]
        public string? Password { get; set; }

        [JsonPropertyName("name")]
        public string? Name { get; set; }

        [JsonPropertyName("avatar_url")]
        public string? AvatarUrl { get; set; }

        [JsonPropertyName("phone")]
        public string? Phone { get; set; }

        [JsonPropertyName("address")]
        public string? Address { get; set; }

        [JsonPropertyName("year_of_birth")]
        public int? YearOfBirth { get; set; }

        [JsonPropertyName("gender")]
        public int? Gender { get; set; }

        [JsonPropertyName("role_id")]
        public int? RoleId { get; set; }

        [JsonPropertyName("status")]
        public bool? ActiveStatus { get; set; }

        [JsonPropertyName("date_of_birth")]
        public string? DateOfBirth { get; set; }

        [JsonPropertyName("description")]
        public string? Description { get; set; }

        [JsonPropertyName("created_date")]
        public DateTime? CreatedDate { get; set; }

        public  List<GradeDTO>? Grades { get; set; }

        [JsonPropertyName("classes")]
        public List<ClassDTO>? Classes { get; set; }

        [JsonPropertyName("class_member")]
        public List<ClassMemberDTO>? ClassMembers { get; set; }

    }
}
