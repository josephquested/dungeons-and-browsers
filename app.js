var express = require('express')
var templit = require('templit')

var app = express()

app.engine('js', templit)
app.set('view engine', 'js')

app.use(express.static(`${__dirname}/public`))
app.set('views', `${__dirname}/views`)

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/create', (req, res) => {
  res.render('create')
})

app.listen(3000, () => {
  console.log('templit app rendering on port 3000')
})
