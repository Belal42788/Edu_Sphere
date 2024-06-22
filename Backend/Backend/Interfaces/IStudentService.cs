using Backend.Dtos;
using Backend.Models;

namespace Backend.Interfaces
{
    public interface IStudentService
    {
        Task<AfterAnrollModel> JointCourseAsync(string UserId, CourseDto model);
        Task<IEnumerable<CourseModel>> GetMyCoursesAsync(string userId);


    }
}
