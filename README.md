# DomResizeListener

A dom resize listener base on javascript.

## Installation

First, install [Node.js][0]. Then:

```
npm i dom-resize-listener
```

## Usage

first, import the listener:

```
import  DomResizeListener from 'dom-resize-listener'
```

second, initialize the instance:

```
var domResizeListener = new DomResizeListener()
```

then, you can use it to listen a dom's size:

```
// target element for listening
var box = document.getElementById('box')

// excute when the size change
function callback() {
  console.log('my size has changed')
}

// listen
domResizeListener.addListener(box, callback)
```

you can also excute listening when initilize the instance:

```
// target element for listening
var box = document.getElementById('box')

// excute when the size change
function callback() {
  console.log('my size has changed')
}

// listen
var domResizeListener = new DomResizeListener(box, callback)
```

## API

**addListener:** Func(dom, callback)

By this method, you can listen a dom's size and excute callback function when the size change. No matter how many elements are listened, only one listener is needed because we set an Array internal to store elements.

**remove:** Func(dom)

remove the dom's listener.

**clear:** Func()

remove all listeners.

remove

## License

MIT

[0]: http://nodejs.org
