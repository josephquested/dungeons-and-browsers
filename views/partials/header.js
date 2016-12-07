function render (current) {
  return `
  <div id="header">
    <span id="navs">
      <h1>dungeons in browsers</h1>
      <h1 id="nav-devider">/</h1>
      ${renderNavs(current)}
    </span>
    <hr>
  </div>
  `
}

function renderNavs (current) {
  var navs = ['play', 'party', 'settings']
  var html = `<a href="/">home</a>`
  navs.forEach((nav) => {
    html += `<a href="/${nav}">${nav}</a>`
  })
  return html
}

module.exports = render
