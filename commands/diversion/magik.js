const Discord = require('discord.js');

exports.run = async (client, message, args) =>{
      let persona = message.mentions.users.first() || message.author;
    if (!persona) persona = message.author;
    let link = `https://api.alexflipnote.dev/filter/magik?image=${persona.displayAvatarURL({ format: "png" })}`;
    let embed = new Discord.MessageEmbed()
        .setImage(link)
        .setColor("RANDOM")
    message.channel.send(embed)
}
exports.config = {
  "category": "diversion",
  "name": "magik",
  "description": "Deforma la foto de un usuario",
  "usage": "magik <mencion>",
  "alias": ["magik"]
};