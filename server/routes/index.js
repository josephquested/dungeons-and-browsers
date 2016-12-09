var router = require('express').Router()
var passport = require('../passport')

router.get('/', (req, res) => {
  res.render('home', { user: req.user } )
})

module.exports = router
