const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/present", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "present.html"));
});

module.exports = router;
