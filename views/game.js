var header = require('./partials/header')

function render (data) {
  return `
    ${header()}
    <h1 id='page-header'>games</h1>
    <div class='centered'>
      <form action="/game" method="post">
        <input type="submit" value="create game"/>
      </form>
    <br><br>
    <main></main>
  `
}

module.exports = render
