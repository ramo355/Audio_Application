const { Router } = require("express");
const bcrypt = require("bcryptjs"); // шифруем пароль
const { check, validationResult } = require("express-validator"); // Валидция на бэке
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");

const router = Router();

router.post(
  "/auth",
  [
    check("email", "Введите корректный email").normalizeEmail().isEmail(),
    check("password", "Введите пароль").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Неккоректные данные при авторизации",
        });
      }
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "Пользователь не найден" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Неверный пароль" });
      }

      const token = jwt.sign({ userId: user.id }, config.get("jwtSECRET"), {
        expiresIn: 60,
      });

      res.status(200).json({ token, userId: user.id, expiresIn: "3600", email });
    } catch (e) {
      res.status(500).json({ message: "Что-то пошло не так" });
      console.log(e);
    }
  }
);

module.exports = router;
