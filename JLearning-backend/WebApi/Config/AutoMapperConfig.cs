using AutoMapper;
using BusinessObjects.DTO;
using BusinessObjects.DTO.Accounts;
using BusinessObjects.DTO.Calendar;
using BusinessObjects.DTO.Classes;
using BusinessObjects.DTO.ClassMembers;
using BusinessObjects.DTO.Payment;
using BusinessObjects.DTO.RegistrationForms;
using BusinessObjects.Models;

namespace WebApi.Config
{
    public class AutoMapperConfig
    {
        public static IMapper Initialize()
        {
            var mapperConfig = new MapperConfiguration(config =>
            {
                config.CreateMap<AccountDTO, Account>()
                    .ForMember(dest => dest.Gender, opt => opt.MapFrom(src => src.Gender == 1 ? true : false));

                config.CreateMap<AddAccountDTO, Account>()
                    .ForMember(dest => dest.Gender, opt => opt.MapFrom(src => src.Gender == 1 ? true : false));

                config.CreateMap<Account, AccountDTO>()
                    .ForMember(dest => dest.DateOfBirth, opt => opt.MapFrom(src => src.DateOfBirth!.Value.ToString("yyyy-MM-dd")));

                config.CreateMap<BlogDetailDTO, BlogDetail>();
                config.CreateMap<BlogDetail, BlogDetailDTO>();

                config.CreateMap<BlogCategoryDTO, BlogCategory>();
                config.CreateMap<BlogCategory, BlogCategoryDTO>();

                config.CreateMap<BlogDTO, Blog>();
                config.CreateMap<Blog, BlogDTO>()
                .ForMember(dest => dest.BlogDetails, opt => opt.MapFrom(src => src.BlogDetails));

                config.CreateMap<ContactDTO, Contact>();
                config.CreateMap<Contact, ContactDTO>();

                config.CreateMap<FeedbackDTO, Feedback>();
                config.CreateMap<Feedback, FeedbackDTO>();

                // Support
                config.CreateMap<SupportDTO, Support>();
                config.CreateMap<Support, SupportDTO>();

                // Question
                config.CreateMap<QuestionDTO, Question>();
                config.CreateMap<Question, QuestionDTO>();

                // Chapter
                config.CreateMap<ChapterDTO, Chapter>();
                config.CreateMap<DeleteChapterDTO, Chapter>();
                config.CreateMap<UpdateChapterDTO, Chapter>();
                config.CreateMap<InsertChapterDTO, Chapter>();
                config.CreateMap<Chapter, ChapterDTO>();

                // Test
                config.CreateMap<TestDTO, Test>();
                config.CreateMap<GetTestDTO, Test>();
                config.CreateMap<UpdateTestDTO, Test>();
                config.CreateMap<InsertTestDTO, Test>();
                config.CreateMap<DeleteTestDTO, Test>();
                config.CreateMap<Test, TestDTO>();
                config.CreateMap<TestDoneDTO, TestDone>();
                config.CreateMap<TestDone, TestDoneDTO>();

                // Lesson
                config.CreateMap<LessonDTO, Lesson>();
                config.CreateMap<InsertLessonDTO, Lesson>();
                config.CreateMap<UpdateLessonDTO, Lesson>();
                config.CreateMap<DeleteLessonDTO, Lesson>();
                config.CreateMap<Lesson, LessonDTO>();

                config.CreateMap<LessonDoneDTO, LessonDone>();
                config.CreateMap<LessonDone, LessonDoneDTO>();


                // Course
                config.CreateMap<CourseDTO, Course>();
                config.CreateMap<UpdateCourseDTO, Course>();
                config.CreateMap<InsertCourseDTO, Course>();
                config.CreateMap<Course, CourseDTO>();

                config.CreateMap<UserCourseDTO, UserCourse>();
                config.CreateMap<UserCourse, UserCourseDTO>();

                // Payment
                config.CreateMap<PaymentDTO, Payment>();
                config.CreateMap<Payment, PaymentDTO>();

                config.CreateMap<Class, ClassDTO>()
                     .ForMember(dest => dest.StartDate, opt => opt.MapFrom(src => src.StartDate.ToString("yyyy-MM-dd")))
                     .ForMember(dest => dest.EndDate, opt => opt.MapFrom(src => src.EndDate.ToString("yyyy-MM-dd")));

                config.CreateMap<AddClassDTO, Class>();

                config.CreateMap<ClassMember, ClassMemberDTO>()
                    .ForMember(dest => dest.EnrollmentDate, opt => opt.MapFrom(src =>  src.EnrollmentDate!.Value.ToString("yyyy-MM-dd")))
;
                config.CreateMap<AddMemberClassDTO, ClassMember>();

                config.CreateMap<RegistrationForm, RegistrationFormDTO>()
                            .ForMember(dest => dest.CreatedDate, opt => opt.MapFrom(src => src.CreatedDate!.Value.ToString("yyyy-MM-dd")));

                config.CreateMap<AddRegistrationFormDTO, RegistrationForm>();

                config.CreateMap<Calendar, CalendarDTO>();
                config.CreateMap<AddCalendarDTO, Calendar>();

                config.CreateMap<InsertPaymentDTO, Payment>();
                config.CreateMap<Payment, PaymentDTO>();

            });

            return mapperConfig.CreateMapper();
        }
    }
}
