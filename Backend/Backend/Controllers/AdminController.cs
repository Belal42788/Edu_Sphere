using Backend.Dtos;
using Backend.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminService _AdminService;
        public AdminController(IAdminService AdminService)
        {
            _AdminService = AdminService;
            
        }
        [Authorize(Roles ="Admin")]
        [HttpGet("GetAllApplication")]
        public async Task<IActionResult> GetAllApplicationAsync()
        {
            var result = await _AdminService.GetAllAplicationAsync();
            if(result == null)
            {
                return BadRequest("No Application");
            }
            return Ok(result);
        }
        [Authorize(Roles = "Admin")]
        [HttpPost("AcceptApplication")]
        public async Task<IActionResult> AcceptApplicationAsync(TeacherApplicationDto Model)
        {
            var result = await _AdminService.AcceptApplication(Model);
            
            return Ok(result);
        }
        [Authorize(Roles = "Admin")]
        [HttpPost("RejectionApplication")]
        public async Task<IActionResult> RejectionApplicationAsync(TeacherApplicationDto Model)
        {
            var result = await _AdminService.RejectionApplication(Model);

            return Ok(result);
        }
       

    }
}
