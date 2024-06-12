using Backend.Dtos;
using Backend.Models;

namespace Backend.Interfaces
{
    public interface ITeacherService
    {
       Task<TeacherModel> AddTeacherAsync(TeacherDto model,User user);
       Task<IEnumerable<CourseModel>> GetMyCoursesAsync(string userId);
    }
}
