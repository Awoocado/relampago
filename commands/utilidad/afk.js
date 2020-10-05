exports.run = async(client, message, args) => { 
    const d = require('discord.js')
const flor = args.join(' ') || "No especificada"
let check = await message.author.setAFK(flor)
const e = new d.MessageEmbed()
.setTitle('Tu afk cambio a '+ flor)
message.channel.send(e) 
}
exports.config = { 
    category: "utilidad",
    name: "afk",
    description: "Marca tu estado como ",
    usage: "afk",
    alias: ["afk"]
}