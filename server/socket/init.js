module.exports = (connection) => {
  var io = require('socket.io')(connection)
  io.games = []

  io.on('connection', (socket) => {
    socket.on('join', (gameid) => {
      socket.join(gameid)
    })

    socket.on('request-games', () => {
      io.to(socket.id).emit('receive-games', io.games)
    })

    socket.on('request-game-data', (gameid) => {
      var game = io.games.find((game) => game.id == gameid)
      socket.join(gameid)
      io.to(gameid).emit('receive-game-data', game)
    })

    socket.on('join-game', (req) => {
      console.log(`${req.guestname} wants to join game ${req.gameid}!`)
      var game = io.games.find((game) => game.id == req.gameid)
      if (!game.guestname) {
        game.guestname = req.guestname
        io.to(req.gameid).emit('start-game')
      }
    })
  })

  return io
}
