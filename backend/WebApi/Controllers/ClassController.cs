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
                .OrderByDescending(x => x.StartDate)
                .ThenByDescending(x => x.EndDate)
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
                 .OrderByDescending(x => x.StartDate)
                .ThenByDescending(x => x.EndDate)
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
                var others = await _context.Classes.Where(x => x.ClassId != request.ClassId).ToListAsync();

                var current = await _context.Classes.FirstOrDefaultAsync(x => x.ClassId == id);
                if (current is not null)
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

                    var result = HaveTimeConflictWithOthers(current, others);
                    if (result.Item1)
                    {
                        return Ok(new ResponseDTO(false, "Lớp học bị trùng lịch với " + result.Item2));
                    }

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
        public async Task<IActionResult> PostClass(AddClassDTO @class)
        {
            try
            {
                var others = await _context.Classes.ToListAsync();
                var map = _mapper.Map<Class>(@class);

                var result = HaveTimeConflictWithOthers(map, others);
                if (result.Item1)
                {
                    return Ok(new ResponseDTO(false, "Lớp học bị trùng lịch với " + result.Item2));
                }

                _context.Classes.Add(map);
                await _context.SaveChangesAsync();

                return Ok(new ResponseDTO(true, "Thêm mới lớp học thành công!"));
            }
            catch (Exception ex)
            {

                return Ok(new ResponseDTO(false, "Thêm mới lớp học thất bại!"));
            }
        }

        private (bool, string) HaveTimeConflictWithOthers(Class class1, List<Class> classes)
        {
            foreach (var otherClass in classes)
            {
                if (HaveTimeConflict(class1, otherClass))
                {
                    return (true, otherClass.ClassName); // Conflict found
                }
            }
            return (false, ""); // No conflict with any class
        }

        // Check if class1 has a time conflict with another specific class
        private bool HaveTimeConflict(Class class1, Class class2)
        {
            // Check if the date ranges overlap
            if (!(class1.StartDate > class2.EndDate || class1.EndDate < class2.StartDate))
            {
                // Check if any days of the week overlap
                var days1 = class1!.DaysOfWeek!.Split(',').Select(day => day.Trim());
                var days2 = class2!.DaysOfWeek!.Split(',').Select(day => day.Trim());

                if (days1.Intersect(days2).Any()) // There is at least one overlapping day
                {
                    // Check if time slots overlap
                    foreach (var day in days1.Intersect(days2))
                    {
                        // Compare the times for this day
                        if (IsTimeConflict(class1.StartTime, class1.EndTime, class2.StartTime, class2.EndTime))
                        {
                            return true; // Conflict found
                        }
                    }
                }
            }
            return false; // No conflict
        }

        private bool IsTimeConflict(TimeSpan? start1, TimeSpan? end1, TimeSpan? start2, TimeSpan? end2)
        {
            // Ensure the times are not null before comparing
            if (start1.HasValue && end1.HasValue && start2.HasValue && end2.HasValue)
            {
                // Check if the time ranges overlap
                return start1 < end2 && start2 < end1;
            }

            // If any time is null, we assume no conflict for this logic
            return false;
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
