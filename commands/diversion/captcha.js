const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  if(!args[0]) return message.channel.send("Tienes que poner algo!");
  let monoverde = encodeURIComponent(args[0]);
  let embed = new Discord.MessageEmbed()
  .setImage(`https://api.alexflipnote.dev/captcha?text=${monoverde}`)
  message.channel.send(embed)
};

exports.config = {
  category: "diversion", // Esta depende de su carpeta
  name: "captcha",
  description: "Hace un captcha con texto personalizado",
  usage: "captcha [texto]",
  alias: ["googlecaptcha"]
};