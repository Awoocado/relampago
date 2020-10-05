exports.run = client => {
  
  //Server para la pagina web en 1 linea porque yes
  require("http").createServer((req, res) => res.end("Awoo, no Owo")).listen(process.env.PORT);

  //Logs
  console.log(`${client.user.tag} está listo!`);
  //webhook por monoverde😎
  //global.webhook.send(`${client.user.tag} está listo!`);
  //Mucho spam
  //Presencias
  setInterval(function() {
    let sta2s = [
      "r!help | Ejecuta este comando.",
      "Soy el mejor bot del mundo 😎",
      "Desarrollando comandos 😎",
      "El barrio me respalda 😎"
    ];
    let status = sta2s[Math.floor(Math.random() * sta2s.length)];
    client.user.setPresence({
      status: "idle",
      activity: {
        name: `${status}`,
        type: "WATCHING"
      }
    });
  }, 30000);
};
