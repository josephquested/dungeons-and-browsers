var header = require('./partials/header')
var generateBoard = require('./partials/empty-board')
var stash = require('html-stash').pack

function render (data) {
  return `
    ${header()}
    <div id="main-wrapper">
      ${generateBoard(12)}
      <main></main>
      ${stash(data)}
    </div>
  `
}

module.exports = render
