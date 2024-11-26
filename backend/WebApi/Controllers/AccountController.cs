using AutoMapper;
using BusinessObjects.DTO;
using BusinessObjects.DTO.Accounts;
using BusinessObjects.DTO.Classes;
using BusinessObjects.DTO.ClassMembers;
using BusinessObjects.Models;
using DataAccess;
using Microsoft.AspNetCore.Mvc;
using Reporitories;

namespace WebApi.Controllers
{
    [Route("api/account")]
    [ApiController]
    public class AccountController(SeedCenterContext context, IMapper mapper) : ControllerBase
    {

        // Repository
        private IAccountRepository repository = new AccountRepository();
        private readonly SeedCenterContext _context = context;

        // Mapper
        private readonly IMapper _mapper = mapper;

        [HttpPost]
        [Route("signin")]
        public IActionResult SignIn([FromBody] AddAccountDTO account)
        {
            // Map dto to account
            Account acc = _mapper.Map<Account>(account);

            // Get result
            Account result = repository.SignIn(acc);

            AccountDTO accountDTO = _mapper.Map<AccountDTO>(result);

            Console.WriteLine("account: " + account.Email);

            if (result != null)
            {
                return Ok(new { user = accountDTO });
            }

            return Unauthorized();
        }

        [HttpPost]
        [Route("signup")]
        public IActionResult SignUp([FromBody] AddAccountDTO accountDTO)
        {
            // Map dto to account
            Account acc = _mapper.Map<Account>(accountDTO);
            acc.RoleId = 4;
            acc.CreatedDate = DateTime.Now;
            bool status = repository.SignUp(acc);

            Console.Write(status);
            if (status == true)
            {
                return Ok();
            }

            return Unauthorized();
        }

        [HttpPost]
        [Route("change-password")]
        public IActionResult ChangePassword([FromBody] UpdateAccountDTO accountDTO)
        {
            // Map dto to account
            Account account = repository.FindAccountByEmail(accountDTO.Email);
            account.Password = accountDTO.Password;

            bool status = repository.ChangePassword(account);

            Console.Write(status);
            if (status == true)
            {
                return Ok();
            }

            return Unauthorized();
        }

        [HttpPut("update-info")]
        public ActionResult UpdateInfo([FromBody] UpdateAccountDTO accountDTO)
        {
            try
            {
                var account = repository.FindAccountByEmail(accountDTO.Email);
                if (account == null) return NotFound();
                Account acc = _mapper.Map<Account>(accountDTO);
                acc.RoleId = account.RoleId;
                acc.Password = account.Password;
                repository.UpdateAccount(acc);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpPut("update")]
        public ActionResult UpdateRole([FromBody] AddAccountDTO accountDTO)
        {
            var account = repository.FindAccountByEmail(accountDTO.Email);
            if (account == null) return NotFound();
            Account acc = _mapper.Map<Account>(accountDTO);
            acc.RoleId = account.RoleId;
            repository.UpdateAccount(acc);
            return Ok();
        }

        [HttpPost("insert")]
        public IActionResult InsertAccount([FromBody] AddAccountDTO accountDTO)
        {
            try
            {
                var account = repository.FindAccountByEmail(accountDTO.Email);
                if (account is not null) return Ok(new ResponseDTO(false, "Tài khoản email đã tồn tại trong hệ thống"));

                Account acc = _mapper.Map<Account>(accountDTO);
                acc.CreatedDate = DateTime.Now;
                var success = repository.InsertAccount(acc);

                if (success == true) 
                    return Ok(new ResponseDTO(true, "Thêm mới người dùng thành công"));

            }
            catch (Exception ex)
            {

            }
            return Ok(new ResponseDTO(false, "Thêm mới người dùng thất bại"));

        }

        [HttpGet("get-users")]
        public IActionResult GetUsers([FromQuery] int role)
        {
            var accounts = repository.FindByRole(role);
            if (accounts is null) return NotFound();

            var acc = _mapper.Map<List<AccountDTO>>(accounts);


            return Ok(acc);
        }


        [HttpGet("get-user")]
        public IActionResult GetUsers([FromQuery] string email)
        {
            var account = repository.FindAccountByEmail(email);
            if (account is null) return NotFound();

            var acc = _mapper.Map<AccountDTO>(account);
            var staffClasses = _mapper.Map<List<ClassDTO>>(account.ClassStaffEmailNavigations);
            var teacherClasses = _mapper.Map<List<ClassDTO>>(account.ClassTeacherEmailNavigations);
            var classMembers = new List<ClassDTO>();

            var members = account.ClassMembers.Where(x => x.Status == true);
            foreach (var member in members)
            {
                var specificClass = _context.Classes.FirstOrDefault(c => c.ClassId == member.ClassId);
                if (specificClass is not null)
                {
                    classMembers.Add(_mapper.Map<ClassDTO>(specificClass));
                }
            }



            var classes = new List<ClassDTO>();

            if (classMembers.Any())
            {
                classes.AddRange(classMembers);
            }
            if (staffClasses.Any())
            {
                classes.AddRange(staffClasses);
            }

            if (teacherClasses.Any())
            {
                classes.AddRange(teacherClasses);
            }


            var final = new List<ClassDTO>();

            foreach (var clazz in classes)
            {
                var items = _context.ClassMembers.Where(x => x.ClassId == clazz.ClassId && x.Status == true).ToList();

                if (items != null && items?.Count > 0)
                {
                    clazz.ClassMembers = _mapper.Map<List<ClassMemberDTO>>(items);
                    final.Add(clazz);
                }
            }


            acc.Classes = final;

            return Ok(acc);
        }
    }
}
