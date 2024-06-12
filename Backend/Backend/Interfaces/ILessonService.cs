using Backend.Dtos;
using Backend.Models;

namespace Backend.Interfaces
{
    public interface ILessonService
    {
        Task<LessonModel> CreateLessonAsync(CreateLesson Model);
    }
}
