var app = require('./server/app')
var http = require('http').Server(app)

global.io = require('./server/socket/init')(http)

http.listen(3000, () => {
  console.log('DUNGEONS AND BROWSERS / PORT 3000')
})
