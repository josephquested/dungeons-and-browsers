var header = require('./partials/header')
var generateBoard = require('./partials/empty-board')

function render (data) {
  var socketData = getSocketData(data)

  return `
    ${header()}
    <div id="main-wrapper">
      ${generateBoard(12)}
      <main></main>
    </div>
  `
}

function getSocketData (data) {
  var gameData = io.games.find((game) => game.id == data.gameid)
  return gameData
}

module.exports = render
