module.exports = () => {
  var io = global.io = require('socket.io-client')()
  module.exports = io
}
