using Backend.Models;

namespace Backend.Dtos
{
    public class CreateLesson
    {
      
        public string Title { get; set; }
        public int CourseID { get; set; }
        public string Topic { get; set; }
        public IFormFile Video { get; set; }
        public IFormFile LessonMaterial { get; set; }
    }
}
