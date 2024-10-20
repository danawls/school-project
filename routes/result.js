const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/result', (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "result.html"));
})

module.exports = router;