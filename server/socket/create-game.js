var shortID = require('shortid')

module.exports = (host) => {
  var game = {
    id: shortID.generate(),
    hostid: host.id,
    hostname: host.name
  }

  io.games.push(game)
  return game.id
}
