const Discord = require("discord.js")

exports.run = async (client,message,args) => {
  if(!args[0]) return message.reply("Debes escribir una encuesta!");
  
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor("Encuesta!")
  .setDescription(args.join(" "))
  
  const m = await message.channel.send(embed)
  await m.react("✅")
  await m.react("❌")
  setTimeout(() => {
    let check = m.reactions.cache.get("✅").count
    let error = m.reactions.cache.get("❌").count
    if(check + error <= 2){
      return m.edit(`No reaccionarion suficientes personas`, { embed: null })
  }
    let embed2 = new Discord.MessageEmbed()
  .setDescription("Votos finalizados")
  .addField("✅", check-1)
  .addField("❌¸", error-1)
  if(check === error) {
    embed2.addField("Empate", "** **")
  }else{
  embed2.addField("Ganador", check > error ? "✅" : "❌")
  }
    m.edit(embed2)
  }, 5000);
}


exports.config = {
"category": "utilidad",
  "name": "poll",
  "description": "Crea una encuesta de si o no",
  "usage": "poll [pregunta]",
  "alias": ["poll","encuesta"]
};