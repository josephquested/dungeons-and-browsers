var html = require('yo-yo')

module.exports = (state, dispatch) => {
  return html`
    <div id="side-bar">
      ${renderHeader()}
    </div>
  `

  function renderHeader () {
    if (!state.gameData.guestName) {
      return html`
          <div>
            <h2>waiting for opponent</h2><h2 id='loading-dots'>.</h2>
            ${animateLoading()}
          </div>
        `
    } else {
      return html`<h2 id="game-host-header">${state.gameData.hostname} -VS- ${state.gameData.guestname}</h2>`
    }
  }

  function animateLoading () {
    var str = '.'
    setInterval(() => {
      var str = document.getElementById('loading-dots').innerHTML
      str.length == 20 ? str = '.' : str += '.'
      document.getElementById('loading-dots').innerHTML = str
    }, 500)
  }
}
