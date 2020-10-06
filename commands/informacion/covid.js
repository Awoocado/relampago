const Discord = require('discord.js');
const fetch = require("node-fetch")

exports.run = (client, message, args) =>{

  let pais = args.join(' ')
  if(!pais) return message.channel.send(":x: | Coloque el nombre de un pais").then(m => m.delete({timeout: 7000})) 

  fetch(`https://corona.lmao.ninja/v2/countries/${encodeURIComponent(pais)}`).then(r=>r.json()).then(body => {

  //:ok_hand:impres
  if(body.message) return message.channel.send(":x: | Pais invalido").then(m => m.delete({timeout: 7000})) 

  
  var embed = new Discord.MessageEmbed()
  .setAuthor("Informacion sobre el Covid-19 en el pais: " + pais)
  .addField("Casos totales:", `${body.cases}`)
  .addField("Casos Criticos:", `${body.critical}`) 
  .addField("Casos de Hoy:", `${body.todayCases}`) 
  .addField("Muertes totales:", `${body.deaths}`)
  .addField("Muertes de hoy:", `${body.todayDeaths}`) 
  .addField("Personas recuperadas:", `${body.recovered}`) 
  .setColor("RANDOM")
  .setFooter("Covid-19", "https://fems-microbiology.org/wp-content/uploads/2020/03/2019-nCoV-CDC-23312_without_background-pubic-domain.png")
  message.channel.send(embed) 
  
})   
  }

exports.config = {
  "category": "informacion",
  "name": "covid",
  "description": "Muestra la informacion del Covid-19",
  "usage": "covid",
  "alias": ["c19","covid"]
}; 