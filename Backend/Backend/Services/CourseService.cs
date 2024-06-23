using Backend.Dtos;
using Backend.Interfaces;
using Backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using NuGet.DependencyResolver;
using System.Linq;
using System.Xml.Linq;

namespace Backend.Services
{
    public class CourseService : ICourseService
    {
        private readonly ApplictionDbContext _cotext;
        private readonly UserManager<User> _userManager;
        private readonly IImageService _imageService;

        public CourseService(ApplictionDbContext cotext, UserManager<User> userManager, IImageService imageService)
        {
            _cotext = cotext;
            _userManager = userManager;
            _imageService = imageService;
        }
        public async Task<CourseModel> CreateCourseAsync(CreateCourse model,string userUid)
        {
            var Teacher=new Teacher();
            var courseModel = new CourseModel();
            if (!await _cotext.Teachers.AnyAsync(x => x.UserID == userUid))
            {
                courseModel.Message = "Sorry,You are not a teacher";
                return courseModel;

              
            }
            else
            
              Teacher = await _cotext.Teachers.SingleOrDefaultAsync(x => x.UserID == userUid);


            var Course = new Course {
                CourseName = model.CourseName,
                CourseDescription = model.CourseDescription,
                Cost = model.Cost,
                Subject = model.Subject,
                TeacherID = Teacher.Id,
                Language = model.Language,
                ImgUrl = _imageService.SetImage(model.Image),
                StudentCount = 0,
                link=model.Link

            };
            await _cotext.Courses.AddAsync(Course);
            await _cotext.SaveChangesAsync();
            courseModel = new CourseModel
            {
                Id=Course.Id,
                CourseName = Course.CourseName,
                CourseDescription = Course.CourseDescription,
                Cost = Course.Cost,
                Subject = Course.Subject,
                TeacherID = Course.TeacherID,
                Language = model.Language,
                Image = "https://localhost:7225" + Course.ImgUrl,
                StudentCount=await _cotext.StudentCourses.CountAsync(m => m.CourseId == Course.Id),
                link=model.Link
            };
            return courseModel;

            
        }

        public async Task<IEnumerable<CourseModel>> FindCourseAsync(string Name)
        {
            var Courses =await _cotext.Courses.Include(x => x.Teacher).ThenInclude(x => x.User).Where(x=>x.CourseName==Name).ToListAsync();


            var courseModels = new List<CourseModel>();

            foreach (var course in Courses)
            {
                var courseModel = new CourseModel
                {
                    Id = course.Id,
                    CourseName = course.CourseName,
                    CourseDescription = course.CourseDescription,
                    Cost = course.Cost,
                    Subject = course.Subject,
                    TeacherID = course.TeacherID,
                    Image = "https://localhost:7225" + course.ImgUrl,
                    Language = course.Language,
                    StudentCount = await _cotext.StudentCourses.CountAsync(m => m.CourseId == course.Id),
                    link=course.link,
                    TeacherName = course.Teacher.User.FirstName + course.Teacher.User.LastName,
                    TeacherImage = "https://localhost:7225" + course.Teacher.User.ImageUrl

                };

                courseModels.Add(courseModel);
            }
            return courseModels;


        }
        public async Task<IEnumerable<CourseModel>> AllCoursesAsync()
        {
            var Courses = await _cotext.Courses.Include(x=>x.Teacher).ThenInclude(x=>x.User)
                .OrderByDescending(x => x.StudentCount).ToListAsync();
            var courseModels = new List<CourseModel>();

            foreach (var course in Courses)
            {
                var courseModel = new CourseModel
                {
                    Id = course.Id,
                    CourseName = course.CourseName,
                    CourseDescription = course.CourseDescription,
                    Cost = course.Cost,
                    Subject = course.Subject,
                    TeacherID = course.TeacherID,
                    Image = "https://localhost:7225" + course.ImgUrl,
                    Language = course.Language,
                    StudentCount = course.StudentCount,
                    link = course.link,
                    TeacherName=course.Teacher.User.FirstName+ course.Teacher.User.LastName,
                    TeacherImage= "https://localhost:7225" + course.Teacher.User.ImageUrl

                };

                courseModels.Add(courseModel);
            }
            return courseModels;

        }
        public async Task<IEnumerable<CourseModel>> FindCourseBySubjectAsync(string Subject) 
        {
            var Courses = await _cotext.Courses.Include(x => x.Teacher).ThenInclude(x => x.User)
                .Where(x => x.Subject==Subject).ToListAsync();


            var courseModels = new List<CourseModel>();

            foreach (var course in Courses)
            {
                var courseModel = new CourseModel
                {
                    Id = course.Id,
                    CourseName = course.CourseName,
                    CourseDescription = course.CourseDescription,
                    Cost = course.Cost,
                    Subject = course.Subject,
                    TeacherID = course.TeacherID,
                    Image = "https://localhost:7225" + course.ImgUrl,
                    Language = course.Language,
                    StudentCount = await _cotext.StudentCourses.CountAsync(m => m.CourseId == course.Id),
                    link = course.link,
                    TeacherName = course.Teacher.User.FirstName + course.Teacher.User.LastName,
                    TeacherImage = "https://localhost:7225" + course.Teacher.User.ImageUrl

                };

                courseModels.Add(courseModel);
            }
            return courseModels;


        }
    }
}
