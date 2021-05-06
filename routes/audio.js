const { Router } = require("express");
const router = Router();
const Audio = require("../models/Audio");

router.post("/track", async (req, res) => {
  res.status(200);
console.log(req.body.profile)
  try {
    const toChange = {
      name: req.body.name,
      description: req.body.description,
      genre: req.body.genre,
      audio: req.files[0].path,
      audioImage: req.files[1].path,
    };

    const track = new Audio();
    Object.assign(track, toChange);

    await track.save();
    console.log(track);
    res.end();
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
