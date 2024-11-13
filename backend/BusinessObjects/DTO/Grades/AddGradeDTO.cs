namespace BusinessObjects.DTO.Grades;
public class AddGradeDTO
{
    public string? StudentEmail { get; set; }
    public int? ClassId { get; set; }
    public string? GradeName { get; set; }
    public decimal? Listening { get; set; }
    public decimal? Reading { get; set; }
    public decimal? Writing { get; set; }
    public decimal? Speaking { get; set; }
    public decimal? Overall { get; set; }
   
}
