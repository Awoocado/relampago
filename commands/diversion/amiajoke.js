const Discord = require("discord.js")
exports.run = async (client, message, args) => {
     let persona = message.mentions.users.first();
    if (!persona) persona = message.author;
    let link = `https://api.alexflipnote.dev/amiajoke?image=${persona.displayAvatarURL()}`;
    let embed = new Discord.MessageEmbed()
        .setImage(link)
    message.channel.send(embed)
};

exports.config = {
   "category": "diversion", // Esta depende de su carpeta 
    "name": "amiajoke",
    "description": "Soy una broma para ti?",
    "usage": "amiajoke <mencion>",
    "alias": ["alias"]
};