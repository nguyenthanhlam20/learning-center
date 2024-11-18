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
            using var context = new SeedCenterContext();
            listCourses = context.Courses
                .Include(x => x.Classes)
                .OrderByDescending(x => x.CourseId)
                .ToList();

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
            using var context = new SeedCenterContext();
            var course = context.Courses
                .Include(u => u.Classes)
                .SingleOrDefault(x => x.CourseId == id);

            if (course is null) return null;
            var classes = new List<Class>();
            foreach (var item in course.Classes)
            {
                var account = context.Accounts.SingleOrDefault(x => x.Email == item.TeacherEmail);
                var classMembers = context.ClassMembers.Where(x => x.ClassId == item.ClassId).ToList();
                var registrationForms = context.RegistrationForms.Where(x => x.ClassId == item.ClassId).ToList();

                item.ClassMembers = classMembers;
                item.TeacherEmailNavigation = account;
                item.RegistrationForms = registrationForms;
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
            using (var context = new SeedCenterContext())
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
            using var context = new SeedCenterContext();


            var exist = context.Courses.FirstOrDefault(x => x.CourseId == c.CourseId);
            if (exist is not null)
            {
                exist.CourseName = c.CourseName;
                exist.Code = c.Code;
                exist.Price = c.Price;
                exist.CourseAvatarUrl = c.CourseAvatarUrl;
                exist.Level = c.Level;
                exist.Description = c.Description;
                exist.Status = c.Status;
                exist.NumberOfSlots = c.NumberOfSlots;

                var slots = context.Classes.Where(x => x.CourseId == exist.CourseId).ToList();

                slots.ForEach(x => x.NumberOfSlots = c.NumberOfSlots ?? 1);



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
            using (var context = new SeedCenterContext())
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
            using var context = new SeedCenterContext();
            var any = context.UserCourses.Any(x => x.CourseId == uc.CourseId && x.Email == uc.Email);
            if (!any)
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
