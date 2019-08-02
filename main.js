const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.channel.send("Pong!");
  }
});

client.login("NjA2ODc3MjE2MjM5Nzc5ODQx.XUR5og.n_0QEauDvCpsFXFVRazIVTLFlKM");
