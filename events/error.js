exports.run = (client, e) => {
  global.webhook.send(e, {code: 'js'})
  console.error(e);
}