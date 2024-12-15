using AutoMapper;
using BusinessObjects.DTO;
using BusinessObjects.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Reporitories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApi.Controllers;

[Route("api/contact")]
[ApiController]
public class ContactController(SeedCenterContext context, IMapper mapper) : ControllerBase
{
    private SeedCenterContext _context = context;
    // Repository
    private IContactRepository repository = new ContactRepository();

    // Mapper
    private readonly IMapper _mapper = mapper;

    // GET: api/<ContactController>
    [HttpGet("get")]
    public ActionResult<IEnumerable<ContactDTO>> Get()
    {
        IEnumerable<Contact> c = repository.GetContacts();
        IEnumerable<ContactDTO> contactDTO = _mapper.Map<IEnumerable<ContactDTO>>(c);
        return Ok(contactDTO);
    }

    // POST api/<ContactController>
    [HttpPost("insert")]
    public ActionResult Post([FromBody] ContactDTO contactDTO)
    {
        Contact contact = _mapper.Map<Contact>(contactDTO);
        repository.CreateContact(contact);
        return Ok();
    }


    // PUT api/<ContactController>/5
    [HttpPost("update")]
    public async Task<IActionResult> Put([FromBody] ContactDTO contactDTO)
    {
        try
        {
            Console.WriteLine("Response contact from email: " + contactDTO.Email);
            var contact = await _context.Contacts.FirstOrDefaultAsync(x => x.ContactId == contactDTO.ContactId);

            if (contact == null) return NotFound();
            contact.ResponseDate = DateTime.Now;
            contact.ResponseMessage = contactDTO.ResponseMessage;
            contact.Status = true;
            await _context.SaveChangesAsync();

            EmailServices.SendEmail(
                contact.Email, "Phản Hồi Thắc Mắc Từ Seed Center website", contact.ResponseMessage ?? "");

            return Ok();

        }
        catch (Exception ex)
        {
            return NotFound();
        }
    }

}
