using DataAccess;

namespace Reporitories
{
    public class DashboardRepository : IDashboardRepository
    {
        public object GetData(DateTime? startDate, DateTime? endDate)
            => DashboardDAO.GetData(startDate, endDate);
    }
}
