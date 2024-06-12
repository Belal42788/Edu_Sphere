using Backend.Dtos;
using Backend.Interfaces;
using Backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
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
            

            var Course = new Course{
                CourseName = model.CourseName,
                CourseDescription = model.CourseDescription,
                Cost = model.Cost,
                Subject = model.Subject,
                TeacherID = Teacher.Id,
                Language = model.Language,
                ImgUrl = _imageService.SetImage(model.Image)
            };
            await _cotext.Courses.AddAsync(Course);
            _cotext.SaveChanges();
            courseModel = new CourseModel
            {
                Id=Course.Id,
                CourseName = Course.CourseName,
                CourseDescription = Course.CourseDescription,
                Cost = Course.Cost,
                Subject = Course.Subject,
                TeacherID = Course.TeacherID,
                Language = model.Language,
                Image = "https://localhost:7225" + Course.ImgUrl
            };
            return courseModel;

            
        }

        public async Task<IEnumerable<CourseModel>> FindCourseAsync(string Name)
        {
            var Course =await _cotext.Courses.Where(x=>x.CourseName==Name).ToListAsync();


            var courseModel = Course.Select(x => new CourseModel
            {
                Id = x.Id,
                CourseName = x.CourseName,
                CourseDescription = x.CourseDescription,
                Cost = x.Cost,
                Subject = x.Subject,
                TeacherID = x.TeacherID,
                Image = "https://localhost:7225" + x.ImgUrl

            }).ToList();
            return courseModel;
           

        }
    }
}
