// dom resize watcher class

// Compatible with requestAnimationFrame
import './requestAnimationFrame.js'

export default function DomResizeWatcher(dom, callback) {
  // private attribute
  var doms = []
  var callbacks = []

  // private method: if size change, excute callback
  function resizeCall(widths, heights, doms, callbacks) {
    var len = doms.length
    for (var i = 0; i < len; i++) {
      var tempWidth = '', tempHeight = ''
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
        callback(doms[i])
      } 
    }

    window.requestAnimationFrame(resizeCall.bind(null, widths, heights, doms, callbacks))
  }

  // private method: init watcher
  function init(doms, callbacks) {
    var len = doms.length
    var widths = new Array(len)
    var heights = new Array(len)

    // first, get the initial width and height
    requestAnimationFrame(resizeCall.bind(null, widths, heights, doms, callbacks))
  }

  // public method: add listener of a dom
  this.addListener = function (dom, callback) {
    // if callback is not undefined, dom is required
    if (!dom && callback) {
      throw new Error('Attribute required: attribute dom is required')
    }
    // if dom is not undefined
    if (dom) {
      var func = typeof callback === 'function' ? callback : function() {}
      doms.push(dom)
      callbacks.push(func)
    }
  }

  // public method: remove dom listener
  this.remove = function (dom) {
    var index = doms.indexOf(dom)
    doms.splice(index, 1)
    callbacks.splice(index, 1)
  }

  // public method: remove all listener
  this.clear = function () {
    doms = []
    callbacks = []
  }

  // add listener
  this.addListener(dom, callback)

  init(doms, callbacks)
}