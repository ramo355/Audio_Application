const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads");
  }, //куда склыдваем файлы
  filename(req, file, cb) {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  }, // название файлов
}); // куда и как сохранять файлы, которые в дальнейшем сохраняем на сервер

const allowedTypes = ["image/png", "image/jpg", "image/jpeg"];

const fileFilter = (req, file, cb) => {
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}; // валидация файлов

module.exports = multer ({
    storage, fileFilter
})
