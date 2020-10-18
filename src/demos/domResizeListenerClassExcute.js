// get the target element and watch it's size change
var boxElement = document.getElementById('box')

// resize callback
function resizeCall (sizeInfo) {
  var boxContentElement = document.getElementById('box-content')
  boxContentElement.innerText = 'width: ' + sizeInfo.width + ', height: ' + sizeInfo.height
}

var domResizeListener = new DomResizeListener(boxElement, resizeCall)
