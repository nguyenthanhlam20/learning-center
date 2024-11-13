using BusinessObjects.Models;
using DataAccess;

namespace Reporitories
{
    public class PaymentRepository : IPaymentRepository
    {
        public List<Payment> GetPaymentsByUser(string email) => PaymentDAO.GetPaymentsByUser(email);
        
        public List<Payment> GetPayments() => PaymentDAO.GetPayments();

        public int InsertPayment(Payment payment) => PaymentDAO.InsertPayment(payment);

        public Payment? GetPaymentById(int id) => PaymentDAO.GetPaymentById(id);

        public void UpdateRegisterStatus(int id) => PaymentDAO.UpdateRegisterStatus(id);
    }
}
