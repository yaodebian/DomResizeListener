// dom resize watcher class
function DomResizeWatcher(dom, callback) {
  // public attribute
  this.dom = dom
  this.callback = callback

  // private method: if size change, excute callback
  function resizeCall(width, height, dom, callback) {
    let tempWidth = '', tempHeight = ''
    try {
      console.log(null.aaa)
      tempWidth = dom.clientWidth
      tempHeight = dom.clientHeight 
    } catch (error) {
      console.log(error)
    }
    if (tempWidth !== width || tempHeight !== height) {
      callback({
        width: tempWidth,
        height: tempHeight
      })
    }

    window.requestAnimationFrame(resizeCall.bind(null, tempWidth, tempHeight, dom, callback))
  }

  // private method: init watcher
  function init(dom, callback) {
    let width = ''
    let height = ''

    // first, get the initial width and height
    requestAnimationFrame(resizeCall.bind(null, width, height, dom, callback))
  }

  // public method: stop watch
  this.remove = function() {

  }

  init(dom, callback)
}