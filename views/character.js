var header = require('./partials/header')
var generateBoard = require('./partials/empty-board')

function render (data) {
  return `
    ${header()}
    <h1 id='page-header'>create character</h1>
    <hr id='page-rule'>
  `
}

module.exports = render
