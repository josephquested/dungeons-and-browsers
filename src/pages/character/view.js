var html = require('yo-yo')

module.exports = (state, dispatch) => {
  return html`
    <div id="character-stat-container">
      ${standardStats()}
      ${classSwitch()}
      ${bindListener()}
    </div>
  `

  function standardStats () {
    if (state.class) {
      return html`
        <div id="standard-stats">
          <h2>health: ${state.class.health}</h2>
          <h2>stamina: ${state.class.stamina}</h2>
          <input type="submit" value="->"/>
        </div>
      `
    }
  }

  function classSwitch () {
    if (state.class) {
      switch (state.class.name) {
        case 'warrior':
          // return warriorHTML()
        break

        case 'mage':
          // return mageHTML()
        break

        default:
        return
      }
    }
  }

  function bindListener () {
    document.getElementById('character-form').addEventListener('change', (e) => {
      dispatch({ type: "CHANGE_CLASS", payload: e.target.value })
    })
  }
}
