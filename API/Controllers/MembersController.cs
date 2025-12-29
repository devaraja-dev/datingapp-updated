using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")] // localhost://5001/api/members
    [ApiController]
    // Dotnet framework is responsible for creating/ instantiating an new instance
    // of this controller class.
    public class MembersController(AppDbContext context) : ControllerBase
    {
        [HttpGet]
        // There are multiple different collections in dotnet,
        // Here we are using List<> collection.
        public async Task<ActionResult<IReadOnlyList<AppUser>>> GetMembers()
        {
            var members = await context.Users.ToListAsync();

            return members;
        }

        [HttpGet("{id}")] // localhost://5001/api/member/bod-id
        // when id is curly brackets - acts as route parameter 
        public async Task<ActionResult<AppUser>> GetMember(string id)
        {
            var member = await context.Users.FindAsync(id);

            if (member == null) return NotFound();

            return member;
        }
        
    }
}
