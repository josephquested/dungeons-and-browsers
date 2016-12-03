var express = require('express')
var templit = require('templit')

var app = express()

app.engine('js', templit)
app.set('view engine', 'js')

// serves static files
app.use(express.static(`${__dirname}/public`))

// important: the path to your 'views' directory
app.set('views', `${__dirname}/views`)

app.get('/', (req, res) => {
  res.render('default')
})

app.get('/create', (req, res) => {
  res.render('default')
})

app.listen(3000, () => {
  console.log('templit app rendering on port 3000')
})
