# Estructura de los comandos**
## Primer método
```
exports.run = async (client, message, args) => {
  //Código
}

exports.config = {
  name: "nombre",
  description: "info",
  usage: "uso",
  alias: ["alias"]
}
```
Segundo método*
```
module.exports = {
  run: async (client, message, args) => {
  //Código
  },
  config: {
    name: "nombre",
    description: "info",
    usage: "uso",
    alias: ["alias"]
  }
}
```