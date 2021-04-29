const { Schema, model, Types } = require("mongoose");

const user = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatarUrl: String,
  name: String,
  playlist: [
    {
      audioId: Schema.Types.ObjectId,
      // ref: 'Audio',
    },
  ],
});

module.exports = model("User", user);
