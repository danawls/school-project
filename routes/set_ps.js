const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/setting-password', (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "set_password.html"));
})

module.exports = router;