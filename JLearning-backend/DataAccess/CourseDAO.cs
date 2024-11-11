using BusinessObjects.Models;
using Microsoft.EntityFrameworkCore;


namespace DataAccess;
public class CourseDAO
{
    public static List<Course> GetCourses()
    {
        var listCourses = new List<Course>();
        try
        {
            using var context = new JLearningContext();
            listCourses = context.Courses
                .Include(x => x.Chapters)
                .ToList();
            foreach (var list in listCourses)
            {
                foreach (var chaps in list.Chapters)
                {
                    chaps.Lessons = context.Lessons.Where(x => x.ChapterId == chaps.ChapterId).ToList();
                    chaps.Tests = context.Tests.Where(x => x.ChapterId == chaps.ChapterId).ToList();
                    foreach (var item in chaps.Tests)
                    {
                        item.Questions = context.Questions.Where(x => x.TestId == item.TestId).ToList();
                    }
                }
            }
        }
        catch (Exception e)
        {

        }
        return listCourses;
    }
    public static Course? FindCourseById(int id)
    {
        try
        {
            using var context = new JLearningContext();
            var course = context.Courses
                .Include(u => u.Classes)
                .SingleOrDefault(x => x.CourseId == id);


            var classes = new List<Class>();
            foreach (var item in course.Classes)
            {
                var account = context.Accounts.SingleOrDefault(x => x.Email == item.TeacherEmail);
                var classMembers = context.ClassMembers.Where(x => x.ClassId == item.ClassId).ToList();

                item.ClassMembers = classMembers;
                item.TeacherEmailNavigation = account;
                classes.Add(item);
            }

            course.Classes = classes;
            return course;
        }
        catch (Exception e)
        {
            return null;
        }
    }
    public static void CreateCourse(Course c)
    {
        try
        {
            using (var context = new JLearningContext())
            {
                context.Courses.Add(c);
                context.SaveChanges();
            }
        }
        catch (Exception e)
        {

        }
    }
    public static void UpdateCourse(Course c)
    {

        try
        {
            using (var context = new JLearningContext())
            {
                context.Entry<Course>(c).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                context.SaveChanges();
            }
        }
        catch (Exception e)
        {

        }
    }
    public static List<Course> FindCoursesByEmail(string email)
    {
        var listCourses = new List<Course>();
        try
        {
            using (var context = new JLearningContext())
            {
                var usercourse = context.UserCourses
               .Where(x => x.Email == email)
               .ToList();

                var courseIds = usercourse.Select(x => x.CourseId).ToList();

                listCourses = context.Courses
                    .Where(x => courseIds.Contains(x.CourseId))
                    .ToList();
            }
        }
        catch (Exception e)
        {

        }
        return listCourses;
    }

    public static void CreateUserCourse(UserCourse uc)
    {
        try
        {
            using (var context = new JLearningContext())
            {
                context.UserCourses.Add(uc);
                context.SaveChanges();
            }
        }
        catch (Exception e)
        {

            Console.WriteLine("Error while trying to add new user course: " + e.Message);
        }
    }
}
