using BusinessObjects.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace DataAccess
{
    public class DashboardDAO
    {
        public static string GetData()
        {
            using (var context = new SeedCenterContext())
            {
                int totalCourse = context.Courses.Count();
                int totalBlog = context.Accounts.Where(x => x.RoleId == 3 && x.ActiveStatus == true).Count();
                var classMembers = context.ClassMembers.Select(x => x.StudentEmail).ToList();

                int totalUser = context.Accounts.Where(x => x.RoleId == 4 && x.ActiveStatus == true && classMembers.Contains(x.Email)).Count();
                int totalStaff = context.Accounts.Where(x => x.RoleId == 2 && x.ActiveStatus == true).Count();
                int totalClass = context.Classes.Where(x => x.Status == true).Count();

                List<Payment> topPayment = context.Payments
                    .Include(x => x.Course)
                    .Include(x => x.Class)
                    .Include(x => x.StudentEmailNavigation)
                    .OrderByDescending(x => x.Amount).ToList();



                double totalAmount = (double)topPayment.Sum(x => x.Amount);


                List<Course> courses = context.Courses.ToList();
                List<object> totalMoneyByCourses = new List<object>();

                foreach (Course course in courses)
                {
                    double total = (double)topPayment.Where(x => x.CourseId == course.CourseId).Sum(x => x.Amount);

                    var co = new
                    {
                        course_name = course.CourseName,
                        total_amount = total,
                    };

                    totalMoneyByCourses.Add(co);
                }


                List<object> payments = new List<object>();
                foreach (Payment p in topPayment)
                {
                    var pt = new
                    {
                        course_id = p.CourseId,
                        course_name = p.Course!.CourseName,
                        payment_id = p.PaymentId,
                        email = p.StudentEmail,
                        address = p.StudentEmailNavigation!.Address,
                        emount = (double)p.Amount,
                        created_date = p.PaymentDate,
                        name = p.StudentEmailNavigation.Name,
                        phone = p.StudentEmailNavigation.Phone,
                    };
                    payments.Add(pt);
                }



                List<object> members = new List<object>();
                var distinctClassMember = context.Accounts.Where(x => x.RoleId == 4 && x.ActiveStatus == true).ToList();
                foreach (var item in distinctClassMember)
                {
                    var total = context.Payments.Where(x => x.StudentEmail == item.Email).Sum(x => x.Amount);

                    members.Add(new
                    {
                        name = item.Email,
                        email = item.Email,
                        phone = item.Email,
                        total
                    });
                }

                var result = new
                {
                    totalStaff,
                    totalClass,
                    total_blog = totalBlog,
                    total_course = totalCourse,
                    total_user = totalUser,
                    total_amount = totalAmount,
                    top_orders = payments,
                    total_money_by_course = totalMoneyByCourses,
                    members
                };

                var jsonSerializerSettings = new JsonSerializerSettings
                {
                    MaxDepth = 500 // Set the MaxDepth to a larger value, you can adjust it based on your requirements
                };

                string jsonResult = JsonConvert.SerializeObject(result, Newtonsoft.Json.Formatting.Indented, jsonSerializerSettings);

                return jsonResult;
            }
        }
    }
}
