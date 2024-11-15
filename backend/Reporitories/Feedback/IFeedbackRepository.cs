using BusinessObjects.Models;

namespace Reporitories
{
    public interface IFeedbackRepository
    {
        public List<Feedback> GetFeebacks();
        Feedback? FindFeedBackById(int? courseId, int classId, string email);
        void CreateFeedback(Feedback fb);
        void UpdateFeedback(Feedback fb);
    }
}
