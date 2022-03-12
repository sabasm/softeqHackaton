namespace DiscordService
{
    public interface IWebHook
    {
        Task SendMessage(string messageTitle, string messageBody, string imageUrl);
    }
}
