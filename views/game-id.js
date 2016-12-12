var header = require('./partials/header')
var generateBoard = require('./partials/empty-board')

function render (data) {
  return `
    ${header()}
    <h1>${data.hostname}'s game</h1>
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
      <p>test</p>
    </div>
  `
}

module.exports = render