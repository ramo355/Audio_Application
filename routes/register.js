const { Router } = require("express");
const bcrypt = require("bcryptjs"); // шифруем пароль
const { check, validationResult } = require("express-validator"); // Валидция на бэке
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const e = require("express");
const router = Router();

router.post(
  "/register",
  [
    check("email", "Неккоректный email").normalizeEmail().isEmail(),
    check("password", "Введите корректный пароль").isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({
          errors: errors.array(),
          message: "Неккоректные данные при регистрации",
        });
      }
      const admin = "k@gmail.com";
      let isAdmin = false;
      const { email, password } = req.body;
      const candidate = await User.findOne({ email });
      if (email === admin) {
        isAdmin = true;
      }

      if (candidate) {
        return res
          .status(400)
          .json({ message: "Такой пользователь уже существует!" });
      } else {
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({
          email,
          password: hashedPassword,
        });
        await user.save();
        console.log(user);

        const token = jwt.sign({ userId: user.id }, config.get("jwtSECRET"), {
          expiresIn: 60,
        });
        res
          .status(200)
          .json({ token, userId: user.id, expiresIn: "3600", email, isAdmin });
      }
    } catch (e) {
      res.status(500).json({ message: "Что-то пошло не так" });
      console.log(e);
    }
  }
);

module.exports = router;
