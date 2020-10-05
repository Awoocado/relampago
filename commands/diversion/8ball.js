const Discord = require('discord.js')
exports.run = async (client, message, args) => {
  
  if(!args[0]){
    return message.channel.send('Asegúrate de colocar una pregunta')
  }

let respuestas = [
  "Probablemente",
  "Quizás",
  "Tal vez",
  "Puede ser",
  "No lo sé, pregúntale a otra persona",
  "No tengo una respuesta para tu pregunta",
  "Desconozco completamente su pregunta",
  "Memoria RAM al maximo, capacidad para procesar respuesta: 0" //XD // mames xd //JAJAJA
]
let pregunta = args.join(' ')

let randomres = respuestas[Math.floor(Math.random() * respuestas.length)]

const embed = new Discord.MessageEmbed()
.setTitle('🎱 8ball')
.setDescription(`${message.author.tag} realizó una pregunta.`)
.addField('Pregunta :', `${pregunta}`)
.addField('Respuesta:', `${randomres}`)
.setColor('RANDOM')
message.channel.send(embed)

}

exports.config = {
 "category": "diversion",  
    "name": "8ball",
    "description": "Respuestas random a preguntas de usuarios",
    "usage": "8ball [pregunta]", 
    "alias": ["8bola", "8pelota", "ochoball", "ochopelota", "ochobola"]
}