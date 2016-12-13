var html = require('yo-yo')

module.exports = (state, dispatch) => {
  return html`
    <div id='game-list'>
      ${state.games.map(renderGame)}
    </div>
  `

  function renderGame (game) {
    return html`
      <div class="centered-container">
        <h2>${game.hostname}</h2>
        <a href="/game/${game.id}">join game</a>
        <br>
      </div>
    `
  }

  function renderGameState () {

  }
}
