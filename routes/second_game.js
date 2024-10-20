const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/second-game", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "second_game.html"));
});

module.exports = router;
