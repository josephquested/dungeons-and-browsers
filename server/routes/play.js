var router = require('express').Router()

router.get('/', (req, res) => {
  if (req.user) {
    res.render('play')
  } else {
    res.redirect('/')
  }
})

module.exports = router
