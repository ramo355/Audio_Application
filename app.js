// * NPM Module dependencies.
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
// const multer = require('multer');
const File = require("./models/File");

//App Config
const config = require("config");
const app = express();
const PORT = config.get("port");


//Middlewares
app.use(express.json({extended: true}))
app.use(cors())
//API Endpoints

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.post("/download", (req, res) => {
  const db = req.body;

  File.create(db, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/download", (req, res) => {
  File.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listener
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
