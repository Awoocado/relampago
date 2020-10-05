const Discord = require("discord.js")
exports.run = async (client, message, args) => {
    let argumento = args.join(" ");
    let txt = encodeURIComponent(argumento);
    let link = `https://api.alexflipnote.dev/facts?text=${txt}`;
    if (!argumento) return message.channel.send("Tienes que poner un texto, Ejemplo: `r!facts Hola`")
    let embed = new Discord.MessageEmbed()
        .setImage(link)
    message.channel.send(embed)
};

exports.config = {
   "category": "diversion", // Esta depende de su carpeta 
    "name": "facts",
    "description": "Persona con un libro que dice **DATOS**",
    "usage": "facts [texto]",
    "alias": ["datos"]
};