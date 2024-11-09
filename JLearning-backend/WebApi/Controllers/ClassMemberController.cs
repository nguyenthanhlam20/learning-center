using AutoMapper;
using BusinessObjects.DTO;
using BusinessObjects.DTO.ClassMembers;
using BusinessObjects.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ClassMemberController(JLearningContext context, IMapper mapper) : ControllerBase
{
    private readonly JLearningContext _context = context;
    private readonly IMapper _mapper = mapper;

    // GET: api/ClassMember
    [HttpGet]
    public async Task<ActionResult<List<ClassMemberDTO>>> GetClassMembers()
    {
        var memebers = await _context.ClassMembers.ToListAsync();
        var map = _mapper.Map<List<ClassMemberDTO>>(memebers);
        return map;
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
