const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.send('User login');
});

router.get('/logout', (req, res) => {
    res.send('User logout');
});


module.exports = router;