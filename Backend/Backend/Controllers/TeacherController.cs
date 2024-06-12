using Backend.Dtos;
using Backend.Interfaces;
using Backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherController : ControllerBase
    {
        private readonly ITeacherService _teacherService;
        private readonly UserManager<User> _userManager;
        public TeacherController(ITeacherService teacherService, UserManager<User> userManager)
        {
            _teacherService = teacherService;
            _userManager = userManager;

        }
        [Authorize]
        [HttpPost("TeacherApplication")]
        public async Task<IActionResult> TeacherApplicationAsync([FromForm] TeacherDto model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var userID = HttpContext.User.FindFirst("uid").Value;
            var user = await _userManager.FindByIdAsync(userID);
            var result = await _teacherService.AddTeacherAsync(model, user);
            return Ok(result);

        }

        [Authorize]
        [HttpGet("GetMyCourses")]
        public async Task<IActionResult> GetMyCoursesAsync()
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var userID = HttpContext.User.FindFirst("uid").Value;
            var result=await _teacherService.GetMyCoursesAsync(userID);
            return Ok(result);


        }
    }

    }
