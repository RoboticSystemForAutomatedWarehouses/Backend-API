namespace WebInterface.Models
{
    public class JsonResponse
    {
        public bool Success { get; set; }
        public object Result { get; set; }
        public string Message { get; set; }
    }
}