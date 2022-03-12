using DiscordService;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//builder.Services.AddTransient<IWebHook>(x =>
//    new DiscordWebHook(
//        DiscordConfig.Url,
//        DiscordConfig.Username,
//        DiscordConfig.ProfilePicture));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapPost("/sendmessage", async (Request request) =>
{
    var webHook = new DiscordWebHook(request.WeebHookUrl,
        request.Username,
        request.ProfilePicture);

    await webHook.SendMessage(request.MessageTitle, request.MessageBody, request.ImageUrl);
    return Results.Ok();
}).WithName("SendMessageToDiscord"); 

app.Run();
