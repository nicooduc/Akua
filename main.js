const config = require("./config.json");
const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: false });

bot.on("ready", () => {
  console.log(`${client.user.tag} est en ligne`);
});

bot.on("message", msg => {
  if (msg.content === "ping") {
    msg.channel.send("Pong!");
  }
});

bot.login(NjA2ODc3MjE2MjM5Nzc5ODQx.XURdGQ.SIatAO6eiXLd45bsBwIUalJVwgk);
