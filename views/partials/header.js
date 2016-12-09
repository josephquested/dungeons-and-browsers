function render () {
  return `
  <div id="header">
    <span id="navs">
      <h1>DUNGEONS AND BROWSERS</h1>
      <h1 id="nav-devider">/</h1>
      ${renderNavs()}
    </span>
    <hr>
  </div>
  `
}

function renderNavs () {
  var navs = ['PLAY', 'PARTY', 'QUIT']
  var html = `<a href="/">HOME</a>`
  navs.forEach((nav) => {
    html += `<a href="/${nav.toLowerCase()}">${nav}</a>`
  })
  return html
}

module.exports = render
