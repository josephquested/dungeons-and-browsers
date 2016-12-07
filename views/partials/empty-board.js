function generateBoard (size) {
  var innerHTML = ``
  for (var i = 0; i < size; i++) {
    innerHTML += `<tr>${generateCells(size)}</tr>`
  }
  return `<table>${innerHTML}</table>`
}

function generateCells (size) {
  var innerHTML = ``
  for (var i = 0; i < size; i++) {
    innerHTML += `<td></td>`
  }
  return innerHTML
}

module.exports = generateBoard
