const Discord = require("discord.js")
exports.run = async (client, message, args) => {
  let argumento = args.join(" ");
    let txt = encodeURIComponent(argumento);
    let link = `https://api.alexflipnote.dev/calling?text=${txt}`;
    if (!argumento) return message.channel.send("Tienes que poner un texto, Ejemplo: `r!call Hola`")
    let embed = new Discord.MessageEmbed()
        .setImage(link)
    message.channel.send(embed)
};

exports.config = {
   "category": "diversion", // Esta depende de su carpeta 
    "name": "call",
    "description": "Tom llamando a alguien",
    "usage": "call [text]",
    "alias": [""]
};