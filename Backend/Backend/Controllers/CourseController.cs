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
    public class CourseController : ControllerBase
    {
        private readonly ApplictionDbContext _cotext;
        private readonly UserManager<User> _userManager;
        private readonly ICourseService _courseService;

        public CourseController(ApplictionDbContext cotext,  UserManager<User> userManager, ICourseService courseService)
        {
            _cotext = cotext;
            _userManager = userManager;
            _courseService = courseService;
        }
        [Authorize]
        [HttpPost("CreateCourse")]
        public async Task<IActionResult> CreateCourseAsync([FromForm] CreateCourse model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var userID = HttpContext.User.FindFirst("uid").Value;
            var result = await _courseService.CreateCourseAsync(model, userID);
            return Ok(result);
        }




        [Authorize]
        [HttpGet("FindCourse")]
        public async Task<IActionResult> FindCourseAsync([FromBody] string Name)
        {
            var result = await _courseService.FindCourseAsync(Name);
            return Ok(result);

        }
        [Authorize]
        [HttpGet("AllCoures")]
        public async Task<IActionResult> AllCourseAsync()
        {
            var result = await _courseService.AllCoursesAsync();
            return Ok(result);

        }
        [Authorize]
        [HttpGet("FindCourseBySubject")]
        public async Task<IActionResult> FindCourseBySubjectAsync([FromBody] string Subject)
        {
            var result = await _courseService.FindCourseBySubjectAsync(Subject);
            return Ok(result);

        }

        [Authorize]
        [HttpPut("UpdateCourseName")]
        public async Task<IActionResult> UpdateCourseNameAsync([FromBody] UpdateCourseName model)
        {
            var result = await _courseService.UpdateCousreName(model);
            return Ok(result);

        }
        [Authorize]
        [HttpPut("UpdateCourseImage")]
        public async Task<IActionResult> UpdateCourseImageAsync([FromForm] UpdateCourseImage model)
        {
            var result = await _courseService.UpdateCousreImage(model);
            return Ok(result);

        }


    }
}
