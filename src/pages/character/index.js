var redux = require('redux')
var morphdom = require('morphdom')
var reducer = require('./reducer')

module.exports = () => {
  var characterStats = document.createElement('div')
  document.getElementById('character-stats').appendChild(characterStats)

  var initialState = { title: 'test' }
  var store = redux.createStore(reducer, initialState)

  store.subscribe(() => {
    var view = render(store.getState(), store.dispatch)
    morphdom(characterStats, view)
  })

  function render (state, dispatch) {
    return require('./view')(state, store.dispatch)
  }

  store.dispatch({type: 'INIT'})
}
