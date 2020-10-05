exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Usted no es un administrador para hacer esto!!")
  if(!args[0]) return message.reply(":x: | Debe mencionar algun prefix.")
  let prefix = await message.guild.setPrefix(args[0])
  await message.channel.send("Listo, prefix establecido a `" + prefix +"`");
}

exports.config = {
  "category": "configuracion",
  "name": "setprefix",
  "description": "Establece un prefix para el servidor",
  "usage": "setprefix",
  "alias": ["setprefix"]
};