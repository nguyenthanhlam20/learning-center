using AutoMapper;
using BusinessObjects.DTO;
using BusinessObjects.DTO.Classes;
using BusinessObjects.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassController(SeedCenterContext context, IMapper mapper) : ControllerBase
    {
        private readonly SeedCenterContext _context = context;
        private readonly IMapper _mapper = mapper;

        // GET: api/Class
        [HttpGet]
        public async Task<ActionResult<List<ClassDTO>>> GetClasses()
        {
            var classes = await _context.Classes
                .Include(x => x.Course)
                .Include(x => x.ClassMembers)
                .Include(x => x.TeacherEmailNavigation)
                .Include(x => x.StaffEmailNavigation)
                .ToListAsync();
            var map = _mapper.Map<List<ClassDTO>>(classes);
            return map;
        }

        // GET: api/Class
        [HttpGet("get-by-user-email/{email}")]
        public async Task<ActionResult<List<ClassDTO>>> GetClassesByUserEmail(string email)
        {
            var classes = await _context.Classes
                .Include(x => x.Course)
                .Include(x => x.TeacherEmailNavigation)
                .Include(x => x.StaffEmailNavigation)
                .Include(x => x.ClassMembers)
                .Include(x => x.Grades)
                .Where(x => x.ClassMembers.Any(m => m.StudentEmail == email))
                .ToListAsync();
            var map = _mapper.Map<List<ClassDTO>>(classes);

            return map;
        }

        // GET: api/Class/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ClassDTO>> GetClass(int id)
        {
            var @class = await _context.Classes.FindAsync(id);

            if (@class == null)
            {
                return NotFound();
            }

            var map = _mapper.Map<ClassDTO>(@class);
            return map;
        }

        // PUT: api/Class/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClass(int id, UpdateClassDTO request)
        {
            if (id != request.ClassId)
            {
                return BadRequest();
            }

            try
            {
                var current = await _context.Classes.FirstOrDefaultAsync(x => x.ClassId == id);
               if(current is not null)
                {
                    current.Status = request.Status;
                    current.StartDate = request.StartDate;
                    current.EndDate = request.EndDate;
                    current.TeacherEmail = request.TeacherEmail;
                    current.StaffEmail = request.StaffEmail;
                    current.StartTime = request.StartTime;
                    current.EndTime = request.EndTime;
                    current.NumberOfSlots = request.NumberOfSlots;
                    current.NumberOfStudent = request.NumberOfStudent;
                    current.DaysOfWeek = request.DaysOfWeek;
                    current.ClassName = request.ClassName;
                    current.CourseId = request.CourseId;
                    current.Room = request.Room;

                    await _context.SaveChangesAsync();
                    return Ok(new ResponseDTO(true, "Chỉnh sửa thông tin lớp thành công"));
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return Ok(new ResponseDTO(false, "Chỉnh sửa thông tin lớp thất bại"));

        }

        // POST: api/Class
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<IActionResult> PostClass( AddClassDTO @class)
        {
            try
            {
                var map = _mapper.Map<Class>(@class);

                _context.Classes.Add(map);
                await _context.SaveChangesAsync();

                return Ok(new ResponseDTO(true, "Thêm mới lớp học thành công!"));
            }
            catch (Exception ex)
            {

                return Ok(new ResponseDTO(false, "Thêm mới lớp học thất bại!"));
            }
        }

        // DELETE: api/Class/5
        [HttpPost("deactivate-class")]
        public async Task<IActionResult> DeactiveClass(DeactivateClassDTO request)
        {
            var @class = await _context.Classes.FindAsync(request.ClassId);
            if (@class == null)
            {
                return NotFound();
            }

            @class.Status = false;
            await _context.SaveChangesAsync();

            return Ok(new ResponseDTO(true, "Cập nhật trạng thái lớp thành công!"));
        }
    }
}
