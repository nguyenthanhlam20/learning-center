using BusinessObjects.Models;
using DataAccess;

namespace Reporitories
{
    public class AccountRepository : IAccountRepository
    {
        public bool ChangePassword(Account account) => AccountDAO.ChangePassword(account);

        public Account FindAccountByEmail(string email) => AccountDAO.FindAccountByEmail(email);

        public List<Account> FindByRole(int roleId) => AccountDAO.FindByRole(roleId);

        public bool InsertAccount(Account account) => AccountDAO.InsertAccount(account);

        public bool UpdateRole(Account account) => AccountDAO.UpdateRole(account);

        public Account? SignIn(Account account) => AccountDAO.SignIn(account);

        public bool SignUp(Account account) => AccountDAO.SignUp(account);

        public void UpdateAccount(Account account) => AccountDAO.UpdateAccount(account);

    }
}
