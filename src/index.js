var route = window.location.pathname.substr(1)

switch (route) {
  case 'play':
    return require('./pages/play')()
  break

  case 'character':
    return require('./pages/character/index')()
  break

  default:
    return require('./pages/index')()
}
