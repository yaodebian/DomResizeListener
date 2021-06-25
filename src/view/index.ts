import DomResizeListener from '../lib/domResizeListener'

// get the target element and watch it's size change
const boxElement: HTMLElement = document.getElementById('box') as HTMLElement
const boxContentElement: HTMLElement = document.getElementById('box-content') as HTMLElement

// resize callback
function resizeCall (sizeInfo: HTMLElement): void {
  const boxContentElement = document.getElementById('box-content')
  boxContentElement && (boxContentElement.innerText = 'width: ' + sizeInfo.clientWidth + ', height: ' + sizeInfo.clientHeight)
}

const domResizeListener = new DomResizeListener()
domResizeListener.addListener(boxElement, resizeCall)

function test (): void {
  console.log('111')
}

function test2 (): void {
  console.log(222)
}

domResizeListener.addListener(boxContentElement, test)
domResizeListener.addListener(boxContentElement, test2)

setTimeout(function () {
  domResizeListener.remove(boxElement)
  domResizeListener.remove(test)
  domResizeListener.clear()
}, 10000)

setTimeout(function () {
  domResizeListener.addListener(boxContentElement, test)
}, 20000)
