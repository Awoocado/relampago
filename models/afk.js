const mongoose = require('mongoose');

const sch = new mongoose.Schema({
  userID: { type: String, required: true },
  afk: { type: String, default: ""}
})

module.exports = mongoose.model("afk", sch);