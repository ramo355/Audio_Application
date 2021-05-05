const { Schema, model, Types } = require("mongoose");

const audio = new Schema({
  name: String,
  description: String,
  avatarUrl: String,
  genre: String,
  link: String,
});

module.exports = model("Audio", audio);
