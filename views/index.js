var header = require('./partials/header')

function render (data) {
  if (!data.user) {
    return notAuthorized()
  } else {
    return authorized()
  }
}

function notAuthorized () {
  return `
    <div id="header">
      <span id="navs">
        <h1>DUNGEONS AND BROWSERS</h1>
      </span>
      <hr>
    </div>

    <div id="login-form">
      <h2>login</h2>
      <form action="/login" method="post">
        <label>username:</label>
        <input type="text" name="username"/><br/>
        <label>password:</label>
        <input type="password" name="password"/>
        <input type="submit" value="->"/>
      </form>
    </div>

    <br><br>

    <div id="logup-form">
      <h2>logup</h2>
      <form action="/logup" method="post">
        <label>username:</label>
        <input type="text" name="username"/><br/>
        <label>password:</label>
        <input type="password" name="password"/>
        <input type="submit" value="->"/>
      </form>
    </div>
  `
}

function authorized (data) {
  return `
    ${header()}
  `
}

module.exports = render
