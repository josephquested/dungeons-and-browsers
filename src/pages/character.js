var state = {}

function dispatch (action) {
  switch (action.type) {
    case 'CHANGE_CLASS':
      state.class = action.payload
      render()
    break
  }
}

function render () {
  var container = document.getElementById('character-stat-container')
  switch (state.class) {
    case 'warrior':
      container.innerHTML = warriorHTML()
      bindValueLabel(document.getElementById('health-slider'), document.getElementById('health-label'))
    break

    case 'mage':
      container.innerHTML = mageHTML()
      bindValueLabel(document.getElementById('health-slider'), document.getElementById('health-label'))
    break

    default:
      container.innerHTML = ''
  }
}

function warriorHTML () {
  return `
    <input id="health-slider" type="range" name="points" min="1" max="10">
    <h2>health: <h2 id='health-label'>5</h2></h2>
  `
}
function mageHTML () {
  return `
    <h2>health: <h2 id='health-label'>5</h2></h2>
    <input id="health-slider" type="range" name="points" min="1" max="10">
  `
}


function switchClass (className) {
  dispatch({ type: 'CHANGE_CLASS', payload: className })
}

function bindSelectListener () {
  var selector = document.getElementById('class-select')
  selector.addEventListener("change", (e) => {
    switchClass(e.target.value)
  })
}

function bindValueLabel (element, label) {
  element.addEventListener("input", (e) => {
    label.innerHTML = element.value
  })
}

module.exports = () => {
  bindSelectListener()
}
