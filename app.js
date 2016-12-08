// --- auth --- //
var passport = require('passport')
var Strategy = require('passport-local').Strategy
var hasher = require('./db/hasher')

var db = require('./db/db')

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

// --- express --- ///
var express = require('express')
var templit = require('templit')

var app = express()
app.engine('js', templit)
app.set('view engine', 'js')
app.set('views', `${__dirname}/views`)

app.use(express.static(`${__dirname}/public`))
app.use(require('morgan')('combined'))
app.use(require('cookie-parser')())
app.use(require('body-parser').urlencoded({ extended: true }))
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }))

app.use(passport.initialize())
app.use(passport.session())

// --- routes --- //
app.get('/', (req, res) => {
  res.render('home', { user: req.user })
})

app.get('/play', (req, res) => {
  res.render('play')
})

app.get('/quit', (req, res) => {
  req.logout()
  res.redirect('/')
})

app.use('/logup', require('./routes/logup'))

app.post('/login',
  passport.authenticate('local', { failureRedirect: '/' }), (req, res) => { res.redirect('/') }
)

// --- listen --- //
app.listen(3000, () => {
  console.log('DUNGEONS AND BROWSERS / PORT 3000')
})
