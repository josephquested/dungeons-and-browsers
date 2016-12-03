module.exports = (state, dispatch) => {
  var route = window.location.pathname.substr(1)

  switch (route) {
    case 'create':
      return require('./pages/create')(state, dispatch)
      break

    default:
      return require('./pages/index')(state, dispatch)
  }
}
