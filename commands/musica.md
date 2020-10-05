# Usando `message.guild.queue`
Sería lo mismo que usar client.queue.get sólo que esta vez será por server
```js
const serverQueue = message.guild.queue;
if(!serverQueue) //crear
else //pushear
```
## Para eliminar el queue
```js
message.guild.queue = null;
```

# discord-ytdl-core

## Obtener video

```js
const ytdl = require("discord-ytdl-core");
const video = await ytdl.getBasicInfo(
  "https://www.youtube.com/watch?v=zYYf-IFTPfw"
);
return video;
//videoDetails, creo que eso ya saben ustedes
```

## ReadableStream

```js
const link = "https://www.youtube.com/watch?v=zYYf-IFTPfw";
const stream = ytdl(link, {
  opusEncoded: true, //Discord
  filter: "audioonly", //Sólo audio
  highWaterMark: 1 << 25 //Bug de Node 12
});

return stream; //Este stream lo pasarán a <VoiceConnection>.play(<aquí>, { type: "opus" })
```

# ytsr

```js
const ytsr = require("ytsr");
const filters = await ytsr.getFilters("wubbzy"); //Buscamos
let filter = filters.get("Type").find(o => o.name === "Video"); // Sólo videos
let options = {
  safeSearch: true, //niños
  limit: 1, //Sólo 1 video (?
  nextpageRef: filter.ref //Filtro
};
const searchResults = await ytsr(null, options);
return searchResults.items[0]; //=D
```

---

Hecho por AndreMor
