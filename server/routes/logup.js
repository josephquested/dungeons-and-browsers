var router = require('express').Router()
var hasher = require('../hasher')
var db = require('../../db/db')

router.post('/', (req, res) => {
  db.users.findByUsername(req.body.username, (user) => {
    if (!user) {
      hasher.hash(req.body.password, (hashedPassword) => {
        db.users.add({username: req.body.username, password: hashedPassword}, (dbRes) => {
          res.redirect('/')
        })
      })
    } else {
      res.redirect('/')
    }
  })
})

module.exports = router
