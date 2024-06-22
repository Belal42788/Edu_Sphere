namespace Backend.Models
{
    public class Course
    {
        public int Id { get; set; }
        public string CourseName { get; set; }
        public string CourseDescription { get; set; }
        public string Subject { get; set; }
        public string Cost { get; set; }
        public int TeacherID { get; set; }
        public Teacher Teacher { get; set; }
        public string ImgUrl { get; set; }
        public string Language { get; set; }
        public string link { get; set; }
        public int StudentCount { get; set; }
        public List<Lesson> Lessons { get; set; }
        public ICollection<StudentCourse> StudentCourses { get; set; }
        public Course()
        {
            StudentCount = 0; // Initial value
        }
    }
}
