using Backend.Interfaces;
using Backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services
{
    public class HomeService : IHomeService
    {
        private readonly ApplictionDbContext _cotext;
        private readonly UserManager<User> _userManager;
        private readonly IImageService _imageService;

        public HomeService(ApplictionDbContext cotext, UserManager<User> userManager, IImageService imageService)
        {
            _cotext = cotext;
            _userManager = userManager;
            _imageService = imageService;
        }

        public async Task<IEnumerable<CourseModel>> HomeCoursesAsync(string UserId)
        {
            var coursesQuery = _cotext.StudentCourses
                .Include(x => x.Course)
                .ThenInclude(x => x.Teacher).Include(x => x.Student)
                .AsEnumerable()
                .Where(x => x.Student.UserID != UserId && x.Course.Teacher.UserID != UserId)
                .GroupBy(x => x.Course)
                .Select(x => new { Course = x.Key, Count = x.Count() })
                .OrderByDescending(x => x.Count);

            // Execute the database query and retrieve results
            var courses = coursesQuery.ToList();
            var courseModels = new List<CourseModel>();

            foreach (var course in courses)
            {
                var courseModel = new CourseModel
                {
                    Id = course.Course.Id,
                    CourseName = course.Course.CourseName,
                    CourseDescription = course.Course.CourseDescription,
                    Cost = course.Course.Cost,
                    Subject = course.Course.Subject,
                    TeacherID = course.Course.TeacherID,
                    Image = "https://localhost:7225" + course.Course.ImgUrl,
                    Language = course.Course.Language,
                    StudentCount = course.Count,
                    link=course.Course.link
                    
                };

                courseModels.Add(courseModel);
            }
            return courseModels;

        }
    }
}
