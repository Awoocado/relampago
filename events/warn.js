exports.run = (client, w) => {
  function code(code) {
  if(!code) throw new TypeError("No has puesto el codigo idiota")
  return "```js" + code +"```";
}

  global.webhook.send(code(w))
  console.warn(w);
}