(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
module.exports = () => {
  console.log('home')
}

},{}],3:[function(require,module,exports){
module.exports = () => {
  console.log('play')
}

},{}],4:[function(require,module,exports){
var route = window.location.pathname.substr(1)

switch (route) {
  case 'play':
    return require('./pages/play')()
  break

  case 'character':
    return require('./pages/character')()
  break

  default:
    return require('./pages/index')()
}

},{"./pages/character":1,"./pages/index":2,"./pages/play":3}]},{},[4]);
