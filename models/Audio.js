const { Schema, model, Types } = require("mongoose");

const audio = new Schema({
  audio: String,
  name: String,
  description: String,
  audioImage: String,
  genre: String,
});

module.exports = model("Audio", audio);
