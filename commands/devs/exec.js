const exec = require("util").promisify(require("child_process").exec),
  { Util } = require("discord.js");
exports.run = async (client, message, args) => {
  let array = ["675458551032053788","475050961354752018","224619540263337984","507367752391196682","455823766669230081","473607082654957571","577000793094488085","609400500919599135","480150454584475661", "322809311640289281"];
  if (!array.includes(message.author.id)) return;
  if(!args[0]) return message.channel.send(":x: | Debes colocar alguna funcion para ejecutarla en la consola.");
  try {
    const { stdout, stderr } = await exec(args.join(" "));
    if (!stdout && !stderr)
      return message.channel.send("Comando ejecutado correctamente pero no hay salida.");
    if (stdout) {
      const text = Util.splitMessage(stdout, { maxLength: 1950 });
      await message.channel.send(text[0], { code: "sh" });
    }
    if (stderr) {
      const text = Util.splitMessage(stderr, { maxLength: 1950 });
      await message.channel.send(text[0], { code: "sh" });
    }
  } catch (error) {
    const text = Util.splitMessage(error.toString(), { maxLength: 1950 });
    await message.channel.send(text[0], { code: "sh" });
  }
};
exports.config = {
  "category": "dev",
  "name": "execute",
  "description": "Ejecuta un comando en la consola",
  "usage": "execute [comando]",
  "alias": ["execute","exec", "ex"]
};
