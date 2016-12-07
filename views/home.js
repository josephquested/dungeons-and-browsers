var header = require('./partials/header')

function render (data) {
  return `
    ${header('home')}
  `
}

module.exports = render
