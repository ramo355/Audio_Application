const { Router } = require("express");
const router = Router();
const Audio = require("../models/Audio");

router.get("/track", async (req, res) => {

 await Audio.find({}, function (err, data) {
    res.json(data);
  });
});

module.exports = router;
