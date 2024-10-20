const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/bye', (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "bye.html"));
})

module.exports = router;