var router = require('express').Router()
var passport = require('../passport')

router.post('/',
  passport.authenticate('local', { failureRedirect: '/' }),
  (req, res) => res.redirect('/')
)

module.exports = router
