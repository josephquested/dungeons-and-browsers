var route = window.location.pathname.substr(1)

switch (route) {
  case 'play':
    return require('./pages/play')()
  break

  case 'character':
    return require('./pages/character')()
  break

  default:
    return require('./pages/index')()
}
