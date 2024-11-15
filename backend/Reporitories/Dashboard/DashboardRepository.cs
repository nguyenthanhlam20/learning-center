using DataAccess;

namespace Reporitories
{
    public class DashboardRepository : IDashboardRepository
    {
        public object GetData()
        {
            return DashboardDAO.GetData();
        }
    }
}
