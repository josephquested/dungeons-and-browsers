var router = require('express').Router()

router.get('/', (req, res) => {
  res.render('play')
})

module.exports = router
