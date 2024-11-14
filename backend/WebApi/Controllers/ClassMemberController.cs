using AutoMapper;
using BusinessObjects.DTO;
using BusinessObjects.DTO.ClassMembers;
using BusinessObjects.DTO.Grades;
using BusinessObjects.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
            .Where(x => x.ClassId == classId).ToListAsync();

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
                var acc = _mapper.Map<Account>(request);
                var success = _context.Accounts.Add(acc);
                await _context.SaveChangesAsync();
            }

            var existClassMember = await _context.ClassMembers.FirstOrDefaultAsync(x => x.ClassId == request.ClassId && x.StudentEmail == request.Email);

            if (existClassMember is not null) return Ok(new ResponseDTO(false, "Thành viên lớp đã tồn tại"));
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
        catch (Exception)
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
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteClassMember(string id)
    {
        var classMember = await _context.ClassMembers.FindAsync(id);
        if (classMember == null)
        {
            return NotFound();
        }

        _context.ClassMembers.Remove(classMember);
        await _context.SaveChangesAsync();

        return Ok();
    }

}
