var shortID = require('shortid')

module.exports = (host) => {
  var game = {
    id: shortID.generate(),
    hostid: host.id,
    hostname: host.name
  }

  io.games.push(game)
  io.emit('receive-games', io.games)
  return game.id
}
