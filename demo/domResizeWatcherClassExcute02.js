// get the target element and watch it's size change
var boxElement = document.getElementById('box')
var boxContentElement = document.getElementById('box-content')

// resize callback
function resizeCall(sizeInfo) {
  var boxContentElement = document.getElementById('box-content')
  boxContentElement.innerText = 'width: ' + sizeInfo.clientWidth + ', height: ' + sizeInfo.clientHeight
}

let domResizeWatcher = new DomResizeWatcher(boxElement, resizeCall)

function test() {
  console.log(111)
}

function test2() {
  console.log(222)
}

domResizeWatcher.addListener(boxContentElement, test)
domResizeWatcher.addListener(boxContentElement, test2)

setTimeout(function() {
  domResizeWatcher.remove(test)
}, 10000)