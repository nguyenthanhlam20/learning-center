using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;

namespace BusinessObjects.Models
{
    public partial class SeedCenterContext : DbContext
    {
        public SeedCenterContext()
        {
        }

        public SeedCenterContext(DbContextOptions<SeedCenterContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Account> Accounts { get; set; } = null!;
        public virtual DbSet<Class> Classes { get; set; } = null!;
        public virtual DbSet<ClassMember> ClassMembers { get; set; } = null!;
        public virtual DbSet<Contact> Contacts { get; set; } = null!;
        public virtual DbSet<Course> Courses { get; set; } = null!;
        public virtual DbSet<Feedback> Feedbacks { get; set; } = null!;
        public virtual DbSet<Grade> Grades { get; set; } = null!;
        public virtual DbSet<Payment> Payments { get; set; } = null!;
        public virtual DbSet<RegistrationForm> RegistrationForms { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<Support> Supports { get; set; } = null!;
        public virtual DbSet<UserCourse> UserCourses { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                var config = new ConfigurationBuilder()
                    .SetBasePath(Directory.GetCurrentDirectory())
                    .AddJsonFile("appsettings.json")
                    .Build();

                optionsBuilder.UseSqlServer(config.GetConnectionString("DB"));
            }

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Account>(entity =>
            {
                entity.HasKey(e => e.Email)
                    .HasName("PK__Account__AB6E6165581A1470");

                entity.ToTable("Account");

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .HasColumnName("email");

                entity.Property(e => e.ActiveStatus)
                    .IsRequired()
                    .HasColumnName("active_status")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.Address)
                    .HasMaxLength(200)
                    .HasColumnName("address");

                entity.Property(e => e.AvatarUrl)
                    .HasMaxLength(1000)
                    .HasColumnName("avatar_url");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("date")
                    .HasColumnName("created_date");

                entity.Property(e => e.DateOfBirth)
                    .HasColumnType("date")
                    .HasColumnName("date_of_birth");

                entity.Property(e => e.Description)
                    .HasMaxLength(500)
                    .HasColumnName("description");

                entity.Property(e => e.Gender).HasColumnName("gender");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.Property(e => e.Password)
                    .HasMaxLength(255)
                    .HasColumnName("password");

                entity.Property(e => e.Phone)
                    .HasMaxLength(10)
                    .HasColumnName("phone");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Accounts)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Account__role_id__5FB337D6");
            });

            modelBuilder.Entity<Class>(entity =>
            {
                entity.Property(e => e.ClassId).HasColumnName("class_id");

                entity.Property(e => e.ClassName)
                    .HasMaxLength(50)
                    .HasColumnName("class_name");

                entity.Property(e => e.CourseId).HasColumnName("course_id");

                entity.Property(e => e.DaysOfWeek)
                    .HasMaxLength(50)
                    .HasColumnName("days_of_week");

                entity.Property(e => e.EndDate)
                    .HasColumnType("date")
                    .HasColumnName("end_date");

                entity.Property(e => e.EndTime).HasColumnName("end_time");

                entity.Property(e => e.NumberOfSlots).HasColumnName("number_of_slots");

                entity.Property(e => e.NumberOfStudent).HasColumnName("number_of_student");

                entity.Property(e => e.Room)
                    .HasMaxLength(50)
                    .HasColumnName("room");

                entity.Property(e => e.StaffEmail)
                    .HasMaxLength(100)
                    .HasColumnName("staff_email");

                entity.Property(e => e.StartDate)
                    .HasColumnType("date")
                    .HasColumnName("start_date");

                entity.Property(e => e.StartTime).HasColumnName("start_time");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.Property(e => e.TeacherEmail)
                    .HasMaxLength(100)
                    .HasColumnName("teacher_email");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.Classes)
                    .HasForeignKey(d => d.CourseId)
                    .HasConstraintName("FK__Classes__course___656C112C");

                entity.HasOne(d => d.StaffEmailNavigation)
                    .WithMany(p => p.ClassStaffEmailNavigations)
                    .HasForeignKey(d => d.StaffEmail)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Classes__staff_e__6754599E");

                entity.HasOne(d => d.TeacherEmailNavigation)
                    .WithMany(p => p.ClassTeacherEmailNavigations)
                    .HasForeignKey(d => d.TeacherEmail)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Classes__teacher__693CA210");
            });

