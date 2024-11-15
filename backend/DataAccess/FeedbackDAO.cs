using BusinessObjects.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class FeedBackDAO
    {
        public static Feedback? FindFeedBackById(int? courseId, int classId, string email)
        {
            Feedback? fb = null;
            try
            {
                using var context = new SeedCenterContext();
                fb = context.Feedbacks
                    .Include(x => x.Course)
                    .Include(x => x.Class)
                    .Include(x => x.EmailNavigation)
                    .SingleOrDefault(x => x.CourseId == courseId && x.ClassId == classId && x.Email == email);
            }
            catch (Exception e)
            {
                throw;
            }
            return fb;
        }

        public static List<Feedback> GetFeebacks()
        {
            List<Feedback> fb = null;
            try
            {
                using (var context = new SeedCenterContext())
                {
                    fb = context.Feedbacks
                        .Include(x => x.Course)
                    .Include(x => x.Class)
                    .Include(x => x.EmailNavigation).ToList();
                }
            }
            catch (Exception e)
            {
                throw;
            }
            return fb;
        }
        public static void CreateFeedback(Feedback fb)
        {
            try
            {
                using var context = new SeedCenterContext();

                var exist = context.Feedbacks.FirstOrDefault(x => x.ClassId == fb.ClassId && x.CourseId == fb.CourseId && x.Email == fb.Email);

                if (exist is not null)
                {
                    exist.Star = fb.Star;
                    exist.Message = fb.Message;
                }
                else
                {
                    context.Feedbacks.Add(fb);
                }

                context.SaveChanges();
            }
            catch (Exception e)
            {
                throw;
            }
        }
        public static void UpdateFeedback(Feedback fb)
        {

            try
            {
                using (var context = new SeedCenterContext())
                {
                    context.Entry<Feedback>(fb).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                    context.SaveChanges();
                }
            }
            catch (Exception e)
            {
                throw;
            }
        }
    }
}
