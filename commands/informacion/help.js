const Discord = require('discord.js')
exports.run = async (client, message, args) => { 
const comandos = global.botCommands.map(m=> m.config.name)
const infocd = global.botCommands.filter(a=> a.config.category === "informacion").map(a => `${a.config.name}`)
const funcd = global.botCommands.filter(a=> a.config.category === "diversion").map(a => `${a.config.name}`)
const utilcd = global.botCommands.filter(a=> a.config.category === "utilidad").map(a => `${a.config.name}`)
const musiccd = global.botCommands.filter(a=> a.config.category === "musica").map(a => `${a.config.name}`)
const configcd = global.botCommands.filter(a=> a.config.category === "configuracion").map(a => `${a.config.name}`)

  
  
  
  
  
    const embudo = new Discord.MessageEmbed()
  .setTitle('Comando de ayuda')
  .setDescription('Soy un bot multifunciones o.0, cuento con ' + global.botCommands.size + ' comandos')
  .addField('Informacion', infocd.join(' '))
  .addField('Diversion', funcd.join(' '))
  .addField('Utilidad', utilcd.join(' '))
  .addField('Musica', musiccd.join(' '))
  .addField('Configuracion', configcd.join(' '))    
  .setColor('RANDOM')
    
  const cd = args.join(' ').toLowerCase()
  if(!cd) return message.channel.send(embudo)
  const prefix = 'r!' 
  const a = global.botCommands.get(cd) || global.botCommands.find(e => e.config.alias && e.config.alias.includes(cd.toLowerCase()));
  const b = global.botCommands.find(e => e.config.category && e.config.category.includes(cd.toLowerCase()));
    if(a) { 
    const desc = a.config.description
    const aliaspush = a.config.alias 
    const usages = a.config.usage  
    let aliasname = aliaspush.join(' ').replace(a.config.name, '')
    let aliases = a.config.name+ ' ' +aliasname
    let thecategory = a.config.category.replace('musica', 'Musica').replace('informacion', 'Informacion').replace('diversion', 'Diversion').replace('devs', 'Desarolladores').replace('utilidad', 'Utilidad')
    const emb = new Discord.MessageEmbed()
    .setTitle('Comando ' + a.config.name)
    .addField('Descripcion', desc)
    .addField('Categoria', thecategory)
    .addField('Alias', aliases)
    .addField('Uso ', prefix + usages) 
    .setColor('RANDOM')
    .setFooter('[] Es obligatorio y <> es opcional recuerda no incluirlos en el comando')
    message.channel.send(emb)
    } else 
      if(b) {
        const ctd = global.botCommands.filter(a=> a.config.category === cd).map(a => `${a.config.name}`)
        const emb = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Categoria ' + cd)
        .setDescription('```' + ctd.join(' ') + '```')
        message.channel.send(emb)
      }
  else
      message.channel.send(embudo)
    }
exports.config = {
 "category": "informacion",
 "name":"help",
  "description": "Comando de ayuda base",
  "usage": "help <comando>",
  "alias": ["help","h", "ayuda", "listacomandos", "comandos"]
};
/*Creditos:
IlUCK*/