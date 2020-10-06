const Discord = require('discord.js');
exports.run = (client, message, args) =>{
  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  
  let color = {
    "online": "#00c903",
    "idle": "#ff9a00",
    "dnd": "#ff0000",
    "offline": "#d8d8d8"
  }
  let estados = {
        "online": "En Línea",
        "idle": "Ausente",
        "dnd": "No molestar",
        "offline": "Desconectado/invisible",
        "streaming": 'En directo'
  }
  
  let flagemojis = { 
    "DISCORD_EMPLOYEE": "<:Discordstaff:762216766230626304>",
    "DISCORD_PARTNER": "<:partner:762216765580247042>",
    "BUGHUNTER_LEVEL_1": "<:bughunterlv2:762216765366206484>",
    "HOUSE_BRAVERY": "<:housebravery:762216764972072972>",
    HOUSE_BRILLIANCE: "<:housebrillance:762216765026992128>",
    "HOUSE_BALANCE": "<:housebalance:762216764846505994> ",
    "EARLY_SUPPORTER": "<:earlysupp:762216765354278923>",
    "BUGHUNTER_LEVEL_2": "<:bughunterlv1:762216765169860638>",
    "VERIFIED_BOT": "<:verifiedbot:762216765404217354>",
    "VERIFIED_DEVELOPER": "<:verifieddev:762216765429252106>"
  }
  let plataformas1 = {
    "desktop": "Aplicación de escritorio",
    "web": "Página web",
    "mobile": "Dispositivo móvil"
  } 
  let plataformas2 = Object.entries(
  user.presence.clientStatus).filter(([value, key]) => value != null && value != undefined).map(([key, value]) => key)
   const embed = new Discord.MessageEmbed()
   .setThumbnail(user.displayAvatarURL({dynamic: true, size: 2048}))
   .setColor(color[user.presence.status])
   .setAuthor(`Información de ${user.tag}`, user.displayAvatarURL({dynamic: true}))
  
   .addField('Nombre de usuario', user.username)//hola salu3 xd
   .addField('Apodo en el servidor', user.nickname ? user.nickname : "No tiene")
   .addField('Discriminador:', `#${user.discriminator}`)
    .addField('Estado:', estados[user.presence.status])
   .addField('Plataforma de conexión', `${plataformas1[plataformas2]}`)
   .addField('ID', user.id)//entonces? xq hacne esssage.gui;d.member.user.roles.cahce.izefnvj.rgvrjmrthbytj.rtvrt
   .addField('Roles', message.guild.member(user).roles.cache.size >= 2 ? message.guild.member(user).roles.cache.filter(a=>a.name !== `@everyone`).map(a => a).join("\n") : "No tiene roles")
  .addField("Insignias", user.flags.toArray().length ? user.flags.toArray().map(a=>flagemojis[a]).join(', ') : "No tiene")
   .addField('Avatar', `[Ver avatar](${user.displayAvatarURL({format: 'png', dynamic: true, size: 2048})})`)   
   .addField('¿Es un bot?', `${user.bot ? "Si" : "No"}`)
   .addField('Creó su cuenta el',`${user.createdAt.toLocaleString()}`)
   .addField('Presencia:', `Jugando a: ${user.presence.activities[0].name === "CUSTOM_STATUS" ? user.presence.activities[0].name : 'No está jugando a nada.'}\nEstado personalizado: ${user.presence.activities[0].name === 'Custom Status' ? user.presence.activities[0].state : "Ninguno"}`)
   //.addField('Estado personalizado:', )  
  .addField('Permisos', `\`\`\`css\n${message.guild.member(user).permissions.toArray().join(', ')}\`\`\``)//lel
  message.channel.send(embed)
}

exports.config = {
  "category": "utilidad",
  "name": "userinfo",
  "description": "Muestra la informacion de un usuario",
  "usage": "userinfo [mencion]",
  "alias": ["userinfo","user"]
};
// Creditos Derky, g4lvatron, ILuck