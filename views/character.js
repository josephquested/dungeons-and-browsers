var header = require('./partials/header')
var generateBoard = require('./partials/empty-board')

function render (data) {
  return `
    ${header()}

    <div>
      <h1 id='page-header'>create character</h1>
      <hr id='page-rule'>
      <br>

      <div id="character-form">
        <form action="/character" method="post">
          <label>name</label>
          <input type="text" name="name"/>

          <select id="class-select" name="class">
            <option selected disabled value="class">class</option>
            <option value="warrior">warrior</option>
            <option value="mage">mage</option>
            <option value="priest">priest</option>
            <option value="thief">thief</option>
          </select>
          <br><br>

          <div id="character-stats"></div>

        </form>
      </div>
    </div>
  `
}

module.exports = render
