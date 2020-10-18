// Returns true if it is a DOM node
export var isNode = function (o) {
  return (
    typeof Node === 'object' ? o instanceof Node
      : o && typeof o === 'object' && typeof o.nodeType === 'number' && typeof o.nodeName === 'string'
  )
}

// Returns true if it is a DOM element
export var isElement = function (o) {
  return (
    typeof HTMLElement === 'object' ? o instanceof HTMLElement // DOM2
      : o && typeof o === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName === 'string'
  )
}
