using Backend.Dtos;
using Backend.Interfaces;
using Backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services
{
    public class StudentService : IStudentService

    {
        private readonly ApplictionDbContext _cotext;
        private readonly UserManager<User> _userManager;
        private readonly IImageService _imageService;
        private readonly ILessonService _lessonService;
        public StudentService(ApplictionDbContext cotext, UserManager<User> userManager, IImageService imageService, ILessonService lessonService)
        {
            _cotext = cotext;
            _userManager = userManager;
            _imageService = imageService;
            _lessonService = lessonService;

        }
        public async Task<AfterAnrollModel>JointCourseAsync(string UserId, CourseDto model)
        {
            var AfterAnroll=new AfterAnrollModel();
            var course = await _cotext.Courses.Include(x=>x.Teacher).Include(m=>m.Lessons).FirstOrDefaultAsync(x=>x.Id==model.Id);
            if (course == null)
            {
                AfterAnroll.Message = "course not found";
                return AfterAnroll;
            }
            if(course.Teacher.UserID == UserId)
            {
                AfterAnroll.Message = "cannot join to course becouse you are course Teacher";
                return AfterAnroll ;
            }
            
            var student = new Student { UserID =UserId};
            await _cotext.Students.AddAsync(student);
            _cotext.SaveChanges();
            var studentCourses=new StudentCourse { StudentId=student.Id,CourseId=model.Id };
            await _cotext.StudentCourses.AddAsync(studentCourses);
            await  _cotext.SaveChangesAsync();
            var courseDto=new CourseDto { Id=course.Id};
            AfterAnroll = new AfterAnrollModel
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
                LessonCount= await _cotext.Lessons.CountAsync(m=>m.CourseID==course.Id),
                lessons= _lessonService.GetAllLessonAsync(courseDto)
                
                
            };
            return AfterAnroll;
        }
    }
}
