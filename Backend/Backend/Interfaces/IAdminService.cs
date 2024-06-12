using Backend.Dtos;
using Backend.Models;

namespace Backend.Interfaces
{
    public interface IAdminService
    {
        Task<IEnumerable<TeacherModel>> GetAllAplicationAsync();
        Task <string> AcceptApplication(TeacherApplicationDto Model);
        Task<string> RejectionApplication(TeacherApplicationDto Model);
    }
}
