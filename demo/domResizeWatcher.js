// excute when the dom resize
function resizeCall (width, height, dom, callback) {
  let tempWidth = dom.clientWidth
  let tempHeight = dom.clientHeight

  if (tempWidth !== width || tempHeight !== height) {
    callback({
      width: tempWidth,
      height: tempHeight
    })
  }

  window.requestAnimationFrame(resizeCall.bind(null, tempWidth, tempHeight, dom, callback))
}

// Dom Resize Watcher Script
function domResizeWatcher(dom, callback) {
  let width = ''
  let height = ''

  // first, get the initial width and height
  requestAnimationFrame(resizeCall.bind(null, width, height, dom, callback))
}

// get the target element and watch it's size change
var boxElement = document.getElementById('box')
domResizeWatcher(boxElement, function (sizeInfo) {
  var boxContentElement = document.getElementById('box-content')
  boxContentElement.innerText = 'width: ' + sizeInfo.width + ', height: ' + sizeInfo.height
})
