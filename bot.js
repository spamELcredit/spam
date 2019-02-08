const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543477956409032716")
setInterval(function() {
channel.send(`spamforboss spamforboss spamforboss spamforboss spamforboss spamforboss spamforboss`);
}, 30)
})

client.login(process.env.BOT_TOKEN);