var router = require('express').Router()

router.get('/', (req, res) => {
  if (!req.user) {
    res.redirect('/')
  } else {
    res.render('party')
  }
})

module.exports = router
