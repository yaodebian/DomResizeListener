// get the target element and watch it's size change
var boxElement = document.getElementById('box')
var boxContentElement = document.getElementById('box-content')

// resize callback
function resizeCall(sizeInfo) {
  var boxContentElement = document.getElementById('box-content')
  boxContentElement.innerText = 'width: ' + sizeInfo.clientWidth + ', height: ' + sizeInfo.clientHeight
}

let domResizeWatcher = new DomResizeWatcher(boxElement, resizeCall)
domResizeWatcher.addListener(boxContentElement, function () {
  console.log(111)
})