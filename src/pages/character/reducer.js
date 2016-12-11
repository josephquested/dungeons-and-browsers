module.exports = (state, action) => {
  var newState = require('clone')(state)

  switch (action.type) {
    case 'CHANGE_CLASS':
      newState.class = action.payload
      return newState
    break

    default:
      return newState
  }
}
