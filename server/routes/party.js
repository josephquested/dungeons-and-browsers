var router = require('express').Router()
var db = require('../../db/db')

router.get('/', (req, res) => {
  if (req.user) {
    db.characters.findByUserId(req.user.id, (err, characters) => {
      res.render('party', { characters })
    })
  } else {
    res.redirect('/')
  }
})

module.exports = router
