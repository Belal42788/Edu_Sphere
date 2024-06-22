using Backend.Dtos;
using Backend.Interfaces;
using Backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services
{
    public class TeacherService : ITeacherService
    {
        private readonly ApplictionDbContext _cotext;
        private readonly UserManager<User> _userManager;
        private readonly IImageService _imageService;
        public TeacherService(ApplictionDbContext cotext, UserManager<User> userManager, IImageService imageService)
        {
            _cotext = cotext;
            _userManager = userManager;
            _imageService = imageService;

        }

        public async Task<TeacherModel> AddTeacherAsync(TeacherDto model, User user)
        {
            var Teacher = new Teacher();
            var teacherModel = new TeacherModel();
            if (await _cotext.Teachers.AnyAsync(x => x.UserID == user.Id))
            {
                teacherModel.Message = "you already a teacher";
                return teacherModel;

            }

            var TeacherApplication = new TeacherApplication
            {
                Degree = model.Degree,
                DegreeImageUrl = _imageService.SetImage(model.DegreeImage),
                UserID = user.Id,
            };
            await _cotext.TeacherApplications.AddAsync(TeacherApplication);
            await _cotext.SaveChangesAsync();

            teacherModel = new TeacherModel
            {
                Degree = model.Degree,
                DegreeImageUrl = "https://localhost:7225" + TeacherApplication.DegreeImageUrl,
                Name = user.FirstName + user.LastName,
            };
            return teacherModel;
        }
        public async Task<IEnumerable<CourseModel>> GetMyCoursesAsync(string userId){
            var user =   _cotext.Users.Include(x => x.Teacher).FirstOrDefault(x => x.Id == userId);
            var teacher = await _cotext.Teachers.Include(x => x.Courses)
                .FirstOrDefaultAsync(x=>x.Id==user.Teacher.Id);
            var courseModels = new List<CourseModel>();

            foreach (var course in teacher.Courses)
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
                    StudentCount = await _cotext.StudentCourses.CountAsync(m => m.CourseId == course.Id)
                };

                courseModels.Add(courseModel);
            }
                return courseModels;


        }
        public async Task<IEnumerable<StudentModel>> GetMyStudnetAsync(string userId) 
        {
            var students =await _cotext.Teachers.Include(x=>x.User).Include(x=>x.Courses)
                .ThenInclude(x=>x.StudentCourses)
                .ThenInclude(x=>x.Student)
        .Where(t => t.UserID ==userId)
        .SelectMany(t => t.Courses)
        .SelectMany(c => c.StudentCourses)
        .Select(sc => sc.Student)
        .Select(x=>new StudentModel { Imgae= "https://localhost:7225"+x.User.ImageUrl,
        Name=x.User.FirstName + x.User.LastName})
        .Distinct()
        .ToListAsync();
            
                
            return students;

         


        }

    }
}
