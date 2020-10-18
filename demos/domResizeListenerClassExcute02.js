// get the target element and watch it's size change
var boxElement = document.getElementById('box')
var boxContentElement = document.getElementById('box-content')

// resize callback
function resizeCall (sizeInfo) {
  var boxContentElement = document.getElementById('box-content')
  boxContentElement.innerText = 'width: ' + sizeInfo.clientWidth + ', height: ' + sizeInfo.clientHeight
}

var domResizeListener = new DomResizeListener(boxElement, resizeCall)

function test () {
  console.log(111)
}

function test2 () {
  console.log(222)
}

domResizeListener.addListener(boxContentElement, test)
domResizeListener.addListener(boxContentElement, test2)

setTimeout(function () {
  domResizeListener.remove(boxElement)
  domResizeListener.remove(test)
}, 10000)
