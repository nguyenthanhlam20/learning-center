using BusinessObjects.Models;


namespace Reporitories
{
    public interface IPaymentRepository
    {
        List<Payment> GetPayments();
        List<Payment> GetPaymentsByUser(string email);
        int InsertPayment(Payment payment);
        Payment? GetPaymentById(int id);

        void UpdateRegisterStatus(int id);
    }
}
