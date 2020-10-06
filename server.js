'use strict';
//Base de datos

require("./database.js").then(() => console.log("[MONGODB]: Conectado a MongoDB")).catch((err) => console.log('[MONGODB]: Error conectandose a MongoDB\nError: '+err));

//Carga de estructuras, comandos y eventos
const { registerStructures, registerCommands, registerEvents } = require("./util/registry.js");

//Empezando a cargar la librería
const Discord = require("discord.js");

//Estructuras extendidas
registerStructures(Discord, "../structures");

//Asignando webhook a la variable global
global.webhook = new Discord.WebhookClient(process.env.WEBHOOKID, process.env.WEBHOOKTOKEN, { allowedMentions: { parse: [] } });

//Cliente de Discord
const client = new Discord.Client({ allowedMentions: { parse: [] }, ws: { intents: Discord.Intents.ALL } });

//Los eventos son per cliente
registerEvents(client, "../events");

//Los comandos 1 sola instancia
registerCommands("../commands");

//Iniciar sesión
client.login();

//Eventos para el proceso
process.on("unhandledRejection", e => {
  global.webhook.send("Promesa denegada sin manejar: " + e);
  console.error("Promesa denegada sin manejar:", e);
});
process.on("uncaughtException", async e => {
  client.destroy();
  await global.webhook.send("Excepción sin capturar. Cerrando bot. Error: " + e)
  console.error("Excepción sin capturar. Cerrando bot. Error:", e);
  process.exit(1);
});

//Funciones de MONGODB
//mogolicodb*
global.getData = async ({ ...find }, model) => {
    const { readdir } = require("fs").promises;
    const db_files = await readdir(require("path").join(__dirname, "./models/"));
    const available_models = db_files.map(elem => elem.endsWith("js") ? elem.slice(0, -3) : elem);
    if (!available_models.includes(model)) return console.log('[GET_DATA]: Modelo no encontrado!')
    let db = require('./models/' + model + '.js');
    return db.findOne(find);
}
global.updateData = async ({ ...find }, { ...newValue }, { ...newObject }, model) => {
    const { readdir } = require("fs").promises;
    const db_files = await readdir(require("path").join(__dirname, "./models/"));    const available_models = db_files.map(elem => elem.endsWith("js") ? elem.slice(0, -3) : elem);
    if (!available_models.includes(model)) return console.log('[UPDATE_DATA]: Modelo no encontrado!')
    let db = require('./models/' + model + '.js');
    let getModel = await db.findOneAndUpdate(find, newValue);
    if (!getModel) getModel = await db.create(newObject);
    return getModel;
};

/*

  Funciones: G4lvatron (Lil MARCROCK22)
  
  Ajustadas por: AndreMor (AndreMor)

*/1