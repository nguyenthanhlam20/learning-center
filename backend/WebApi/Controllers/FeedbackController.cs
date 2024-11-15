using AutoMapper;
using BusinessObjects.DTO;
using BusinessObjects.DTO.Feedback;
using BusinessObjects.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages.Manage;
using Reporitories;


namespace WebApi.Controllers
{
    [Route("api/feedback")]
    [ApiController]
    public class FeedbackController(IMapper mapper) : ControllerBase
    {
        // Repository
        private IFeedbackRepository repository = new FeedbackRepository();

        // Mapper
        private readonly IMapper _mapper = mapper;

        // GET api/<FeedbackController>/5
        [HttpPost("get/by-id")]
        public ActionResult Get([FromBody] GetFeedbackDTO feedback)
        {
            try
            {
                var fb = repository.FindFeedBackById(feedback.CourseId, feedback.ClassId, feedback.Email);
                if (fb == null) return NotFound();
                FeedbackDTO feedbackDTO = _mapper.Map<FeedbackDTO>(fb);
                return Ok(new
                {
                    email = feedback.Email,
                    star = feedbackDTO.Star,
                    message = feedbackDTO.Message,
                    classId = feedback.ClassId,
                    courseId = feedback.CourseId,
                    className =feedbackDTO.Class?.ClassName ?? "",
                    courseName = feedbackDTO.Course?.CourseName ?? "",
                });
            }
            catch (Exception)
            {

            }
            return BadRequest();
           
        }

        [HttpGet("get")]
        public ActionResult GetFeedbacks()
        {
            try
            {
                List<Feedback> feedbacks = repository.GetFeebacks();

                List<FeedbackDTO> feedbackDTOs = _mapper.Map<List<FeedbackDTO>>(feedbacks);
                return Ok(feedbackDTOs);
            }
            catch (Exception)
            {

            }
            return BadRequest();
        }

        // POST api/<FeedbackController>
        [HttpPost("insert")]
        public ActionResult InsertFeedback([FromBody] AddFeedbackDTO feedbackDTO)
        {
            try
            {
                Feedback Feedback = _mapper.Map<Feedback>(feedbackDTO);
                repository.CreateFeedback(Feedback);
                return Ok(new ResponseDTO(true, "Đánh giá khóa học thành công"));
            }
            catch (Exception)
            {
                return Ok(new ResponseDTO(false, "Đánh giá khóa học thất bại"));
            }
        }

        // PUT api/<FeedbackController>/5
        [HttpPut("update")]
        public ActionResult UpdateFeedback([FromBody] AddFeedbackDTO feedbackDTO)
        {
            try
            {
                var fb = repository.FindFeedBackById((int)feedbackDTO.CourseId, feedbackDTO.ClassId, feedbackDTO.Email);
                if (fb == null) return NotFound();
                fb.Star = feedbackDTO.Star;
                fb.Message = feedbackDTO.Message;

                Feedback feedback = _mapper.Map<Feedback>(fb);
                repository.UpdateFeedback(feedback);
                return Ok(new ResponseDTO(true, "Đánh giá khóa học thành công"));
            }
            catch (Exception)
            {
                return Ok(new ResponseDTO(false, "Đánh giá khóa học thất bại"));
            }

        }
    }
}
