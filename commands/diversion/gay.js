const Discord = require('discord.js');

exports.run = async (client, message, args) =>{
      let persona = message.mentions.users.first();
    if (!persona) persona = message.author;
    let link = `https://api.alexflipnote.dev/filter/gay?image=${persona.displayAvatarURL({ format: "png", size: 2048 })}`;
    let embed = new Discord.MessageEmbed()
        .setImage(link)
        .setColor("RANDOM")
    message.channel.send(embed)
}
exports.config = {
  "category": "diversion",
  "name": "gay",
  "description": "Agrega un filtro de color arcoiris la foto de un usuario",
  "usage": "gay [mencion]",
  "alias": ["rainbow"]
};