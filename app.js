// NPM Module dependencies.
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileMiddleware = require('./middleware/file');

// Models
const User = require("./models/User");
const register = require("./routes/register");
const auth = require("./routes/auth");
const profile = require('./routes/profile')

// App Config
const config = require("config");
const app = express();
const PORT = config.get("port");

// Middlewares
app.use(express.json({ extended: true }));
app.use(cors());
app.use(fileMiddleware.single('avatar'))
// Registration routes
app.post("/register", register);
app.post("/auth", auth);
app.post('/profile', profile);

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
