exports.run = client => {
  console.log(`${client.user.tag} está listo!`);
  global.webhook.send(`${client.user.tag} está listo!`);
  let sta2s = [
"r!help",
"tiembla Gidget 😎",
    "al rubius",
"jamon gas",
    " a AndreMor bañarse"
  ];

  setInterval(function() {
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
