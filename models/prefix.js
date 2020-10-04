const mongoose = require('mongoose');

const sch = new mongoose.Schema({
  guildID: { type: String, required: true },
  prefix: { type: String, default: "r!" }
})

module.exports = mongoose.model("prefix", sch);