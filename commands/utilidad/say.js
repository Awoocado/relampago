const Discord = require('discord.js');

exports.run = (client, message, args) =>{
  if(!args[0]) return message.reply("Tienes que escribir un mensaje para repetir.")
  message.channel.send(args.join(' '), {disableMentions:'all'});
  if(message.deleteable) message.delete();
  
}
//aokmaster
exports.config = {
  "name": "say",
    "description": "Haz que envie un mensaje",
  "usage": "say <mensaje>",
  "alias": ["say","send"]
};