namespace Backend.Models
{
    public class AfterAnrollModel
    {
        public int Id { get; set; }
        public string CourseName { get; set; }
        public string CourseDescription { get; set; }
        public string Subject { get; set; }
        public string Cost { get; set; }
        public int TeacherID { get; set; }
        public string Image { get; set; }
        public string Message { get; set; }
        public string Language { get; set; }
        public int StudentCount { get; set; }
        public int LessonCount { get; set; }
        public Task<IEnumerable<LessonModel>> lessons { get; set; }
    }
}
