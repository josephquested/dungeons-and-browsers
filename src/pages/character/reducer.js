var data = require('./classes')

module.exports = (state, action) => {
  var newState = require('clone')(state)

  switch (action.type) {
    case 'CHANGE_CLASS':
      newState.class = data[action.payload]
      return newState
    break

    default:
      return newState
  }
}
