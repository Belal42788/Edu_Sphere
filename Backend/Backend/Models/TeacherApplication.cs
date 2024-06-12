namespace Backend.Models
{
    public class TeacherApplication
    {
        public int Id { get; set; }
        public string Degree { get; set; }
        public string  DegreeImageUrl { get; set; }
        public string UserID { get; set; }
        public User User { get; set; }
    }
}
