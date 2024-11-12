using AutoMapper;
using BusinessObjects.DTO;
using BusinessObjects.DTO.RegistrationForms;
using BusinessObjects.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Constants;

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
        var list = await _context.RegistrationForms.Include(x => x.Class).Include(x => x.Course).Include(x => x.StudentEmailNavigation).ToListAsync();
        var map = _mapper.Map<List<RegistrationFormDTO>>(list);
        return map;
    }

    [HttpGet("get-by-student")]
    public async Task<ActionResult<List<RegistrationFormDTO>>> GetRegistrationFormsByStudent(string studentEmail)
    {
        var list = await _context.RegistrationForms
            .Include(x => x.Class)
            .Include(x => x.Course)
            .Include(x => x.StudentEmailNavigation)
            .Where(x => x.StudentEmail == studentEmail)
            .ToListAsync();
        var map = _mapper.Map<List<RegistrationFormDTO>>(list);
        return map;
    }

    // GET: api/RegistrationForm/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetRegistrationForm(int id)
    {
        var registrationForm = await _context.RegistrationForms
            .Include(x => x.Class)
            .Include(x => x.Course)
            .Include(x => x.StudentEmailNavigation)
            .FirstOrDefaultAsync(x => x.Id == id);

        if (registrationForm == null)
        {
            return NotFound();
        }
        var map = _mapper.Map<RegistrationFormDTO>(registrationForm);

        return Ok(map);
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

    [HttpGet("confirm/{id}")]
    public async Task<IActionResult> Confirm(int id)
    {
        try
        {
            var register = await _context.RegistrationForms.FirstOrDefaultAsync(x => x.Id == id);
            if (register is null) throw new Exception("Xác nhận phiếu đăng ký thất bại");

            register.Status = (int)RegistrationStatus.Confirm;

            await _context.SaveChangesAsync();
            return Ok(new ResponseDTO(true, "Xác nhận phiếu đăng ký thành công"));
        }
        catch (Exception ex)
        {

            return Ok(new ResponseDTO(false, ex.Message));

        }
    }

    [HttpPost("cancel")]
    public async Task<IActionResult> Confirm([FromBody] CancelRegistrationDTO request)
    {
        try
        {
            var register = await _context.RegistrationForms.FirstOrDefaultAsync(x => x.Id == request.Id);
            if (register is null) throw new Exception("Hủy phiếu đăng ký thất bại");

            register.Status = (int)RegistrationStatus.Cancel;
            register.Response = request.Reason;

            await _context.SaveChangesAsync();
            return Ok(new ResponseDTO(true, "Hủy phiếu đăng ký thành công"));
        }
        catch (Exception ex)
        {

            return Ok(new ResponseDTO(false, ex.Message));

        }
    }

    // POST: api/RegistrationForm
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<IActionResult> PostRegistrationForm(AddRegistrationFormDTO registrationForm)
    {
        try
        {
            var account = await _context.Accounts.FirstOrDefaultAsync(x => x.Email == registrationForm.StudentEmail);
            if (account is null) return NotFound();

            account.Name = registrationForm.Name;
            account.Phone = registrationForm.Phone;
            await _context.SaveChangesAsync();


            var exist = await _context.RegistrationForms
                .Where(x => x.ClassId == registrationForm.ClassId)
                .Where(x => x.CourseId == registrationForm.CourseId)
                .Where(x => x.StudentEmail == registrationForm.StudentEmail)
                .Where(x => x.Status != 3)
                .FirstOrDefaultAsync();

            if (exist is not null) throw new Exception("Phiếu đăng ký lớp học đã tồn tại.");

            var map = _mapper.Map<RegistrationForm>(registrationForm);
            if (map is not null)
            {
                _context.RegistrationForms.Add(map);
                await _context.SaveChangesAsync();
            }
        }
        catch (Exception ex)
        {
            Console.Write(ex.ToString());
            return Ok(new ResponseDTO(false, ex.Message));
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
