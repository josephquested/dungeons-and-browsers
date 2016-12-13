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
      io.to(socket.id).emit('receive-game-data', game)
    })

    socket.on('join-game', (gameData) => {
      console.log(`${gameData.guestname} wants to join game ${gameData.gameid}!`)
    })
  })

  return io
}
