using System.Text.Json.Serialization;

namespace BusinessObjects.DTO.ClassMembers;
public class AddMemberClassDTO
{
    public int ClassId { get; set; }

    [JsonPropertyName("email")]
    public string Email { get; set; } = null!;

    [JsonPropertyName("name")]
    public string Name { get; set; } = null!;

    [JsonPropertyName("avatar_url")]
    public string? AvatarUrl { get; set; }

    [JsonPropertyName("phone")]
    public string? Phone { get; set; }

    [JsonPropertyName("address")]
    public string? Address { get; set; }

    [JsonPropertyName("gender")]
    public int Gender { get; set; }

    [JsonPropertyName("role_id")]
    public int RoleId { get; set; }

    [JsonPropertyName("status")]
    public bool ActiveStatus { get; set; }

    [JsonPropertyName("date_of_birth")]
    public DateTime? DateOfBirth { get; set; }

    [JsonPropertyName("description")]
    public string? Description { get; set; }

}
