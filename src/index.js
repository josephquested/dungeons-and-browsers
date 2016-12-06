var route = window.location.pathname.substr(1)

switch (route) {
  case 'create':
    return require('./pages/create')()
    break

  default:
    return require('./pages/home')()
}
    
