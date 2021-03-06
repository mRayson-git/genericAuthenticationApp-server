const express = require('express');
const passport = require('passport')
const router = express.Router();

// @desc Authenticate with google
// @route GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// @desc Google auth callback
// @route GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/api/v1/users/login'}), (req, res) => {
    res.redirect('/');
});


module.exports = router;