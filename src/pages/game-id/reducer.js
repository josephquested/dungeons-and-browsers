module.exports = (state, action) => {
  var newState = require('clone')(state)

  switch (action.type) {
    case 'UPDATE_GAME_DATA':
      newState.gameData = action.payload
      return newState
    break

    case 'START_GAME':
      newState.gameData = action.payload
      return newState
    break

    default:
      return newState
  }
}
