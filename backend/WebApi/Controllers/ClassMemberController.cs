using AutoMapper;
using BusinessObjects.DTO;
using BusinessObjects.DTO.ClassMembers;
using BusinessObjects.DTO.Grades;
using BusinessObjects.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages;
using Microsoft.Win32;
using NuGet.Protocol.Core.Types;
using Reporitories;

namespace WebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ClassMemberController(SeedCenterContext context, IMapper mapper) : ControllerBase
{
    private readonly SeedCenterContext _context = context;
    private readonly IMapper _mapper = mapper;

    // GET: api/ClassMember
    [HttpGet("find")]
    public async Task<IActionResult> GetClassMembers(string email, int classId)
    {
        var memeber = await _context.ClassMembers
            .Where(x => x.Status == true)
            .Include(x => x.StudentEmailNavigation)
            .Include(x => x.StudentEmailNavigation.Grades)
            .FirstOrDefaultAsync(x => x.StudentEmail == email && x.ClassId == classId);
        var map = _mapper.Map<ClassMemberDTO>(memeber);
        return Ok(map);
    }

    // GET: api/ClassMember/5
    [HttpGet("{classId}")]
    public async Task<ActionResult<List<ClassMemberDTO>>> GetClassMembers(int classId)
    {
        var classMember = await _context.ClassMembers
            .Include(x => x.StudentEmailNavigation)
            .Where(x => x.ClassId == classId)
            .Where(x => x.Status == true)
            .ToListAsync();

        if (classMember == null)
        {
            return NotFound();
        }

        var map = _mapper.Map<List<ClassMemberDTO>>(classMember);
        return map;
    }

    [HttpPost("add-grade")]
    public async Task<IActionResult> AddGrade([FromBody] AddGradeDTO request)
    {
        try
        {
            var exist = await _context.Grades.FirstOrDefaultAsync(x => x.StudentEmail == request.StudentEmail && x.ClassId == request.ClassId);
            if (exist is null)
            {
                var map = _mapper.Map<Grade>(request);
                map.CreatedAt = DateTime.Now;

                _context.Grades.Add(map);
                await _context.SaveChangesAsync();
            }
            else
            {
                exist.Listening = request.Listening;
                exist.Reading = request.Reading;
                exist.Writing = request.Writing;
                exist.Speaking = request.Speaking;
                exist.Overall = request.Overall;
                exist.UpdatedAt = DateTime.Now;

                await _context.SaveChangesAsync();
            }

            return Ok(new ResponseDTO(true, "Cập nhật điểm cho học viên thành công"));
        }
        catch (Exception)
        {
        }
        return Ok(new ResponseDTO(false, "Cập nhật điểm cho học viên thất bại"));
    }

    [HttpPost("insert")]
    public async Task<IActionResult> InsertAccount([FromBody] AddMemberClassDTO request)
    {
        try
        {
            var account = await _context.Accounts.FirstOrDefaultAsync(x => x.Email == request.Email);
            if (account is null)
            {
                var acc = new Account()
                {
                    Name = request.Name,
                    Email = request.Email,
                    Phone = request.Phone,
                    Password = "Abc1234!",
                    ActiveStatus = true,
                    Address = request.Address,
                    AvatarUrl = request.AvatarUrl,
                    DateOfBirth = request.DateOfBirth,
                    Gender = request.Gender == 1,
                    RoleId = request.RoleId,
                    CreatedDate = DateTime.Now,
                    Description = request.Description,

                };
                var success = _context.Accounts.Add(acc);
                await _context.SaveChangesAsync();
            }

            var existClassMember = await _context.ClassMembers.FirstOrDefaultAsync(x => x.ClassId == request.ClassId && x.StudentEmail == request.Email);

            if (existClassMember is not null) return Ok(new ResponseDTO(false, "Thành viên lớp đã tồn tại"));


            var course = await _context.Courses.Include(x => x.Classes).Where(x => x.Classes.Any(c => c.ClassId == request.ClassId)).FirstOrDefaultAsync();

            if (course is not null)
            {
                var existUserCourse = _context.UserCourses.Any(x => x.Email == request.Email && x.CourseId == course.CourseId);

                if (!existUserCourse)
                {
                    _context.UserCourses.Add(new UserCourse()
                    {
                        CourseId = course.CourseId,
                        Email = request.Email!,
                        EnrolledDate = DateTime.Now,
                    });
                }

            }

            _context.ClassMembers.Add(new ClassMember()
            {
                ClassId = request.ClassId,
                StudentEmail = request.Email,
                EnrollmentDate = DateTime.Now,
                Status = true

            });
            await _context.SaveChangesAsync();

            return Ok(new ResponseDTO(true, "Thêm mới thành viên lớp thành công"));
        }
        catch (Exception ex)
        {

            return Ok(new ResponseDTO(false, "Thêm thành viên lớp thất bại"));
        }
    }

    // PUT: api/ClassMember/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutClassMember(string id, ClassMember classMember)
    {
        if (id != classMember.StudentEmail)
        {
            return BadRequest();
        }
        var current = await _context.ClassMembers.FindAsync(id);
        _context.Entry(classMember).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (Exception ex)
        {

        }

        return NoContent();
    }

    // POST: api/ClassMember
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<IActionResult> PostClassMember(AddMemberClassDTO classMember)
    {
        try
        {
            var map = _mapper.Map<ClassMember>(classMember);
            _context.ClassMembers.Add(map);
            await _context.SaveChangesAsync();
        }
        catch (Exception ex)
        {
            Console.Write(ex.ToString());
            return Ok(new ResponseDTO(false, "Thêm thành viên lớp thất bại!"));
        }

        return Ok(new ResponseDTO(true, "Thêm thành viên lớp thành công!"));
    }

    // DELETE: api/ClassMember/5
    [HttpGet("delete")]
    public async Task<IActionResult> DeleteClassMember(string email, int classId)
    {
        try
        {
            var classMember = await _context.ClassMembers
                .Where(x => x.Status == true)
                .Include(x => x.StudentEmailNavigation)
                .Include(x => x.StudentEmailNavigation.Grades)
                .FirstOrDefaultAsync(x => x.StudentEmail == email && x.ClassId == classId);

            if (classMember == null) throw new Exception("Không tìm thấy học viên");

            _context.ClassMembers.Remove(classMember);
            await _context.SaveChangesAsync();

            return Ok(new ResponseDTO(true, "Xóa học viên khỏi lớp thành công"));

        }
        catch (Exception ex)
        {
            return Ok(new ResponseDTO(false, ex.Message));
        }
    }

}
