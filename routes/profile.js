const { Router } = require("express");
const router = Router();
const User = require("../models/User");

router.post("/profile", async (req, res) => {
  try {
    const { img, userId } = req.body;
    console.log(img)
    const user = await User.findById(userId);
    const toChange = {
      name: req.body.name,
    };

    if (req.file) {
      toChange.avatarUrl = "";
    }

    console.log(req.file);

    Object.assign(user, toChange);
    // await user.save();
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
