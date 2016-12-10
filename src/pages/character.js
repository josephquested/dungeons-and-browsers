var state = {}

function dispatch (action) {
  switch (action.type) {
    case 'CHANGE_CLASS':
      state.class = action.payload
      render()
    break
  }
}

function render () {
  
}


function switchClass (className) {
  dispatch({ action: 'CHANGE_CLASS', payload: className })
}

function bindSelectListener () {
  var selector = document.getElementById('class-select')
  selector.addEventListener("change", (e) => {
    switchClass(e.target.value)
  })
}

module.exports = () => {
  bindSelectListener()
}
