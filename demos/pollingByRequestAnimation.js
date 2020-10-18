// excute when the dom resize
function resizeCall () {
  var width = ''
  var height = ''
  var boxElement = document.getElementById('box')
  var boxContentElement = document.getElementById('box-content')

  width = boxElement.clientWidth
  height = boxElement.clientHeight

  boxContentElement.innerText = 'width: ' + width + ', height: ' + height

  window.requestAnimationFrame(resizeCall)
}

// first, get the initial width and height
requestAnimationFrame(resizeCall)
