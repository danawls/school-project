const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/fourth-game", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "fourth_game.html"));
});

module.exports = router;
