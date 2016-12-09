var router = require('express').Router()
var passport = require('../passport')

router.get('/', passport.authenticate('local', { failureRedirect: '/' }), (req, res) => res.render('play'))

module.exports = router
