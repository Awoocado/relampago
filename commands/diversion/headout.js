const Discord = require("discord.js")
exports.run = async (client, message, args) => {
      let argumento = args.join(" ");
    let txt = encodeURIComponent(argumento);
    let link = `https://ik.imagekit.io/KableKompany//tr:%7Bn-head_out:ot-${txt},ots-50,otc-111111,otf-Montserrat,ott-b,ofo-top%7D/392xtu_RKtV4NvSl.jpg`;
    if (!argumento) return message.channel.send("Tienes que poner un texto, Ejemplo: `r!headout Hola`")
    let embed = new Discord.MessageEmbed()
        .setImage(link)
    message.channel.send(embed)
};

exports.config = {
   "category": "diversion", // Esta depende de su carpeta 
    "name": "headout",
    "description": "Ight imma head out",
    "usage": "headout [texto]",
    "alias": ["ightimmaheadout"]
}; 