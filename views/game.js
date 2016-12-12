var header = require('./partials/header')

function render (data) {
  return `
    ${header()}
    <h1 id='page-header'>games</h1>

    <div id="create-gage-form">
      <form action="/game" method="post">
        <input type="submit" value="create game"/>
      </form>
    <br><br>
    ${renderGames()}
  `

  function renderGames (data) {
    var html = ``
    io.games.forEach((game) => {
      html += `
        <div class="centered-container">
          <h3>${game.hostname}'s game</h3>
          <a href='/game/${game.id}'>join</a>
        </div>
      `
    })
    return html
  }
}

module.exports = render
