const Discord = require('discord.js');
exports.run = (client, message, args) =>{
  let user = message.mentions.users.first() || message.author;
  
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
   const embed = new Discord.MessageEmbed()
   .setTimestamp()
   .setColor(color[user.presence.status])
   .addField('Estado:', estados[user.presence.status])
   .addField('Username', user.username)//hola salu3 xd
   .addField('Discriminator', user.discriminator)
   .addField('ID', user.id)//entonces? xq hacne esssage.gui;d.member.user.roles.cahce.izefnvj.rgvrjmrthbytj.rtvrt
   .addField('Roles', message.guild.member(user).roles.cache.size >= 2 ? message.guild.member(user).roles.cache.filter(a=>a.name !== `@everyone`).map(a => a).join("\n") : "No tiene roles")
  .addField("Flags", user.flags.toArray().length ? user.flags.toArray().map(a=>flagemojis[a]).join(', ') : "No tiene")
   .addField('Jugando a:', user.presence.activities[0] ? user.presence.activities[0].state : 'No esta jugando a nada.')
  message.channel.send(embed)
}

exports.config = {
  "name": "userinfo",
  "description": "Muestra la informacion de un usuario",
  "usage": "userinfo [mencion]",
  "alias": ["userinfo","user"]
};
//creditos Derky, g4lvatron
// Creditos a ILuck por todos los emojis lpm
//creditos G4 por poner el estado streaming :WeirdButOkay: