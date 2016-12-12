var route = window.location.pathname.split('/')

if (route[2]) {
  return require('./pages/game/start')()
}

switch (route[1]) {
  case 'game':
    return require('./pages/game/index')()
  break

  case 'character':
    return require('./pages/character/index')()
  break
}
