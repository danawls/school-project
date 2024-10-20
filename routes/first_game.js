const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/first-game", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "first_game.html"));
});

module.exports = router;
