using BusinessObjects.Models;

namespace Reporitories
{
    public interface IAccountRepository
    {
        Account? SignIn(Account account);
        bool SignUp(Account account);
        bool ChangePassword(Account account);
        void UpdateAccount(Account account);
        Account FindAccountByEmail(string email);
        bool InsertAccount(Account account);
        bool UpdateRole(Account account);
        List<Account> FindByRole(int roleId);
    }
}
