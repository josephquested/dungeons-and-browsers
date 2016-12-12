var header = require('./partials/header')
var generateBoard = require('./partials/empty-board')

function render (data) {
  var socketData = getSocketData(data)

  return `
    ${header()}
    <h1>${socketData.hostname}'s game</h1>
    <div id="main-wrapper">
      ${generateBoard(12)}
      <ul>
      <li>thing</li>
      <li>thing</li>
      <li>thing</li>
      <li>thing</li>
      <li>thing</li>
      <li>thing</li>
      </ul>
    </div>
  `
}

function getSocketData (data) {
  var gameData = io.games.find((game) => game.id == data.gameid)
  return gameData
}

module.exports = render
