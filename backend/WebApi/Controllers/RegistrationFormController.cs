using AutoMapper;
using BusinessObjects.DTO;
using BusinessObjects.DTO.RegistrationForms;
using BusinessObjects.Models;
using DataAccess;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Reporitories;
using WebApi.Constants;

namespace WebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class RegistrationFormController(SeedCenterContext context, IMapper mapper) : ControllerBase
{
    private readonly SeedCenterContext _context = context;
    private readonly IMapper _mapper = mapper;
    private IPaymentRepository repository = new PaymentRepository();


    // GET: api/RegistrationForm
    [HttpGet]
    public async Task<ActionResult<List<RegistrationFormDTO>>> GetRegistrationForms()
    {
        var list = await _context.RegistrationForms
            .Include(x => x.Class)
            .Include(x => x.Course)
            .Include(x => x.StudentEmailNavigation)
            .OrderBy(x => x.Status)
            .ThenByDescending(x => x.CreatedDate)
            .ToListAsync();
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

    [HttpGet("pending/{id}")]
    public async Task<IActionResult> Pending(int id)
    {
        try
        {
            var register = await _context.RegistrationForms.FirstOrDefaultAsync(x => x.Id == id);
            if (register is null) throw new Exception("Thay đổi trạng thái phiếu đăng ký thất bại");

            register.Status = (int)RegistrationStatus.Pending;
            register.Response = "";

            var existClassMember = await _context.ClassMembers
                 .FirstOrDefaultAsync(x => x.ClassId == register.ClassId && x.StudentEmail == register.StudentEmail);

            if (existClassMember is not null)
            {
                existClassMember.Status = false;
            }
            else
            {
                _context.ClassMembers.Add(new ClassMember()
                {
                    ClassId = register.ClassId,
                    StudentEmail = register.StudentEmail,
                    EnrollmentDate = DateTime.Now,
                    Status = false
                });
            }


            await _context.SaveChangesAsync();
            return Ok(new ResponseDTO(true, "Thay đổi trạng thái phiếu đăng ký thành công"));
        }
        catch (Exception ex)
        {

            return Ok(new ResponseDTO(false, ex.Message));

        }
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

    [HttpGet("success/{id}")]
    public async Task<IActionResult> Success(int id)
    {
        try
        {
            var register = await _context.RegistrationForms.Include(x => x.Course).FirstOrDefaultAsync(x => x.Id == id);
            if (register is null) throw new Exception("Thêm học viên vào lớp thất bại ");


            var payment = await _context.Payments
                .FirstOrDefaultAsync(x => x.StudentEmail == register.StudentEmail
                && x.ClassId == register.ClassId
                && x.CourseId == register.CourseId);

            if (payment is null)
            {
                _context.Add(new Payment()
                {
                    CourseId = register.CourseId,
                    ClassId = register.ClassId,
                    StudentEmail = register.StudentEmail,
                    PaymentDate = DateTime.Now,
                    PaymentMethod = "Tiền mặt",
                    Amount = (decimal)(register.Course.Price ?? 0),
                }); ;
            } else
            {
                payment.CourseId = register.CourseId;
                payment.ClassId = register.ClassId;
                payment.StudentEmail = register.StudentEmail;
                payment.PaymentDate = DateTime.Now;
                payment.PaymentMethod = "Tiền mặt";
                payment.Amount = (decimal)(register.Course.Price ?? 0);
            }

            var existClassMember = await _context.ClassMembers
                .FirstOrDefaultAsync(x => x.ClassId == register.ClassId && x.StudentEmail == register.StudentEmail);

            if (existClassMember is not null)
            {
                existClassMember.Status = true;
            }
            else
            {
                _context.ClassMembers.Add(new ClassMember()
                {
                    ClassId = register.ClassId,
                    StudentEmail = register.StudentEmail,
                    EnrollmentDate = DateTime.Now,
                    Status = true
                });
            }

            var existUserCourse = _context.UserCourses.Any(x => x.Email == register.StudentEmail
                        && x.CourseId == register.CourseId);

            if (!existUserCourse)
            {
                _context.UserCourses.Add(new UserCourse()
                {
                    CourseId = register.CourseId,
                    Email = register.StudentEmail!,
                    EnrolledDate = DateTime.Now,
                });
            }

            register.Status = (int)RegistrationStatus.Complete;

            await _context.SaveChangesAsync();
            return Ok(new ResponseDTO(true, "Thêm học viên vào lớp thành công"));
        }
        catch (Exception ex)
        {

            return Ok(new ResponseDTO(false, ex.Message));

        }
    }

    [HttpPost("cancel")]
    public async Task<IActionResult> Cancel([FromBody] CancelRegistrationDTO request)
    {
        try
        {
            var register = await _context.RegistrationForms.FirstOrDefaultAsync(x => x.Id == request.Id);
            if (register is null) throw new Exception("Hủy phiếu đăng ký thất bại");

            register.Status = (int)RegistrationStatus.Cancel;
            register.Response = request.Reason;

            var existClassMember = await _context.ClassMembers
              .FirstOrDefaultAsync(x => x.ClassId == register.ClassId && x.StudentEmail == register.StudentEmail);
            if (existClassMember is not null)
            {
                _context.Remove(existClassMember);
            }

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
            var classes = await _context.Classes.Include(x => x.ClassMembers)
                .FirstOrDefaultAsync(x => x.ClassId == registrationForm.ClassId);

            if (classes is null) throw new Exception("Không tìm thấy lớp học");

            var numberOfStudent = classes.ClassMembers.Count;
            if (numberOfStudent >= classes.NumberOfStudent)
            {
                throw new Exception("Lớp đã đủ học viên.");
            }


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
