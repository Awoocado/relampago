const Discord = require('discord.js');

exports.run = (client, message, args) =>{
  let user = message.mentions.users.first() || message.author 
  const avatarembed = new Discord.MessageEmbed()
  .setDescription(`[Descargar avatar](${user.displayAvatarURL({format: 'png',dynamic: 'true'})})`)
  .setImage(user.displayAvatarURL({dynamic: 'true', size: 1024}))
  .setColor('RANDOM')
  .setFooter(`Avatar solicitado por: ${message.member.displayName}`)
  
  message.channel.send(avatarembed)
}

exports.config = {
  "name": "avatar",
  "description": "Muestra el avatar de un usuario",
  "usage": "avatar <mencion>",
  "alias": ["avatar","av", "photo", "icono"]
};