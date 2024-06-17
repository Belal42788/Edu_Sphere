using Backend.Dtos;
using Backend.Interfaces;
using Backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services
{
    public class AdminService : IAdminService
    {
        private readonly ApplictionDbContext _cotext;
        private readonly UserManager<User> _userManager;
        private readonly IImageService _imageService;
        private readonly IEmailSender _emailSender;

        public AdminService(ApplictionDbContext cotext, UserManager<User> userManager, IImageService imageService, IEmailSender emailSender)
        {
            _cotext = cotext;
            _userManager = userManager;
            _imageService = imageService;
            _emailSender = emailSender;
        }

       
        public async Task<IEnumerable<TeacherModel>> GetAllAplicationAsync()
        {
            var teachrApplication = await  _cotext.TeacherApplications.Include(x=>x.User).ToListAsync();
           
            var teacherModel= teachrApplication.Select(x => new TeacherModel
            {
                ApplictationId= x.Id,
                Degree= x.Degree,
                DegreeImageUrl= "https://localhost:7225" + x.DegreeImageUrl,
               Name=x.User.FirstName+" "+x.User.LastName,
               

            } ).ToList();
           

            return teacherModel;


        }
        public async Task<string> AcceptApplication(TeacherApplicationDto Model)
        {
            var teachrApplication = await _cotext.TeacherApplications.Include(x => x.User).FirstOrDefaultAsync(x=>x.Id==Model.Id);
            var Teacher = new Teacher { UserID = teachrApplication.UserID};
            await _cotext.Teachers.AddAsync(Teacher);
            await _cotext.SaveChangesAsync();
            _emailSender.SendEmailAsync(teachrApplication.User.Email, "Teacher Applications", "Your application has been approved, now you have become a teacher in EduSphere");
             _cotext.TeacherApplications.Remove(teachrApplication);
            await _cotext.SaveChangesAsync();
            return "Accept Application";


        }
        public async Task<string> RejectionApplication(TeacherApplicationDto Model)
        {
            var teachrApplication = await _cotext.TeacherApplications.Include(x => x.User).FirstOrDefaultAsync(x => x.Id == Model.Id);
            _emailSender.SendEmailAsync(teachrApplication.User.Email, "Teacher Applications", "Your application has been rejected,sorry");
            _cotext.TeacherApplications.Remove(teachrApplication);
            await _cotext.SaveChangesAsync();
            return "Rejection Application";


        }

    }
}
