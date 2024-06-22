using Backend.Models;

namespace Backend.Interfaces
{
    public interface IHomeService
    {
        Task<IEnumerable<CourseModel>> HomeCoursesAsync(string UserID);
    }
}