            modelBuilder.Entity<ClassMember>(entity =>
            {
                entity.HasKey(e => new { e.StudentEmail, e.ClassId })
                    .HasName("PK__Class_Me__FDD5C8A78B8B77C6");

                entity.ToTable("Class_Member");

                entity.Property(e => e.StudentEmail)
                    .HasMaxLength(100)
                    .HasColumnName("student_email");

                entity.Property(e => e.ClassId).HasColumnName("class_id");

                entity.Property(e => e.EnrollmentDate)
                    .HasColumnType("date")
                    .HasColumnName("enrollment_date");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.HasOne(d => d.Class)
                    .WithMany(p => p.ClassMembers)
                    .HasForeignKey(d => d.ClassId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Class_Mem__class__619B8048");

                entity.HasOne(d => d.StudentEmailNavigation)
                    .WithMany(p => p.ClassMembers)
                    .HasForeignKey(d => d.StudentEmail)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Class_Mem__stude__6383C8BA");
            });

            modelBuilder.Entity<Contact>(entity =>
            {
                entity.ToTable("Contact");

                entity.Property(e => e.ContactId).HasColumnName("contact_id");

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .HasColumnName("email");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.Property(e => e.RequestDate)
                    .HasColumnType("date")
                    .HasColumnName("request_date");

                entity.Property(e => e.RequestMessage)
                    .HasMaxLength(500)
                    .HasColumnName("request_message");

                entity.Property(e => e.ResponseDate)
                    .HasColumnType("date")
                    .HasColumnName("response_date");

                entity.Property(e => e.ResponseMessage)
                    .HasMaxLength(500)
                    .HasColumnName("response_message");

                entity.Property(e => e.Status).HasColumnName("status");
            });

            modelBuilder.Entity<Course>(entity =>
            {
                entity.ToTable("Course");

                entity.Property(e => e.CourseId).HasColumnName("course_id");

                entity.Property(e => e.Code)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("code");

                entity.Property(e => e.CourseAvatarUrl)
                    .HasMaxLength(1000)
                    .HasColumnName("course_avatar_url");

                entity.Property(e => e.CourseName)
                    .HasMaxLength(100)
                    .HasColumnName("course_name");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("date")
                    .HasColumnName("created_at");

                entity.Property(e => e.Description)
                    .HasMaxLength(500)
                    .HasColumnName("description");

                entity.Property(e => e.Level)
                    .HasMaxLength(50)
                    .HasColumnName("level");

                entity.Property(e => e.NumberOfSlots).HasColumnName("number_of_slots");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.Status).HasColumnName("status");
            });

