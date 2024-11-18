using BusinessObjects.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAccess
{
    public class PaymentDAO
    {
        public static List<Payment> GetPayments()
        {
            var listPayments = new List<Payment>();
            try
            {
                using (var context = new SeedCenterContext())
                {
                    listPayments = context.Payments
                        .Include(x => x.Class)
                        .Include(x => x.Course)
                        .Include(x => x.StudentEmailNavigation)
                        .OrderByDescending(x => x.PaymentId)
                        .ToList();
                }
            }
            catch (Exception e)
            {

                throw new Exception(e.Message);
            }
            return listPayments;
        }
        public static List<Payment> GetPaymentsByUser(string email)
        {
            var listPayments = new List<Payment>();
            try
            {
                using (var context = new SeedCenterContext())
                {
                    listPayments = context.Payments
                         .Include(x => x.Class)
                        .Include(x => x.Course)
                        .Include(x => x.StudentEmailNavigation)
                        .Where(p => p.StudentEmail == email).ToList();
                }
            }
            catch (Exception e)
            {

            }
            return listPayments;
        }

        public static int InsertPayment(Payment payment)
        {
            try
            {
                using var context = new SeedCenterContext();


                var exist = context.Payments
                    .FirstOrDefault(x => x.StudentEmail == payment.StudentEmail 
                    && x.CourseId == payment.CourseId
                    && x.ClassId == payment.ClassId);

                if(exist is not null)
                {
                    exist.Amount = payment.Amount;
                    exist.PaymentMethod = payment.PaymentMethod;
                    exist.PaymentDate = payment.PaymentDate;   
                    if (context.SaveChanges() > 0)
                    {
                        return exist.PaymentId;
                    }
                }
                else
                {
                    context.Payments.Add(payment);
                    if (context.SaveChanges() > 0)
                    {
                        return payment.PaymentId;
                    }
                }

               
            }
            catch (Exception e)
            {

            }
            return 0;
        }

        public static Payment? GetPaymentById(int id)
        {
            try
            {
                using var context = new SeedCenterContext();
                return context.Payments
                    .Include(x => x.Course)
                    .Include(x => x.Class)
                    .Include(x => x.StudentEmailNavigation)
                    .FirstOrDefault(x => x.PaymentId == id);
            }
            catch (Exception e)
            {


            }
            return null;
        }

        public static void UpdateRegisterStatus(int id)
        {
            try
            {
                using var context = new SeedCenterContext();

                var register = context.RegistrationForms.FirstOrDefault(x => x.Id == id);
                if (register is not null)
                {
                    register.Status = 4;
                    context.SaveChangesAsync();
                }

            }
            catch (Exception e)
            {


            }
        }
    }
}
