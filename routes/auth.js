const { Router } = require("express"); // Подключаем роутер
const bcrypt = require("bcryptjs"); // Для шифрования пароля
const jwt = require("jsonwebtoken"); //
const config = require("config"); // Константы
const { check, validationResult } = require("express-validator"); // Для валидации авторизации
const User = require("../models/User"); // Подключил модель юзера
const router = Router();

router.post(
  "/register",
  [
    check("email", "Некоректный email").isEmail(), // Проверка почтового адреса
    check("password", "Введите корректный пароль").isLength({ min: 6 }), // Минимальная длина 6 символов
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Неккоректные данные при регистрации",
        });
      }
      const { email, password } = req.body;

      const candidate = await User.findOne({ email }); // ждем пока модель получает email

      if (candidate) {
        return res
          .status(400)
          .json({ message: "Такой пользователь уже существует" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hashedPassword }); // Создаю нового пользователя с закешированным паролем

      await user.save(); // Ждем пока юзер сохранится

      res.status(201).json({ message: "Пользователь создан" });
    } catch (e) {
      res.status(500).json({ message: "Что-то пошло не так" });
    }
  }
);
router.post(
  "/login",
  [
    check("email", "Некоректный email").normalizeEmail().isEmail(),
    check("password", "Введите пароль").exists(), // Пароль должен существовать
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Неккоректные данные при входе",
        });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email }); // Пробуем найти пользователя

      if (!user) {
        return res.status(400).json({ message: "Пользователь не найден" });
      }
      const isMatch = await bcrypt.compare(password, user.password); // Совпадают ли пароли

      if (!isMatch) {
        return res.status(400).json({ message: "Неверный пароль" });
      }

      const token = jwt.sign(
        { userId: user.id }, // Объект, чьи данные будут зашифрованы в данном токене
        config.get("jwtSecret"), // Секретный ключ
        { expiresIn: "1h" } //Время сессии(Через сколько токен закончит существование)
      );
      res.json({ token, userId: user.id }); // Ответ пользователю
    } catch (e) {
      res.status(500).json({ message: "Что-то пошло не так" });
    }
  }
);

module.exports = router;
