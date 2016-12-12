module.exports = (connection) => {
  var io = require('socket.io')(connection)
  io.games = []

  io.on('connection', (socket) => {
    console.log(`socket ${socket.id} connected`)

    socket.on('join', (roomID) => {
      socket.join(roomID)
    })
  })

  return io
}
