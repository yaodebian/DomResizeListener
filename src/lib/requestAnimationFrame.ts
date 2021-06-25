(function () {
  let lastTime = 0
  const vendors = ['webkit', 'moz']

  // if window.requestAnimationFrame is undefined, we try to use prefix definition.
  for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || // the name is different in webkit browser
                                  window[vendors[x] + 'CancelRequestAnimationFrame']
  }

  // if prefix definition is not compatible, we are using setTimeout.
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) {
      const currTime = new Date().getTime()
      const timeToCall = Math.max(0, 16.7 - (currTime - lastTime))
      const id = window.setTimeout(function () {
        callback(currTime + timeToCall)
      }, timeToCall)
      lastTime = currTime + timeToCall
      return id
    }
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id)
    }
  }
})()
