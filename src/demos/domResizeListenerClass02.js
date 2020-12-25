// Returns true if it is a DOM node
function isNode (o) {
  return (
    typeof Node === 'object' ? o instanceof Node
      : o && typeof o === 'object' && typeof o.nodeType === 'number' && typeof o.nodeName === 'string'
  )
}

// Returns true if it is a DOM element
function isElement (o) {
  return (
    typeof HTMLElement === 'object' ? o instanceof HTMLElement // DOM2
      : o && typeof o === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName === 'string'
  )
}

function DomResizeListener (dom, callback) {
  // private attribute
  var doms = []
  var callbacks = []
  var widths = []
  var heights = []

  // private method: if size change, excute callback
  function resizeCall () {
    var len = doms.length
    // stop callback when nothing to listen
    if (len === 0) {
      return
    }

    for (var i = 0; i < len; i++) {
      var tempWidth = ''
      var tempHeight = ''
      try {
        tempWidth = doms[i].clientWidth
        tempHeight = doms[i].clientHeight
      } catch (error) {
        console.log('error', error)
        continue
      }
      if (tempWidth !== widths[i] || tempHeight !== heights[i]) {
        widths[i] = tempWidth
        heights[i] = tempHeight
        callbacks[i](doms[i])
      }
    }

    window.requestAnimationFrame(resizeCall)
  }

  // private method: init watcher
  function init () {
    // first, get the initial width and height
    requestAnimationFrame(resizeCall)
  }

  // public method: add listener of a dom
  this.addListener = function (dom, callback) {
    // if callback is not undefined, dom is required
    if (!dom || !callback) {
      throw new Error('Attribute required: attribute dom and callback is required')
    }
    // determine whether dom and callback is effective
    if (isElement(dom) && typeof callback === 'function') {
      const restart = doms.length === 0
      doms.push(dom)
      callbacks.push(callback)
      restart && init()
    }
  }

  // public method: remove dom listener
  this.remove = function (target) {
    var checkIsElement = isElement(target)
    var targetList = checkIsElement ? doms : callbacks
    var index = targetList.indexOf(target)
    while (index > -1) {
      doms.splice(index, 1)
      callbacks.splice(index, 1)
      widths.splice(index, 1)
      heights.splice(index, 1)
      index = targetList.indexOf(target)
    }
  }

  // public method: remove all listener
  this.clear = function () {
    doms = []
    callbacks = []
    widths = []
    heights = []
  }

  // add listener
  this.addListener(dom, callback)

  init(doms, callbacks)
}
