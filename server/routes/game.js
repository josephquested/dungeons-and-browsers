var router = require('express').Router()
var createGame = require('../socket/create-game')
var db = require('../../db/db')

router.get('/', (req, res) => {
  if (req.user) {
    db.characters.findByUserId(req.user.id, (err, characters) => {
      if (characters.length == 4) {
        res.render('game')
      } else {
        res.redirect('/party')
      }
    })
  } else {
    res.redirect('/')
  }
})

router.get('/:id', (req, res) => {
  if (req.user) {
    db.characters.findByUserId(req.user.id, (err, characters) => {
      if (characters.length == 4) {

        console.log('rendering game id page');
        res.render('game-id', { user: req.user })

      } else {
        res.redirect('/party')
      }
    })
  } else {
    res.redirect('/')
  }
})

router.post('/', (req, res) => {
  if (req.user) {
    db.characters.findByUserId(req.user.id, (err, characters) => {
      if (characters.length == 4) {
        var gameid = createGame({id: req.user.id, name: req.user.username})
        console.log("redirecting to games ... ");
        res.redirect(`/game/${gameid}`)
      } else {
        res.redirect('/party')
      }
    })
  } else {
    res.redirect('/')
  }
})

module.exports = router
