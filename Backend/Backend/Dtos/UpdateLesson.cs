namespace Backend.Dtos
{
    public class UpdateLesson
    {
        public string Title { get; set; }
        public int LessonId { get; set; }
        public string Topic { get; set; }
        public IFormFile Video { get; set; }
        public IFormFile LessonMaterial { get; set; }
    }
}
