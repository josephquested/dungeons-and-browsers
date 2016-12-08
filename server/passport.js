var passport = require('passport')
var Strategy = require('passport-local').Strategy
var hasher = require('./hasher')

var db = require('../db/db')

passport.use(new Strategy((username, password, cb) => {
  db.users.findByUsername(username, (err, user) => {
    if (err) return cb(err)
    if (!user) return cb(null, false)
    hasher.checkHash(password, user.password, (valid) => {
      if (valid) return cb(null, user)
      return cb(null, false)
    })
  })
}))

passport.serializeUser((user, cb) => {
  cb(null, user.id)
})

passport.deserializeUser((id, cb) => {
  db.users.findById(id, (err, user) => {
    if (err) return cb(err)
    cb(null, user)
  })
})

module.exports = passport
