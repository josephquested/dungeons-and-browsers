var redux = require('redux')
var morphdom = require('morphdom')
var reducer = require('./reducer')
var stash = require('html-stash').unpack()

module.exports = () => {
  var app = document.createElement('div')
  document.querySelector('main').appendChild(app)

  var initialState = { hostname: '___', guestname: '___'}
  var store = redux.createStore(reducer, initialState)

  store.subscribe(() => {
    var view = render(store.getState(), store.dispatch)
    morphdom(app, view)
  })

  function render (state, dispatch) {
    return require('./view')(state, store.dispatch)
  }

  // --- sockets --- //

  var io = require('socket.io-client')()
  io.emit('request-game-data', stash.gameid)

  io.on('receive-game-data', (data) => {
    store.dispatch({type: 'UPDATE_GAME_DATA', payload: data})
    if (!data.guestname && stash.username !== data.hostname) {
      io.emit("join-game", { guestname: stash.username, gameid: stash.gameid })
    }
  })

  io.on('start-game', () => {
    // store.dispatch({type: 'UPDATE_GAME_DATA', payload: data})
    console.log('game starting!!');
  })
}
