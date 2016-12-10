var router = require('express').Router()
var db = require('../../db/db')

router.get('/', (req, res) => {
  if (req.user) {
    db.characters.findByUserId(req.user.id, (err, characters) => {
      if (characters.length == 4) {
        res.render('play')
      } else {
        res.render('party', ({ characters }))
      }
    })
  } else {
    res.redirect('/')
  }
})

module.exports = router
