using Newtonsoft.Json;
using System.Net;

namespace DiscordService
{
    public class DiscordWebHook :IWebHook
    {
        private readonly string _url;
        private readonly string _username;

        public DiscordWebHook(string url, string username, string profilePicture)
        {
            _url = url;
            _username = username;
        }

        public async Task SendMessage(string messageTitle, string messageBody, string imageUrl)
        {
            var request = (HttpWebRequest)WebRequest.Create(_url);
            request.ContentType = "application/json";
            request.Method = "POST";

            await using (var sw = new StreamWriter(request.GetRequestStream()))
            {
                var json = JsonConvert.SerializeObject(new
                {
                    username = _username,
                    embeds = new[]
                    {
                        new
                        {
                            description = messageBody,
                            title = messageTitle,
                            image = new
                            {
                                url = imageUrl
                            }
                        },
                    }
                });

                await sw.WriteAsync(json);
                sw.Close();
            }

            request.GetResponse();
        }
    }
}
