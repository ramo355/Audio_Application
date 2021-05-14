// NPM Module dependencies.
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // to allow different domains
const fileMiddleware = require("./middleware/file");
// const audioMiddleware = require("./middleware/audio");

// Models
const register = require("./routes/register");
const auth = require("./routes/auth");
const profile = require("./routes/profile");
const audio = require("./routes/audio");
const track = require("./routes/track");

// App Config
const config = require("config");
const app = express();
const PORT = config.get("port");

// Middlewares
app.use(cors());
app.use(fileMiddleware.any());
// app.use(audioMiddleware.single("track"));
app.use("/uploads", express.static("uploads")); // use uploads folder to save image
app.use("/track", express.static("track")); // use uploads folder to save music
app.use("/images", express.static("images")); // use uploads folder to save images for music
app.use(express.json({ extended: true }));

// Registration routes
app.post("/register", register);
app.post("/auth", auth);
app.post("/profile/:id", profile);
app.post("/track", audio);
app.get("/profile/:id", profile);
app.get("/track", track);

// Listener
async function start() {
  try {
    await mongoose.connect(config.get("mongoURI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => {
      console.log(`App is started on PORT ${PORT}`);
    }); // запуск сервера после того, как произойдет соединение с БД
  } catch (e) {
    console.log("Server error", e.message);
    process.exit(1); // завершим процесс в случае, если что-то пошло не так
  }
}
start();
