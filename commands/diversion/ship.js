const Discord = require("discord.js")
exports.run = async (client, message, args) => {
  const menciones = message.mentions.users.first(2);
 let mencionado1 = menciones[0]
 let mencionado2 = menciones[1] || message.author; 
  // =D
 let embed = new Discord.MessageEmbed()
 .setImage(`https://api.alexflipnote.dev/ship?user=${mencionado1.displayAvatarURL({format: "png"})}&user2=${mencionado2.displayAvatarURL({format: "png"})}`)
 message.channel.send(embed)
};

exports.config = {
   "category": "diversion", // Esta depende de su carpeta 
    "name": "ship",
    "description": "Shipea a  2 personas",
    "usage": "ship <mencion1> [mencion2]",
    "alias": ["love"]
};