const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/third-game", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "third_game.html"));
});

module.exports = router;
