using Backend.Dtos;
using Backend.Interfaces;
using Backend.Models;
using Microsoft.AspNetCore.Identity;

namespace Backend.Services
{
    public class LessonService : ILessonService
    {
        private readonly ApplictionDbContext _cotext;
        private readonly UserManager<User> _userManager;
        private readonly IImageService _imageService;

        public LessonService(ApplictionDbContext cotext, UserManager<User> userManager, IImageService imageService)
        {
            _cotext = cotext;
            _userManager = userManager;
            _imageService = imageService;
        }
        public async Task<LessonModel> CreateLessonAsync(CreateLesson Model)
        {
            var lesson = new Lesson
            {
                CourseID = Model.CourseID,
                Title = Model.Title,
                Topic = Model.Topic,
                Video = _imageService.SetImage(Model.Video),
                LessonMaterial=_imageService.SetImage(Model.LessonMaterial)

            };
            await _cotext.Lessons.AddAsync(lesson);
            _cotext.SaveChangesAsync();
            var lessonModel = new LessonModel
            {
                Title = lesson.Title,
                Topic = lesson.Topic,
                Video = "https://localhost:7225" + lesson.Video,
                LessonMaterial= "https://localhost:7225"+lesson.LessonMaterial
            };
            return lessonModel;
        }
    }
}
