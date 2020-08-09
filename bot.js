const Discord = require("discord.js");
const client = new Discord.client();
client.on("ready", () => {
console.log("Im ready!");
});
client.on("message", message => {
  if(message.content === "ping") {
  message, replay("ping"); 
}
});

client.login(proces.nvm.BOT-TOKEN);