            modelBuilder.Entity<Feedback>(entity =>
            {
                entity.ToTable("Feedback");

                entity.Property(e => e.FeedbackId).HasColumnName("feedback_id");

                entity.Property(e => e.ClassId).HasColumnName("class_id");

                entity.Property(e => e.CourseId).HasColumnName("course_id");

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .HasColumnName("email");

                entity.Property(e => e.Message)
                    .HasMaxLength(500)
                    .HasColumnName("message");

                entity.Property(e => e.Star).HasColumnName("star");

                entity.HasOne(d => d.Class)
                    .WithMany(p => p.Feedbacks)
                    .HasForeignKey(d => d.ClassId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Feedback__class___6B24EA82");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.Feedbacks)
                    .HasForeignKey(d => d.CourseId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Feedback_Course");

                entity.HasOne(d => d.EmailNavigation)
                    .WithMany(p => p.Feedbacks)
                    .HasForeignKey(d => d.Email)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Feedback__email__6D0D32F4");
            });

            modelBuilder.Entity<Grade>(entity =>
            {
                entity.ToTable("GRADES");

                entity.Property(e => e.GradeId).HasColumnName("grade_id");

                entity.Property(e => e.ClassId).HasColumnName("class_id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("date")
                    .HasColumnName("created_at");

                entity.Property(e => e.GradeName)
                    .HasMaxLength(50)
                    .HasColumnName("grade_name");

                entity.Property(e => e.Listening)
                    .HasColumnType("decimal(3, 1)")
                    .HasColumnName("listening");

                entity.Property(e => e.Overall)
                    .HasColumnType("decimal(3, 1)")
                    .HasColumnName("overall");

                entity.Property(e => e.Reading)
                    .HasColumnType("decimal(3, 1)")
                    .HasColumnName("reading");

                entity.Property(e => e.Speaking)
                    .HasColumnType("decimal(3, 1)")
                    .HasColumnName("speaking");

                entity.Property(e => e.StudentEmail)
                    .HasMaxLength(100)
                    .HasColumnName("student_email");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("date")
                    .HasColumnName("updated_at");

                entity.Property(e => e.Writing)
                    .HasColumnType("decimal(3, 1)")
                    .HasColumnName("writing");

                entity.HasOne(d => d.Class)
                    .WithMany(p => p.Grades)
                    .HasForeignKey(d => d.ClassId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__GRADES__class_id__6FE99F9F");

                entity.HasOne(d => d.StudentEmailNavigation)
                    .WithMany(p => p.Grades)
                    .HasForeignKey(d => d.StudentEmail)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__GRADES__student___71D1E811");
            });

            modelBuilder.Entity<Payment>(entity =>
            {
                entity.ToTable("Payment");

                entity.Property(e => e.PaymentId).HasColumnName("payment_id");

                entity.Property(e => e.Amount)
                    .HasColumnType("decimal(18, 0)")
                    .HasColumnName("amount");

                entity.Property(e => e.ClassId).HasColumnName("class_id");

                entity.Property(e => e.CourseId).HasColumnName("course_id");

                entity.Property(e => e.PaymentDate)
                    .HasColumnType("date")
                    .HasColumnName("payment_date");

                entity.Property(e => e.PaymentMethod)
                    .HasMaxLength(50)
                    .HasColumnName("payment_method");

                entity.Property(e => e.StudentEmail)
                    .HasMaxLength(100)
                    .HasColumnName("student_email");

                entity.HasOne(d => d.Class)
                    .WithMany(p => p.Payments)
                    .HasForeignKey(d => d.ClassId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Payment__class_i__73BA3083");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.Payments)
                    .HasForeignKey(d => d.CourseId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Payment__course___75A278F5");

                entity.HasOne(d => d.StudentEmailNavigation)
                    .WithMany(p => p.Payments)
                    .HasForeignKey(d => d.StudentEmail)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Payment__student__778AC167");
            });

            modelBuilder.Entity<RegistrationForm>(entity =>
            {
                entity.ToTable("Registration_Form");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ClassId).HasColumnName("class_id");

                entity.Property(e => e.CourseId).HasColumnName("course_id");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("date")
                    .HasColumnName("created_date");

                entity.Property(e => e.Response)
                    .HasMaxLength(500)
                    .HasColumnName("response");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.Property(e => e.StudentEmail)
                    .HasMaxLength(100)
                    .HasColumnName("student_email");

                entity.HasOne(d => d.Class)
                    .WithMany(p => p.RegistrationForms)
                    .HasForeignKey(d => d.ClassId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Registrat__class__797309D9");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.RegistrationForms)
                    .HasForeignKey(d => d.CourseId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Registrat__cours__7B5B524B");

                entity.HasOne(d => d.StudentEmailNavigation)
                    .WithMany(p => p.RegistrationForms)
                    .HasForeignKey(d => d.StudentEmail)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Registrat__stude__7D439ABD");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("Role");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.Property(e => e.RoleName)
                    .HasMaxLength(50)
                    .HasColumnName("role_name");
            });

            modelBuilder.Entity<Support>(entity =>
            {
                entity.ToTable("Support");

                entity.Property(e => e.SupportId).HasColumnName("support_id");

                entity.Property(e => e.Message)
                    .HasMaxLength(4000)
                    .HasColumnName("message");

                entity.Property(e => e.SupportName)
                    .HasMaxLength(200)
                    .HasColumnName("support_name");
            });

            modelBuilder.Entity<UserCourse>(entity =>
            {
                entity.HasKey(e => new { e.CourseId, e.Email })
                    .HasName("PK__User_Cou__C5A811B8B50254CC");

                entity.ToTable("User_Course");

                entity.Property(e => e.CourseId).HasColumnName("course_id");

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .HasColumnName("email");

                entity.Property(e => e.EnrolledDate)
                    .HasColumnType("date")
                    .HasColumnName("enrolled_date");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.UserCourses)
                    .HasForeignKey(d => d.CourseId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__User_Cour__cours__00200768");

                entity.HasOne(d => d.EmailNavigation)
                    .WithMany(p => p.UserCourses)
                    .HasForeignKey(d => d.Email)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__User_Cour__email__01142BA1");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
