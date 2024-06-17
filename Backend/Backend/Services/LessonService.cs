using Backend.Dtos;
using Backend.Interfaces;
using Backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

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
            await _cotext.SaveChangesAsync();
            var lessonModel = new LessonModel
            {
                Id=lesson.Id,
                Title = lesson.Title,
                Topic = lesson.Topic,
                Video = "https://localhost:7225" + lesson.Video,
                LessonMaterial= "https://localhost:7225"+lesson.LessonMaterial
            };
            return lessonModel;
        }
        public async Task<IEnumerable<LessonModel>> GetAllLessonAsync(CourseDto model)
    
        {
            var lessons = await _cotext.Courses.Include(x => x.Lessons).FirstOrDefaultAsync(x => x.Id == model.Id);
            var lessonModels=new List<LessonModel>();
            foreach (var x in lessons.Lessons)
            {
                var lessonModel = new LessonModel
                {
                    Id = x.Id,
                    Title = x.Title,
                    Topic = x.Topic,
                    Video = "https://localhost:7225" + x.Video,
                    LessonMaterial = "https://localhost:7225" + x.LessonMaterial,
                };
                lessonModels.Add(lessonModel);

            }
            if (lessonModels.Count==0)
            {
                lessonModels.Add(new LessonModel { Message = "not found lessons" });
            }

            return lessonModels;

        }
    }
}
