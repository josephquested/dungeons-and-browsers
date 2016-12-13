var route = window.location.pathname.split('/')

if (route[2]) {
  return require('./pages/game-id/index')()
}

switch (route[1]) {
  case 'character':
    return require('./pages/character/index')()
  break

  case 'game':
    return require('./pages/game/index')()
}
