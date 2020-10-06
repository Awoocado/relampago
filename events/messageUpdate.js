exports.run = async (client, oldMessage, newMessage) => {
  if (oldMessage.partial || newMessage.partial) return;
  if (newMessage.author.bot) return;
  if (!newMessage.guild) return;
  if (oldMessage.content === newMessage.content) return;
  if (newMessage.createdAt.getTime() < new Date(Date.now() - 120000)) return;
  client.emit("message", newMessage);
};
