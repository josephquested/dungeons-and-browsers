var header = require('./partials/header')
var generateBoard = require('./partials/empty-board')

function render (data) {
  return `
    ${header()}
    <h1 id='page-header'>create character</h1>
    <hr id='page-rule'>

    <div id="character-form">
      <form action="/character" method="post">
        <label>name</label>
        <input type="text" name="name"/>

        <select id="class-select" name="cars">
          <option selected disabled value="">class</option>
          <option value="warrior">warrior</option>
          <option value="mage">mage</option>
          <option value="theif">theif</option>
          <option value="priest">priest</option>
        </select>

        <input type="submit" value="->"/>
      </form>
    </div>
  `
}

module.exports = render
