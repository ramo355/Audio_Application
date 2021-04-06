const express = require("express"); // - подключаем express
const config = require("config");
const mongoose = require("mongoose");

const app = express(); // - создаем сервер


// app.use('/api/auth', require('./routes/auth'))

const PORT = config.get("port") || 5000;

async function start() {
  try {
    await mongoose.connect(config.get("mongoURI"), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
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
