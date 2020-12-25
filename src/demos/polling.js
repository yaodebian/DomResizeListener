// excute when the dom resize
function resizeCall () {
  var width = ''
  var height = ''
  var boxElement = document.getElementById('box')
  var boxContentElement = document.getElementById('box-content')

  width = boxElement.offsetWidth
  height = boxElement.offsetHeight

  boxContentElement.innerText = 'width: ' + width + ', height: ' + height
}

window.onload = function () {
  // first, get the initial width and height
  resizeCall()

  setInterval(() => {
    resizeCall()
  }, 200)
}
