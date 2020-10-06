const Discord = require('discord.js');


exports.run = (client, message, args) =>{
  
  let embed = new Discord.MessageEmbed()
  .setTitle("Información sobre el bot")
  .addField('Nombre:', `${client.user.username}`)
  .addField('Version:', 'V12')
  .addField('Libreria:', `Discord.js ^${Discord.version}`)
  .addField('Ping:', `${client.ws.ping}`)
  .addField('Memoria:', `${(process.memoryUsage().heapUsed / 512 / 512).toFixed(2)} MB`)
  .addField("Contribuidores:", "AndreMor#0008 \nAwoo#0741 \nMonoverde 🎃#8888 \nLil MARCROCK22#2222 \nILuck₂₀₆₀ ✯Team VR✯卩卄乂丂匚ʅɧ#2060 \nZig#5213 \nDerky#0004 \nchase ᭧#4773\nAdrian..  ⚡#6708")
  .setColor('RANDOM')
  .setTimestamp()
  message.channel.send(embed) 
  
}

exports.config = {
  "category": "informacion",
  "name": "botinfo",
  "description": "Muestra la informacion del bot",
  "usage": "botinfo",
  "alias": ["botinfo","info", "about"]
};