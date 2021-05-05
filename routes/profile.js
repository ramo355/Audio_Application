const { Router } = require("express");
const router = Router();
const User = require("../models/User");


router.post("/profile/:id", async (req, res) => {
  // res.status(200);
  console.log(req.file);
  try {
    const user = await User.findById(req.params.id);
    console.log(user);
    const toChange = {
      name: req.body.name,
    };

    if (req.file) {
      toChange.avatarUrl = req.file.path;
    }

    Object.assign(user, toChange);
    await user.save();
    res.send(user.avatarUrl)
    res.end();
  } catch (e) {
    console.log(e);
  }
});

router.get("/profile/:id", async (req, res) => {
  try {
    // const authHeader = req.headers['authorization']
    // const token = authHeader && authHeader.split(' ')[1] 
    // if (token == null) return res.sendStatus(401)
    // jwt.verify(token, config.get("jwtSECRET"), (err) => {
    // console.log(err)
    // if (err) return res.sendStatus(403)
    // })
    const user = await User.findById(req.params.id);
    res.send(user.avatarUrl);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
