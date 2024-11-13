using BusinessObjects.DTO.Classes;
using BusinessObjects.Models;

namespace BusinessObjects.DTO.Grades;
public class GradeDTO
{
    public int GradeId { get; set; }
    public string? StudentEmail { get; set; }
    public int? ClassId { get; set; }
    public string? GradeName { get; set; }
    public decimal? Listening { get; set; }
    public decimal? Reading { get; set; }
    public decimal? Writing { get; set; }
    public decimal? Speaking { get; set; }
    public decimal? Overall { get; set; }
    public DateTime? CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }

}
