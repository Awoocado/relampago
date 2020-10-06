const Discord = require('discord.js')
exports.run = async(client, message, args) => { 
    const serverQueue = message.guild.queue;
    if(!serverQueue) return message.reply('Aun no hay cola, prueba el comando play para añadir una cancion')
    const mapeo_osi = serverQueue.songs.map(m=>`[${m.title}](${m.url})] \n`)
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(mapeo_osi)
    message.channel.send(embed)
}
exports.config = { 
category: "musica",
name: "queue",
description: "Muestra la cola del servidor",
usage: "queue",  
alias: ["queue", "qs","q"] 
} 