using Backend.Dtos;
using Backend.Interfaces;
using Backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LessonController : ControllerBase
    {
        private readonly ILessonService _LessonService;
        public LessonController(ILessonService LessonService)
        {
            _LessonService = LessonService;
        }
        [Authorize]
        [HttpPost("CreateLesson")]
        [RequestFormLimits(ValueLengthLimit = int.MaxValue, MultipartBodyLengthLimit = int.MaxValue)]
        public async Task<IActionResult> CreateLessonAsync([FromForm] CreateLesson model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var result = await _LessonService.CreateLessonAsync(model);
            return Ok(result);
        }
        [Authorize]
        [HttpPost("GetAllLessonAsync")]
        public async Task<IActionResult> GetAllLessonAsync(CourseDto model)
        {

            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var result = await _LessonService.GetAllLessonAsync(model);
            return Ok(result);

        }
        [Authorize]
        [HttpPut("UpdateLesson")]
        public async Task<IActionResult> UpdateLessonAsync([FromForm]UpdateLesson model)
        {

            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var result = await _LessonService.UpdateLessonAsync(model);
            return Ok(result);

        }


    }
}
