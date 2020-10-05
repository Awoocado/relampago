const ILUCK = require('discord.js');
exports.run = (client, message, args) => {
  let regiones = {
     'us-west': ':flag_us: Costa Oeste de los Estados Unidos',
        'us-east': ':flag_us: Costa Este de los Estados Unidos',
        'us-central': ':flag_us: Centro de Estados Unidos ',
        'us-south': 'flag_us: Sur de Estados Unidos',
        'singapore': ':flag_si: Singapur', 
        'southafrica': ':flag_za: Sudáfrica',
        'sydney':':flag_hm: Sidney',
        'europe': ':flag_eu: Europa',
        'brazil': ':flag_br: Brazil',
        'hongkong': ':flag_hk: Hong Kong',
        'russia': ':flag_ru: Rusia',
        'japan': ':flag_jp: Japan',
        'india': ':flag_in: India'
  }
  let embed = new ILUCK.MessageEmbed()
  .setTimestamp()//xdxdx
  .setColor(0xff0000) // asd
  .setAuthor(message.guild.name, message.guild.iconURL({dynamic: true}))
  .addField('Nombre:', message.guild.name) 
  .addField('Creador', message.guild.owner.user.toString())
 .addField('Región:', `${regiones[message.guild.region]}`)
  .addField('Roles', message.guild.roles.cache.size >= 2 ?message.guild.roles.cache.filter(a=>a.name !== '@everyone').map(a => `<@&${a.id}>`) : 'No hay roles!', true)
  .addField("Estadísticas", `👤 | Humanos: ${message.guild.members.cache.filter(a => !a.bot).size} \n🤖 | Bots ${message.guild.members.cache.filter(a=> a.bot).size + 1}`, true)
  .addField('Canales', `💬 | Texto: ${message.guild.channels.cache.filter(a => a.type === "text").size.toLocaleString()}\n🔊 | Voz: ${message.guild.channels.cache.filter(x => x.type === 'voice').size.toLocaleString()}`, true)
  .addField('Emojis', `${message.guild.emojis.cache.map(x => x.toString()).join(', ')}`)
  .setThumbnail(message.guild.iconURL())
  message.channel.send({embed: embed});
};

exports.config = {
  "category": "utilidad",
  "name": "serverinfo",
  "description": "Muestra informacion del servidor actual",
  "usage": "serverinfo",
  "alias": ["serverinfo","server"]
};