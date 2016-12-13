module.exports = (connection) => {
  var io = require('socket.io')(connection)
  io.games = []

  io.on('connection', (socket) => {
    socket.on('join', (gameid) => {
      socket.join(gameid)
    })

    socket.on('request-game-data', (gameid) => {
      var game = io.games.find((game) => game.id == gameid)
      io.to(socket.id).emit('receive-game-data', game)
    })
  })

  return io
}
