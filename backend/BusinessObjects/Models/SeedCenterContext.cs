using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

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
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("server=LAPTOP-ALU23ESG;database=SeedCenter;uid=sa;pwd=55555;TrustServerCertificate=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Account>(entity =>
            {
                entity.HasKey(e => e.Email)
                    .HasName("PK__Account__AB6E616527259DEF");

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

                entity.Property(e => e.AvatarUrl).HasColumnName("avatar_url");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("date")
                    .HasColumnName("created_date");

                entity.Property(e => e.DateOfBirth)
                    .HasColumnType("date")
                    .HasColumnName("date_of_birth");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Gender).HasColumnName("gender");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .HasColumnName("name");

                entity.Property(e => e.Password)
                    .HasMaxLength(100)
                    .HasColumnName("password");

                entity.Property(e => e.Phone)
                    .HasMaxLength(10)
                    .HasColumnName("phone");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.Property(e => e.YearOfBirth).HasColumnName("year_of_birth");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Accounts)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Account__role_id__4D94879B");
            });

            modelBuilder.Entity<Class>(entity =>
            {
                entity.Property(e => e.ClassId).HasColumnName("class_id");

                entity.Property(e => e.ClassCode)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("class_code");

                entity.Property(e => e.ClassName)
                    .HasMaxLength(200)
                    .HasColumnName("class_name");

                entity.Property(e => e.CourseId).HasColumnName("course_id");

                entity.Property(e => e.DaysOfWeek)
                    .HasMaxLength(200)
                    .HasColumnName("days_of_week");

                entity.Property(e => e.EndDate)
                    .HasColumnType("date")
                    .HasColumnName("end_date");

                entity.Property(e => e.EndTime).HasColumnName("end_time");

                entity.Property(e => e.NumberOfSlots).HasColumnName("number_of_slots");

                entity.Property(e => e.NumberOfStudent).HasColumnName("number_of_student");

                entity.Property(e => e.Room)
                    .HasMaxLength(100)
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
                    .HasConstraintName("FK__Classes__course___5070F446");

                entity.HasOne(d => d.StaffEmailNavigation)
                    .WithMany(p => p.ClassStaffEmailNavigations)
                    .HasForeignKey(d => d.StaffEmail)
                    .HasConstraintName("FK__Classes__staff_e__5165187F");

                entity.HasOne(d => d.TeacherEmailNavigation)
                    .WithMany(p => p.ClassTeacherEmailNavigations)
                    .HasForeignKey(d => d.TeacherEmail)
                    .HasConstraintName("FK__Classes__teacher__52593CB8");
            });

            modelBuilder.Entity<ClassMember>(entity =>
            {
                entity.HasKey(e => new { e.StudentEmail, e.ClassId })
                    .HasName("PK__Class_Me__FDD5C8A73EF914FC");

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
                    .HasConstraintName("FK__Class_Mem__class__4E88ABD4");

                entity.HasOne(d => d.StudentEmailNavigation)
                    .WithMany(p => p.ClassMembers)
                    .HasForeignKey(d => d.StudentEmail)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Class_Mem__stude__4F7CD00D");
            });

            modelBuilder.Entity<Contact>(entity =>
            {
                entity.ToTable("Contact");

                entity.Property(e => e.ContactId).HasColumnName("contact_id");

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .HasColumnName("email");

                entity.Property(e => e.Name)
                    .HasMaxLength(200)
                    .HasColumnName("name");

                entity.Property(e => e.RequestDate)
                    .HasColumnType("date")
                    .HasColumnName("request_date");

                entity.Property(e => e.RequestMessage).HasColumnName("request_message");

                entity.Property(e => e.ResponseDate)
                    .HasColumnType("date")
                    .HasColumnName("response_date");

                entity.Property(e => e.ResponseMessage).HasColumnName("response_message");

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

                entity.Property(e => e.CourseAvatarUrl).HasColumnName("course_avatar_url");

                entity.Property(e => e.CourseName)
                    .HasMaxLength(200)
                    .HasColumnName("course_name");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("date")
                    .HasColumnName("created_at");

                entity.Property(e => e.Description)
                    .HasMaxLength(500)
                    .HasColumnName("description");

                entity.Property(e => e.Duration).HasColumnName("duration");

                entity.Property(e => e.Level)
                    .HasMaxLength(100)
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
                    .HasConstraintName("FK__Feedback__class___5EBF139D");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.Feedbacks)
                    .HasForeignKey(d => d.CourseId)
                    .HasConstraintName("FK_Feedback_Course");

                entity.HasOne(d => d.EmailNavigation)
                    .WithMany(p => p.Feedbacks)
                    .HasForeignKey(d => d.Email)
                    .HasConstraintName("FK__Feedback__email__534D60F1");
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
                    .HasConstraintName("FK__GRADES__class_id__5535A963");

                entity.HasOne(d => d.StudentEmailNavigation)
                    .WithMany(p => p.Grades)
                    .HasForeignKey(d => d.StudentEmail)
                    .HasConstraintName("FK__GRADES__student___5629CD9C");
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
                    .HasMaxLength(100)
                    .HasColumnName("payment_method");

                entity.Property(e => e.StudentEmail)
                    .HasMaxLength(100)
                    .HasColumnName("student_email");

                entity.HasOne(d => d.Class)
                    .WithMany(p => p.Payments)
                    .HasForeignKey(d => d.ClassId)
                    .HasConstraintName("FK__Payment__class_i__571DF1D5");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.Payments)
                    .HasForeignKey(d => d.CourseId)
                    .HasConstraintName("FK__Payment__course___5812160E");

                entity.HasOne(d => d.StudentEmailNavigation)
                    .WithMany(p => p.Payments)
                    .HasForeignKey(d => d.StudentEmail)
                    .HasConstraintName("FK__Payment__student__59063A47");
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
                    .HasConstraintName("FK__Registrat__class__59FA5E80");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.RegistrationForms)
                    .HasForeignKey(d => d.CourseId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Registrat__cours__5AEE82B9");

                entity.HasOne(d => d.StudentEmailNavigation)
                    .WithMany(p => p.RegistrationForms)
                    .HasForeignKey(d => d.StudentEmail)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Registrat__stude__5BE2A6F2");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("Role");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.Property(e => e.RoleName)
                    .HasMaxLength(100)
                    .HasColumnName("role_name");
            });

            modelBuilder.Entity<Support>(entity =>
            {
                entity.ToTable("Support");

                entity.Property(e => e.SupportId).HasColumnName("support_id");

                entity.Property(e => e.Message).HasColumnName("message");

                entity.Property(e => e.SupportName)
                    .HasMaxLength(200)
                    .HasColumnName("support_name");
            });

            modelBuilder.Entity<UserCourse>(entity =>
            {
                entity.HasKey(e => new { e.CourseId, e.Email })
                    .HasName("PK__User_Cou__C5A811B809B454C7");

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
                    .HasConstraintName("FK__User_Cour__cours__5CD6CB2B");

                entity.HasOne(d => d.EmailNavigation)
                    .WithMany(p => p.UserCourses)
                    .HasForeignKey(d => d.Email)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__User_Cour__email__5DCAEF64");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
