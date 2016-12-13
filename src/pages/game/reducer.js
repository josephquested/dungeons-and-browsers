module.exports = (state, action) => {
  var newState = require('clone')(state)

  switch (action.type) {
    case 'UPDATE_GAME_DATA':
      newState.gameData = action.payload
      return newState
    break

    default:
      return newState
  }
}
