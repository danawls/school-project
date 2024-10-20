const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/solve-password", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "solve_password.html"));
});

module.exports = router;
