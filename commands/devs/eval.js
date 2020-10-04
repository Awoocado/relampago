const Discord = require('discord.js');
exports.run = async(client, message, args) =>{
  //yes
  let array = ["675458551032053788", "475050961354752018","224619540263337984","507367752391196682","455823766669230081","473607082654957571","577000793094488085","609400500919599135","480150454584475661","322809311640289281"] 
  if(!array.includes(message.author.id)) return; 
  if(!args[0]) return message.channel.send(":x: | Debes colocar algo para evaluarlo.");
  if(args[0] == "config.token") return message.channel.send("No permitido.")
  if(args[0] == "process.ENV.token") return message.channel.send("Te pillamos pos compadre") && client.webhook.send(`${message.author.tag} (${message.author.id}) trato de conseguir el token en el servidor con la id ${message.guild.id} en el canal con la id ${message.channel.id}`)
 let limit = 1950;
        try {
            let code = args.join(" ");
            let evalued = await eval(`(async() => {${code}})()`);
            let asd = typeof (evalued)
            evalued = require("util").inspect(evalued, { depth: 0 });
            let txt = "" + evalued;
            let limit = 1999
            if (txt.length > limit) return message.channel.send(':x: | Evaluación mayor a 1999 caracteres!')
            let embed = new Discord.MessageEmbed()
                .setTitle(`Eval`)
                .addField(`Entrada`, `\`\`\`js\n${code}\`\`\``)
                .addField(`Salida`, `\`\`\`js\n${evalued}\n\`\`\``.replace(client.token, "Hey que intentas?"))
                .addField(`Tipo`, `\`\`\`js\n${asd}\`\`\``.replace("number", "Number").replace("object", "Object").replace("string", "String").replace(undefined, "Undefined").replace("boolean", "Boolean").replace("function", "Function"))
                .setColor(0xff0000)
                .setTimestamp()
            message.channel.send({ embed: embed })
        } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`js\n${err}\n\`\`\``)
        };
}

exports.config = {
  "name": "eval",
  "description": "Evalua un codigo en js",
  "usage": "eval [code]",
  "alias": ["eval","e"]
};
//Creditos: G4lvatron(Lil MARCROCK22)