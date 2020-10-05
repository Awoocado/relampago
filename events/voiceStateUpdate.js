module.exports.run = async (client, oldState, newState) => {
  const serverQueue = newState.guild.queue; 
  if (!serverQueue) return;
  if (!serverQueue.voiceChannel || !serverQueue.textChannel) return;
  if (serverQueue.voiceChannel.members.filter(e => !e.user.bot).size < 1 && (newState.member.id === client.user.id ? (newState.channel.members.filter(e => !e.user.bot).size < 1) : true)) {
    serverQueue.voiceChannel.leave();
    newState.guild.queue = null;
    return;
  }
  if (!newState.member) return;
  if (newState.member.id !== client.user.id) return;
  if (!newState.channel && serverQueue) {
    newState.guild.queue = null;
    return;
  }
  if (
    newState.channel &&
    serverQueue.voiceChannel &&
    serverQueue.voiceChannel.id !== newState.channelID
  ) {
    serverQueue.voiceChannel = newState.channel;
    return;
  }
}; 