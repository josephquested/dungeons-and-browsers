var header = require('./partials/header')
var generateBoard = require('./partials/empty-board')

function render (data) {
  return `
    ${header()}
    <h1 id='page-header'>party</h1>
    ${renderCharacters(data.characters)}
    ${renderEmptySlots(data.characters)}
  `
}

// --- character slots --- //
function renderCharacters (characters) {
  var html = ``
  for (var i = 0; i < characters.length; i++) {
    html += `${renderCharacter(characters[i])}`
  }
  return html
}

function renderCharacter (character) {
  var characterData = JSON.parse(character.data)
  var html = `
  <div class="character-container">
    <h2>${characterData.name}</h2>
    <h3> --- ${characterData.class} --- </h3>
    <h4>health: ${characterData.health}</h4>
    <h4>stamina: ${characterData.stamina}</h4>
    <h4>strength: ${characterData.strength}</h4>
    <h4>speed: ${characterData.speed}</h4>
  `
  return html += `</div>`
}

// --- empty slots --- //
function renderEmptySlots (characters) {
  var emptySlots = 4 - characters.length
  var html = ``
  for (var i = 0; i < emptySlots; i++) {
    html += `${emptySlot}`
  }
  return html
}

var emptySlot = `
  <div class="character-container">
    <a href="/character">empty slot</a>
  </div>
`

module.exports = render
