using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
namespace API.Controllers
{
    [Authorize]
    // Dotnet framework is responsible for creating/ instantiating an new instance
    // of this controller class.
    public class MembersController(IMemberRepository memberRepository) : BaseApiController
    {
        [HttpGet]
        // There are multiple different collections in dotnet,
        // Here we are using List<> collection.
        public async Task<ActionResult<IReadOnlyList<Member>>> GetMembers()
        {
            return Ok(await memberRepository.GetMembersAsync());
        }

        
        [HttpGet("{id}")] // localhost://5001/api/member/bod-id
        // when id is curly brackets - acts as route parameter 
        public async Task<ActionResult<Member>> GetMember(string id)
        {
            var member = await memberRepository.GetMemberByIdAsync(id);

            if (member == null) return NotFound();

            return member;
        }

        [HttpGet("{id}/photos")]
        public async Task<ActionResult<IReadOnlyList<Photo>>> GetPhotosForMemberAsync(string id)
        {
            return Ok(await memberRepository.GetPhotosForMemberAsync(id));
        }
        
    }
}
