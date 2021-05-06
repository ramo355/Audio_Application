const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "track");
  }, //куда склыдваем файлы
  filename(req, file, cb) {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  }, // название файлов
}); // куда и как сохранять файлы, которые в дальнейшем сохраняем на сервер

const allowedTypes = ["audio/mpeg3", "audio/mpeg", "audio/mp3", "audio/wav", "audio/x-mpeg-3"];

const fileFilter = (req, file, cb) => {
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}; // валидация файлов

module.exports = multer ({
    storage,
    limits: { fields: 1, fileSize: 9000000, files: 1, parts: 2 },
    fileFilter
})
