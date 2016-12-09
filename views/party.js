var header = require('./partials/header')
var generateBoard = require('./partials/empty-board')

function render (data) {
  return `
    ${header('play')}
    <h1>party</h1>
  `
}

module.exports = render
