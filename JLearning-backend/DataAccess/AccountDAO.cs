using BusinessObjects.Models;
using System.Security.Principal;

namespace DataAccess
{
    public class AccountDAO
    {
        public static Account? SignIn(Account account)
        {
            try
            {
                using var context = new JlearningContext();
                return context.Accounts.SingleOrDefault(x => x.Email == account.Email && x.Password == account.Password);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
                return null;
            }
        }


        public static bool SignUp(Account account)
        {
            try
            {
                using var context = new JlearningContext();
                context.Accounts.Add(account);

                if (context.SaveChanges() > 0)
                {
                    return true;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
                return false;
            }
            return false;
        }
        public static void UpdateAccount(Account a)
        {

            try
            {
                using (var context = new JlearningContext())
                {
                    context.Entry<Account>(a).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                    context.SaveChanges();
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
        }
        public static bool ChangePassword(Account a)
        {
            bool status = false;
            try
            {
                using (var context = new JlearningContext())
                {
                    context.Entry<Account>(a).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                    if (context.SaveChanges() > 0)
                    {
                        status = true;
                    }
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
            return status;
        }
        public static Account FindAccountByEmail(string email)
        {
            Account account = new Account();
            try
            {
                using (var context = new JlearningContext())
                {
                    account = context.Accounts.SingleOrDefault(x => x.Email == email);
                }
            }
            catch (Exception e)
            {

                Console.WriteLine(e.ToString());
            }
            return account;
        }

        public static List<Account> FindByRole(int roleId)
        {
            try
            {
                using var context = new JlearningContext();
                return context.Accounts.Where(x => x.RoleId == roleId).ToList();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
                return new List<Account>();
            }
        }

        public static bool InsertAccount(Account account)
        {
            try
            {
                using var context = new JlearningContext();
                context.Accounts.Add(account);
                if (context.SaveChanges() > 0)
                {
                    return true;
                }
                return false;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
                return false;
            }
        }

        public static bool UpdateRole(Account account)
        {
            bool status = false;
            try
            {
                using var context = new JlearningContext();
                context.Entry<Account>(account).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                if (context.SaveChanges() > 0)
                {
                    status = true;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
            return status;
        }
    }
}
