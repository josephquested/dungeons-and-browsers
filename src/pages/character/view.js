var html = require('yo-yo')

module.exports = (state, dispatch) => {
  return html`
    <div id="character-stat-container">
      ${standardStats()}
      ${bindListener()}
    </div>
  `

  function standardStats () {
    if (state.class) {
      return html`
        <div id="standard-stats">
          <h2>health: ${state.class.health}</h2>
          <input type="hidden" name="health" value=${state.class.health}/>

          <h2>stamina: ${state.class.stamina}</h2>
          <input type="hidden" name="stamina" value=${state.class.stamina}/>

          <h2>strength: ${state.class.strength}</h2>
          <input type="hidden" name="strength" value=${state.class.strength}/>

          <h2>speed: ${state.class.speed}</h2>
          <input type="hidden" name="speed" value=${state.class.speed}/>

          <br>
          <input type="submit" value="create character"/>
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
