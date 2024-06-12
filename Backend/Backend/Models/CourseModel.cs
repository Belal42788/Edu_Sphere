namespace Backend.Models
{
    public class CourseModel
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
    }
}
