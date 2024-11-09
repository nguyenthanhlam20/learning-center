using AutoMapper;
using BusinessObjects.DTO;
using BusinessObjects.DTO.RegistrationForms;
using BusinessObjects.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class RegistrationFormController(JLearningContext context, IMapper mapper) : ControllerBase
{
    private readonly JLearningContext _context = context;
    private readonly IMapper _mapper = mapper;

    // GET: api/RegistrationForm
    [HttpGet]
    public async Task<ActionResult<List<RegistrationFormDTO>>> GetRegistrationForms()
    {
        var list = await _context.RegistrationForms.ToListAsync();
        var map = _mapper.Map<List<RegistrationFormDTO>>(list);
        return map;
    }

    // GET: api/RegistrationForm/5
    [HttpGet("{id}")]
    public async Task<ActionResult<RegistrationFormDTO>> GetRegistrationForm(string id)
    {
        var registrationForm = await _context.RegistrationForms.FindAsync(id);

        if (registrationForm == null)
        {
            return NotFound();
        }
        var map = _mapper.Map<RegistrationFormDTO>(registrationForm);

        return map;
    }

    // PUT: api/RegistrationForm/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutRegistrationForm(string id, RegistrationForm registrationForm)
    {
        if (id != registrationForm.StudentEmail)
        {
            return BadRequest();
        }

        _context.Entry(registrationForm).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException ex)
        {
            Console.Write(ex.ToString());
            return Ok(new ResponseDTO(false, "Đăng ký lớp thất bại!"));
        }

        return Ok(new ResponseDTO(false, "Đăng ký lớp thành công!"));
    }

    // POST: api/RegistrationForm
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<IActionResult> PostRegistrationForm(AddRegistrationFormDTO registrationForm)
    {
        try
        {
            var map = _mapper.Map<RegistrationForm>(registrationForm);
            if (map is not null)
            {
                _context.RegistrationForms.Add(map);
                await _context.SaveChangesAsync();
            }
        }
        catch (DbUpdateException ex)
        {
            Console.Write(ex.ToString());
            return Ok(new ResponseDTO(false, "Đăng ký lớp thất bại!"));
        }

        return Ok(new ResponseDTO(true, "Đăng ký lớp thành công!"));
    }

    // DELETE: api/RegistrationForm/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteRegistrationForm(string id)
    {
        var registrationForm = await _context.RegistrationForms.FindAsync(id);
        if (registrationForm == null)
        {
            return NotFound();
        }

        _context.RegistrationForms.Remove(registrationForm);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool RegistrationFormExists(string id)
    {
        return _context.RegistrationForms.Any(e => e.StudentEmail == id);
    }
}
