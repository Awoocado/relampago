const ILUCK = require('discord.js'); 
exports.run = async (client, message, args) =>{
  
  let ping = client.ws.ping;
 message.channel.send('Obteniendo el Ping...').then(async(m) => {
  let pingts = Date.now() - m.createdTimestamp
  const e = new ILUCK.MessageEmbed()
  .setTitle('Ping del bot')
  .setColor("RANDOM") 
  .setDescription(`📡 Ping API: ${ping}.ms \n 🏓 Ping Bot: ${pingts}.ms`)
  m.edit('\u200b', {embed: e}) 
 
 });
}
exports.config = {
  "category": "informacion",
  "name": "ping",
  "description": "Muestra el ping del bot",
  "usage": "ping",
  "alias": ["ping", "delay", "pong"]
};

