const Discord = require('discord.js')
exports.run = async (client, message, args) => { 

  const comandos = global.botCommands.map(m=> m.config.name)
    const embudo = new Discord.MessageEmbed()
  .setTitle('Comando de ayuda')
  .setDescription('Soy un bot multifunciones o.0, cuento con ' + global.botCommands.size + ' comandos')
  .addField('Comandos del bot', comandos.join(' '))
  .setColor('RANDOM')
        const cd = args.join(' ')
        if(!cd) return message.channel.send(embudo)
      const prefix = 'r!'
     const a = global.botCommands.get(cd) || global.botCommands.find(e => e.config.alias && e.config.alias.includes(cd.toLowerCase()));
    if(!a) return message.channel.send(embudo)
    const desc = a.config.description
    const aliaspush = a.config.alias 
    const usages = a.config.usage  
    const emb = new Discord.MessageEmbed()
    .setTitle('Comando ' + a.config.name)
    .addField('Descripcion', desc)
    .addField('Alias', aliaspush.join(', ') + '_ _') 
    .addField('Uso ', prefix + usages) 
    .setColor('RANDOM')
    .setFooter('[] Es obligatorio y <> es opcional recuerda no incluirlos en el comando')
    message.channel.send(emb)
    }
exports.config = {
 "name":"help",
  "description": "Comando de ayuda base",
  "usage": "help <comando>",
  "alias": ["help","h", "ayuda"]
};
/* notas
aqui
embudo :V




*/