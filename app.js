// NPM Module dependencies.
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // to allow different domains
const fileMiddleware = require("./middleware/file");

// Models
const register = require("./routes/register");
const auth = require("./routes/auth");
const profile = require("./routes/profile");

// App Config
const config = require("config");
const app = express();
const PORT = config.get("port");

// Middlewares
app.use(cors());
app.use(fileMiddleware.single("avatar"));
app.use("/uploads", express.static("uploads"));// use uploads folder to save image
app.use(express.json({ extended: true }));

// Registration routes
app.post("/register", register);
app.post("/auth", auth);
app.post("/profile/:id", profile);
app.get("/profile/:id", profile);

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
