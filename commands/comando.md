# Estructura de los comandos

> Por hacer: Que el nombre y categorías sean detectadas por FS automáticamente

## Plantilla 1
```js
const Discord = require("discord.js")
exports.run = async (client, message, args) => {
  //Código
};

exports.config = {
   "category": "categoria", // Esta depende de su carpeta 
    "name": "nombre",
    "description": "info",
    "usage": "uso",
    "alias": ["alias"]
};
```
## Plantilla 2
```js
module.exports = {
  run: async (client, message, args) => {
    //Código
  },
  config: {
    "category": "categoria", // Esta depende de su carpeta 
    "name": "nombre",
    "description": "info",
    "usage": "uso",
    "alias": ["alias"]
  }
};
```
## Creditos
Plantilla: ILuck

Fs: AndreMor