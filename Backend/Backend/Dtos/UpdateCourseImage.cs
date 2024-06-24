namespace Backend.Dtos
{
    public class UpdateCourseImage
    {
        public int Id { get; set; }
        public IFormFile Image { get; set; }
    }
}
