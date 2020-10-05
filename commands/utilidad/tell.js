const Discord = require('discord.js');


exports.run = (client, message, args) => {
let texto = args.join(" ")
if(!texto) return message.channel.send("Tienes que escribir un mensaje!")
  if(message.deletable) message.delete()
  let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setDescription(texto)
  message.channel.send({embed: embed}) 

}
exports.config = {
  "category": "utilidad",
  "name": "tell",
  "description": "Di algo con el bot",
  "usage": "tell [texto]",
  "alias": ["tell"]
};