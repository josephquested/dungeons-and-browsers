var router = require('express').Router()
var db = require('../../db/db')

router.get('/', (req, res) => {
  res.render("character")
})

router.post('/', (req, res) => {
  console.log("CHARACTER REQ: ", req.body);
  // db.users.findByUsername(req.body.username, (user) => {
  //   if (!user) {
  //     hasher.hash(req.body.password, (hashedPassword) => {
  //       db.users.add({username: req.body.username, password: hashedPassword}, (dbRes) => {
  //         res.redirect('/')
  //       })
  //     })
  //   } else {
  //     res.redirect('/')
  //   }
  // })
  res.redirect('/character')
})

module.exports = router
