const Discord = require('discord.js');
exports.run = (client, message, args) =>{
  let derky = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  const avatarembed = new Discord.MessageEmbed()
  .setDescription(`[Descargar avatar](${derky.displayAvatarURL({format: 'png', dynamic: 'true', size: 2048})})`)
  .setImage(derky.displayAvatarURL({dynamic: 'true', size: 2048}))
  .setColor('RANDOM')
  .setFooter(`Avatar solicitado por: ${message.member.displayName}`)
  
  message.channel.send(avatarembed)
}

exports.config = {
  "category": "utilidad",
  "name": "avatar",
  "description": "Muestra el avatar de un usuario",
  "usage": "avatar <mencion>",
  "alias": ["avatar","av", "photo", "icono"]
};