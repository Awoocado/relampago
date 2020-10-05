
exports.run = async (client, message) => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.channel.permissionsFor(message.member).has("SEND_MESSAGES")) return;
  //copia de UB3R
  message.channel.messages.fetch({ limit: 3 }).then(m => {
    let a = [...m.values()].filter(E => !E.author.bot && E.content);
    let e = [...m.values()].filter(E => !E.author.bot && E.content);

    if (!a[2]) return;

    if (a[0].content.toLowerCase() === a[1].content.toLowerCase() && a[1].content.toLowerCase() === a[2].content.toLowerCase() && e[0].author.id !== e[1].author.id && e[1].author.id !== e[2].author.id && e[0].author.id !== e[2].author.id) {
      message.channel.send(a[2].content);
    }
  });
  const afkme = await message.author.tieneAFK()
  { 
    if(afkme === "true") {
    message.channel.send(message.author.tag + ' He removido tu afk')
      message.author.resetAFK()
    }
  }

  const prefix = message.guild.cache.prefix ? message.guild.prefix : await message.guild.getPrefix();
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).split(/ +/g);
  const cmdname = args.shift();
  if(!cmdname) return;
  const cmd = global.botCommands.get(cmdname.toLowerCase()) || global.botCommands.find(e => e.config.alias && e.config.alias.includes(cmdname.toLowerCase()));
  //const client_mention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  try {
    if (cmd) await cmd.run(client, message, args);
  } catch (err) {
    message.channel.send("Error: " + err).catch(err => {});
  } finally {
    message.channel.stopTyping(true);
  }
};
