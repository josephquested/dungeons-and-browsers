var html = require('yo-yo')

module.exports = (state, dispatch) => {
  return html`
    <div>
      <h1 id='page-header'>create character</h1>
      <hr id='page-rule'>

      <div id="character-form">
        <form action="/character" method="post">
          <label>name</label>
          <input type="text" name="name"/>

          <select onchange=${changeClass} id="class-select" name="class">
            <option selected disabled value="">class</option>
            <option value="warrior">warrior</option>
            <option value="mage">mage</option>
            <option value="theif">theif</option>
            <option value="priest">priest</option>
          </select>
          <br>

          <div id="character-stat-container">
            ${classSwitch()}
          </div>

          <input type="submit" value="->"/>
        </form>
      </div>
    </div>
  `

  function changeClass (e) {
    dispatch({type: "CHANGE_CLASS", payload: e.target.value})
  }

  function classSwitch () {
    switch (state.class) {
      case 'warrior':
        return warriorHTML()
      break

      case 'mage':
        return mageHTML()
      break

      default:
        return
    }
  }

  function warriorHTML () {
    return html`
      <div>
        <input id="health-slider" type="range" name="points" min="1" max="10">
        <h2>health: <h2 id='health-label'>5</h2></h2>
      </div>
    `
  }

  function mageHTML () {
    return html`
      <div>
        <input id="health-slider" type="range" name="points" min="1" max="10">
        <h2>health: <h2 id='health-label'>5</h2></h2>
      </div>
    `
  }
}

// function bindValueLabel (element, label) {
//   element.addEventListener("input", (e) => {
//     label.innerHTML = element.value
//   })
// }
