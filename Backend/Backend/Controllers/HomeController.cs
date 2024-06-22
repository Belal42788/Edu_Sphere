using Backend.Interfaces;
using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly ApplictionDbContext _cotext;
        private readonly UserManager<User> _userManager;
        private readonly IHomeService _HomeService;

        public HomeController(ApplictionDbContext cotext, UserManager<User> userManager, IHomeService HomeService)
        {
            _cotext = cotext;
            _userManager = userManager;
            _HomeService = HomeService;
        }
        [Authorize]
        [HttpGet("HomeCourses")]
        public async Task<IActionResult> HomeCoursesAsync()
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var userID = HttpContext.User.FindFirst("uid").Value;
            var result = await _HomeService.HomeCoursesAsync( userID);
            return Ok(result);
        }



     }

    
}
