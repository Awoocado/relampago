const ILUCK = require('discord.js');
exports.run = (client, message, args) => {
  let embed = new ILUCK.MessageEmbed()
  .setTimestamp()//xdxdx
  .setColor(0xff0000)
  .setAuthor(message.guild.name, message.guild.iconURL({dynamic: true}))
  .addField('Creador', message.guild.owner.user.toString())
  .addField('Roles', message.guild.roles.cache.size >= 2 ?message.guild.roles.cache.filter(a=>a.name !== '@everyone').map(a => `<@&${a.id}>`) : 'No hay roles!', true)
  .addField('Estadisticas', `${message.guild.members.cache.size.toLocaleString()}`, true)
  .addField('Canales texto', message.guild.channels.cache.filter(a => a.type === "text").size.toLocaleString(), true)
  .addField('Canales de voz', message.guild.channels.cache.filter(a => a.type === "voice").size.toLocaleString(), true)
.setThumbnail(message.guild.iconURL())
  message.channel.send({embed: embed});
};

exports.config = {
  "name": "serverinfo",
  "description": "Muestra informacion del servidor actual",
  "usage": "serverinfo",
  "alias": ["serverinfo","server"]
};