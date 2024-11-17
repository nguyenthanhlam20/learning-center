using AutoMapper;
using BusinessObjects.DTO;
using BusinessObjects.DTO.Accounts;
using BusinessObjects.DTO.Classes;
using BusinessObjects.DTO.ClassMembers;
using BusinessObjects.DTO.Feedback;
using BusinessObjects.DTO.Grades;
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

                config.CreateMap<UpdateAccountDTO, Account>()
                 .ForMember(dest => dest.Gender, opt => opt.MapFrom(src => src.Gender == 1 ? true : false));

                config.CreateMap<Account, AccountDTO>()
                    .ForMember(dest => dest.DateOfBirth, opt => opt.MapFrom(src => src.DateOfBirth!.Value.ToString("yyyy-MM-dd")));

                config.CreateMap<ContactDTO, Contact>();
                config.CreateMap<Contact, ContactDTO>();

                config.CreateMap<AddFeedbackDTO, Feedback>();
                config.CreateMap<Feedback, FeedbackDTO>();

                // Support
                config.CreateMap<SupportDTO, Support>();
                config.CreateMap<Support, SupportDTO>();

                // Course
                config.CreateMap<CourseDTO, Course>();
                config.CreateMap<UpdateCourseDTO, Course>();
                config.CreateMap<InsertCourseDTO, Course>();
                config.CreateMap<Course, CourseDTO>();

                config.CreateMap<UserCourseDTO, UserCourse>();
                config.CreateMap<UserCourse, UserCourseDTO>();

                // Payment
                config.CreateMap<PaymentDTO, Payment>();
                config.CreateMap<Payment, PaymentDTO>()
                        .ForMember(dest => dest.PaymentDate, opt => opt.MapFrom(src => src.PaymentDate.ToString("yyyy-MM-dd")));

                config.CreateMap<Class, ClassDTO>()
                     .ForMember(dest => dest.StartDate, opt => opt.MapFrom(src => src.StartDate.ToString("yyyy-MM-dd")))
                     .ForMember(dest => dest.EndDate, opt => opt.MapFrom(src => src.EndDate.ToString("yyyy-MM-dd")));

                config.CreateMap<AddClassDTO, Class>();

                config.CreateMap<ClassMember, ClassMemberDTO>()
                    .ForMember(dest => dest.EnrollmentDate, opt => opt.MapFrom(src => src.EnrollmentDate!.Value.ToString("yyyy-MM-dd")))
;
                config.CreateMap<AddMemberClassDTO, ClassMember>();

                config.CreateMap<RegistrationForm, RegistrationFormDTO>()
                            .ForMember(dest => dest.CreatedDate, opt => opt.MapFrom(src => src.CreatedDate!.Value.ToString("yyyy-MM-dd")));

                config.CreateMap<AddRegistrationFormDTO, RegistrationForm>();

                config.CreateMap<InsertPaymentDTO, Payment>();
                config.CreateMap<Payment, PaymentDTO>();

                config.CreateMap<GradeDTO, Grade>();
                config.CreateMap<AddGradeDTO, Grade>();
                config.CreateMap<Grade, GradeDTO>();
            });

            return mapperConfig.CreateMapper();
        }
    }
}
