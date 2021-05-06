const multer = require("multer");

const allowedTypes = [
  "image/png",
  "image/jpg",
  "image/jpeg",
  "audio/mpeg3",
  "audio/mpeg",
  "audio/mp3",
  "audio/wav",
  "audio/x-mpeg-3",
];

const storage = multer.diskStorage({
  destination(req, file, cb) {
    if (file.mimetype === "audio/mpeg") {
      cb(null, "track");
    }
    if (req.body.profile === 'profile' && 
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, "uploads");
    }
      
    if (!req.body.profile &&
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
    ) {
      cb(null, "images");
    }
  }, //куда склыдваем файлы
  filename(req, file, cb) {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  }, // название файлов
}); // куда и как сохранять файлы, которые в дальнейшем сохраняем на сервер

const fileFilter = (req, file, cb) => {
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}; // валидация файлов

module.exports = multer({
  storage,
  fileFilter,
});
