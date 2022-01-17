const { Router } = require("express");
const router = Router();
const User = require("../models/User");

router.post("/profile/:id", async (req, res) => {
  res.status(200);
  try {
    const user = await User.findById(req.params.id);
    console.log(user);
    const toChange = {
      name: req.body.name,
    };

    if (req.files) {
      req.files.map((item) => {
        toChange.avatarUrl = item.path;
      });
    }

    Object.assign(user, toChange);
    await user.save();
    res.send(user.avatarUrl);
    res.end();
  } catch (e) {
    console.log(e);
  }
});

router.get("/profile/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user.avatarUrl);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
