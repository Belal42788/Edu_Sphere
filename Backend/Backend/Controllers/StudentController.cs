using Backend.Dtos;
using Backend.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudentService _studentService;
        public StudentController(IStudentService studentService)
        {
            _studentService = studentService;
            
        }

        [Authorize]
        [HttpPost("JoinCourse")]
        public async Task<IActionResult>JoinCourseAsync(CourseDto model)
        {

            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var userID = HttpContext.User.FindFirst("uid").Value;
            var result=await _studentService.JointCourseAsync(userID, model);
            return Ok(result);
        }
    }
}
