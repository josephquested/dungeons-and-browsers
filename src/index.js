var route = window.location.pathname.split('/')

if (route[2]) {
  return require('./pages/game/index')(route[2])
}

switch (route[1]) {
  case 'character':
    return require('./pages/character/index')()
  break
}
