using AutoMapper;
using BusinessObjects.DTO.Calendar;
using BusinessObjects.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CalendarController(JLearningContext context, IMapper mapper) : ControllerBase
{
    private readonly JLearningContext _context = context;
    private readonly IMapper _mapper = mapper;

    // GET: api/Calendar
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Calendar>>> GetCalendars()
    {
        return await _context.Calendars.ToListAsync();
    }


    // GET: api/Calendar/class/5
    [HttpGet("class/{id}")]
    public async Task<IActionResult> GetClassCalendar(int id)
    {
        var calendars = await _context.Calendars.Where(x => x.ClassId == id).ToListAsync();

        if (calendars == null)
        {
            return NotFound();
        }

        var map = _mapper.Map<List<Calendar>>(calendars);
        return Ok(map);
    }


    // GET: api/Calendar/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Calendar>> GetCalendar(int id)
    {
        var calendar = await _context.Calendars.FindAsync(id);

        if (calendar == null)
        {
            return NotFound();
        }

        return calendar;
    }

    // PUT: api/Calendar/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutCalendar(int id, Calendar calendar)
    {
        if (id != calendar.CalendarId)
        {
            return BadRequest();
        }

        _context.Entry(calendar).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!CalendarExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    // POST: api/Calendar
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<IActionResult> PostCalendar(AddCalendarDTO calendar)
    {
        try
        {
            var map = _mapper.Map<Calendar>(calendar);

            _context.Calendars.Add(map);
            await _context.SaveChangesAsync();

            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    // DELETE: api/Calendar/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCalendar(int id)
    {
        var calendar = await _context.Calendars.FindAsync(id);
        if (calendar == null)
        {
            return NotFound();
        }

        _context.Calendars.Remove(calendar);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool CalendarExists(int id)
    {
        return _context.Calendars.Any(e => e.CalendarId == id);
    }
}
