var redux = require('redux')
var morphdom = require('morphdom')
var reducer = require('./reducer')

module.exports = () => {
  var app = document.createElement('div')
  document.querySelector('main').appendChild(app)

  var initialState = { title: 'test' }
  var store = redux.createStore(reducer, initialState)

  store.subscribe(() => {
    var view = render(store.getState(), store.dispatch)
    morphdom(app, view)
  })

  function render (state, dispatch) {
    return require('./view')(state, store.dispatch)
  }

  store.dispatch({type: 'INIT'})
}
