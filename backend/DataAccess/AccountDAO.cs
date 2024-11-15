using BusinessObjects.Models;
using Microsoft.EntityFrameworkCore;
using System.Security.Principal;

namespace DataAccess
{
    public class AccountDAO
    {
        public static Account? SignIn(Account account)
        {
            try
            {
                using var context = new SeedCenterContext();
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
                using var context = new SeedCenterContext();
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
                using (var context = new SeedCenterContext())
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
                using (var context = new SeedCenterContext())
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
        public static Account? FindAccountByEmail(string email)
        {
            try
            {
                using var context = new SeedCenterContext();
                var account = context.Accounts
                    .Include(x => x.ClassTeacherEmailNavigations)
                    .Include(x => x.ClassStaffEmailNavigations)
                    .Include(x => x.ClassMembers)
                    .Include(x => x.Grades)
                    .SingleOrDefault(x => x.Email == email);

                if (account is not null)
                {
                    var classes = context.Classes.Where(x => x.StaffEmail == email).ToList();
                    var grades = context.Grades.Where(x => x.StudentEmail == email).ToList();
                  
                    account.Grades = grades;

                    return account;
                }

            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
            return null;
        }

        public static List<Account> FindByRole(int roleId)
        {
            try
            {
                using var context = new SeedCenterContext();
                return context.Accounts.Include(x => x.ClassMembers).Where(x => x.RoleId == roleId).ToList();
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
                account.Password = "Abc1234!";
                using var context = new SeedCenterContext();
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
                using var context = new SeedCenterContext();
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
