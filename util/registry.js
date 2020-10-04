const { Collection } = require("discord.js");
const fs = require("fs");
const path = require("path");
const getAllFiles = (d, a = []) => {fs.readdirSync(path.join(__dirname, d)).filter(e => fs.lstatSync(path.join(__dirname, d, e)).isDirectory() || (e.endsWith(".js") || e.endsWith(".cjs"))).forEach(f => fs.lstatSync(path.join(__dirname, d, f)).isDirectory() ? (a = getAllFiles(`${d}/${f}`, a)) : a.push(path.join(__dirname, d, "/", f)));return a;};

function registerStructures(Discord, dir) {
  for (const e of getAllFiles(dir)) {
    const p = path.basename(e, ".js");
    try {
      let run = require(e);
      Discord.Structures.extend(p, run);
    } catch (err) {
      global.webhook.send(`Estructura ${p} no funciona: ${err}`);
      console.error(`Estructura ${p} no funciona: ${err}`);
    }
  }
}

function registerCommands(dir) {
  global.botCommands = new Collection();
  for (const c of getAllFiles(dir)) {
    const e = path.basename(c, ".js");
    try {
      const p = require(c);
      global.botCommands.set(p.config.name, p);
    } catch (err) {
      global.webhook.send(`Comando ${e} no funciona: ${err}"`);
      console.error(`Comando ${e} no funciona: ${err}"`);
    }
  }
}

function registerEvents(client, dir) {
  for (const e of getAllFiles(dir)) {
    const p = path.basename(e, ".js");
    try {
      let run = require(e).run.bind(null, client);
      client.on(p, run);
    } catch (err) {
      global.webhook.send(`Evento ${p} no funciona: ${err}`);
      console.error(`Evento ${p} no funciona: ${err}`);
    }
  }
}

module.exports = {
  registerStructures,
  registerCommands,
  registerEvents
};
