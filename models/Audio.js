const { Schema, model, Types } = require("mongoose");

const audio = new Schema({
  audio: String,
  name: String,
  description: String,
  audioImage: String,
  genre: String,
  like: Number,
  comments: []
},
{ collection: "audios" }
);

module.exports = model("Audio", audio);
