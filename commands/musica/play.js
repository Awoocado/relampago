//ytsr nos permite buscar en YouTube
const ytsr = require('ytsr');
//Para obtener el .webm más cercano del video y skip FFMPEG
const ytdl = require('discord-ytdl-core');
const ILUCK = require('discord.js')
exports.run = async (client, message, args) => {
  //Canal de voz
  const vc = message.member.voice.channel;
  //Fallback de permisos y de que si no está en el canal
  if (!vc) return message.channel.send("Únete al canal de voz donde quieras que reproduzca música");
  if (!vc.permissionsFor(client.user.id).has(["VIEW_CHANNEL", "CONNECT", "SPEAK"])) return message.channel.send("Dame permisos al menos!");

  //No canales AFK
  if (message.guild.afkChannelID === vc.id) return message.channel.send("No puedes hacer eso en un canal AFK");
  //Queue del servidor
  const serverQueue = message.guild.queue;
  //Si ya hay queue y no está en el mismo canal de voz que el queue, regresar
  if (serverQueue && (serverQueue.voiceChannel.id !== vc.id)) return message.channel.send("Estoy en otro canal de voz de este servidor.");
  //Qué video será?
  const source = args.join(" ");
  // Un video al menos 
  if(!source) return message.reply('qué video busco?')
  if (ytdl.validateURL(source)) {
    //Si es un link, poner dicho link como canción "parcial" (handle: true)
    await handleServerQueue(serverQueue, message.channel, vc, [{ url: source, requestedBy: message.author, handle: true }]);
  } else if (ytdl.validateID(source)) {
    //Lo mismo con la ID
    await handleServerQueue(serverQueue, message.channel, vc, [{ url: `https://www.youtube.com/watch?v=${source}`, handle: true, requestedBy: message.author }]);
  } else {
    //Obtenemos los filtros que hay cuando buscamos `source`
    const filters = await ytsr.getFilters(source);
    //Sólo videos
    let filter = filters.get("Type").find(o => o.name === "Video");
    //Modo restringido activado, sólo 1 canción
    let options = {
      safeSearch: true,
      limit: 1,
      nextpageRef: filter.ref
    };
    //Con las opciones y el referente, volver a buscar
    const searchResults = await ytsr(null, options);
    //Verificamos =D
    if (searchResults && searchResults.items[0]) {
      //ytsr nos da ya de por si algunos metadatos de video, entonces lo consideramos canción "completa"
      await handleServerQueue(serverQueue, message.channel, vc, [{ url: searchResults.items[0].link, title: searchResults.items[0].title, age_restricted: false, requestedBy: message.author }]);
    }
  }
};

/**
 * Buscar metadatos del video. No usar si otra API ya les está dando los metadatos
 * @param {Object} partialsong - Canción lista para ser rellenada
 * @returns {Promise<Object>} - La canción completa lista para ser pusheada
 */

async function handleVideo(partialsong) {
  const songInfo = await ytdl.getBasicInfo(partialsong);
  const song = {
    title: songInfo.videoDetails.title,
    url: songInfo.videoDetails.video_url,
    age_restricted: songInfo.videoDetails.age_restricted,
    requestedBy: partialsong.requestedBy
  };

  return song;
}

//songs es un array esto para poder soportar y combinar playlists, que vendría pronto
/**
 * 
 * @param {Object|null} serverQueue - El queue del servidor a manejar
 * @param {ILUCK.textChannel} textChannel - Canal de texto 
 * @param {ILUCK.voiceChannel} voiceChannel - Canal de voz
 * @param {Object[]} songs - Array de canciones a pushear
 * @returns {Promise<void>} - PARA QUE RETORNAR ALGO?
 */
async function handleServerQueue(serverQueue, textChannel, voiceChannel, songs) {
  //Por cada canción
  for (let i in songs) {
    //Si la canción es parcial obtener sus metadatos
    if (songs[i].handle) songs[i] = await handleVideo(songs[i]);
    else continue;
  }
  //Si no hay serverQueue entonces crear uno =D
  if (!serverQueue) {
    //Estructura de la cola
    voiceChannel.guild.queue = {
      textChannel,
      voiceChannel,
      connection: null,
      songs,
      volume: 1.3
    }
    //Conectarnos para recibir la conexión y a reproducir!
    try {
      voiceChannel.guild.queue.connection = await voiceChannel.join();
      play(voiceChannel.guild, voiceChannel.guild.queue.songs[0]);
    } catch (err) {
      //Cualquier error aquí
      voiceChannel.leave();
      voiceChannel.guild.queue = null;
      textChannel.send("Error: " + err);
    }
  } else {
    //Comnbinar el array de canciones
    serverQueue.songs = serverQueue.songs.concat(songs);
    textChannel.send('✅ Añadido a la cola')
    //textChannel.send("se añadio a la cola")

  }
  textChannel.stopTyping(true);
}

/**
 * 
 * @param {ILUCK.Guild} guild Servidor donde se reproducirá
 * @param {Object} song Canción completa a reproducir
 * @returns {void} Nada que esto deba retornar
 */
function play(guild, song) {
  //Queue del servidor
  const serverQueue = guild.queue;
  //Si no hay canción salir y blanquear el queue
  if (!song) {
    serverQueue.voiceChannel.leave();
    guild.queue = null;
    return;
  }
  try {
    //Creamos nuestro WritableStream. Escribimos el stream que nos da YouTube. Siempre en Opus, sólo audio.
    const connection = serverQueue.connection.play(ytdl(song.url, { opusEncoded: true, highWaterMark: 1 << 25, filter: "audioonly" }), { type: "opus", volume: serverQueue.volume });
    connection.on("start", () => {
      //Cuando empieze
      const emb = new ILUCK.MessageEmbed()
        .setTitle(song.title)
        .setURL(song.url)
        .setColor("RANDOM")
        .setDescription(`Pedido por: ${song.requestedBy.tag}`)
        .setFooter('Reproduciendo')
      serverQueue.textChannel.send(emb)
      //serverQueue.textChannel.send("se está reproduciendo")

      console.log("Reproduciendo", song.title);
    })
    connection.on("error", (err) => {
      //Errores
      serverQueue.textChannel.send("Error: " + err);
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0])
    })
    connection.on("finish", () => {
      //Cuando termine
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0])
    })
  } catch (err) {
    //Otros errores aquí
    serverQueue.textChannel.send("Error: " + err);
    serverQueue.songs.shift();
    play(guild, serverQueue.songs[0])
  }
}
exports.config = {
  category: "musica",
  name: "play",
  description: "Busca música para despues reproducirla",
  usage: "play [ link | nombre ]",
  alias: ["p", "reproducir"]
};
/* Creditos
- Andremor#0008 Estructura del modulo de musica
*/

//=D