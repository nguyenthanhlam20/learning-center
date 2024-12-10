namespace Reporitories
{
    public interface IDashboardRepository
    {
        object GetData(DateTime? startDate, DateTime? endDate);
    }
}
