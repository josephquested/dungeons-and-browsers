function render (current) {
  return `
  <div id="header">
    <span id="navs">
      <h1>DUNGEONS AND BROWSERS</h1>
      <h1 id="nav-devider">/</h1>
      ${renderNavs(current)}
    </span>
    <hr>
  </div>
  `
}

function renderNavs (current) {
  var navs = ['PLAY', 'PARTY', 'SETTINGS']
  var html = `<a href="/">HOME</a>`
  navs.forEach((nav) => {
    html += `<a href="/${nav}">${nav}</a>`
  })
  return html
}

module.exports = render