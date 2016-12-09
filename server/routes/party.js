var router = require('express').Router()
var db = require('../../db/db')

router.get('/', (req, res) => {
  if (req.user) {
    db.characters.findByUserId(req.user.id, (err, res) => {
      console.log("res from characters database", res)
    })
    res.render('party')
  } else {
    res.redirect('/')
  }
})

module.exports = router
