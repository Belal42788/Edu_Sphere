using Backend.Dtos;
using Backend.Models;

namespace Backend.Interfaces
{
    public interface ICourseService
    {
        Task<CourseModel> CreateCourseAsync(CreateCourse Model,string userUid);
        Task<IEnumerable<CourseModel>> FindCourseAsync( string Name);
        Task<IEnumerable<CourseModel>> AllCoursesAsync();
        Task<IEnumerable<CourseModel>> FindCourseBySubjectAsync(string Subject);
        Task<CourseModel> UpdateCousreName(UpdateCourseName model);
        Task<CourseModel> UpdateCousreImage(UpdateCourseImage model);
    }
}
