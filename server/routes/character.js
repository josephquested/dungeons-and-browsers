var router = require('express').Router()
var db = require('../../db/db')

router.get('/', (req, res) => {
  res.render('character')
})

router.post('/', (req, res) => {
  if (req.user) {
    db.characters.findByUserId(req.user.id, (err, characters) => {
      if (characters.length < 4) {
        var character = { userid: req.user.id, data: req.body }
        db.characters.add(character, (err, dbRes) => {
          res.redirect('/party')
        })

      } else {
        res.redirect('/party')
      }
    })

  } else {
    res.redirect('/')
  }
})

module.exports = router
