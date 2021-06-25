!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.DomResizeListener=t():e.DomResizeListener=t()}(window,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";var i=n(0),r=i(n(2)),o=i(n(3));Object.defineProperty(t,"__esModule",{value:!0}),n(4);var s=n(5),a=function(){function e(t,n){var i=this;(0,r.default)(this,e),this.doms=[],this.callbacks=[],this.widths=[],this.heights=[],this.compatibleWithResizeObserver="function"==typeof ResizeObserver,this.resizeObserverInstance=null,this.resizeObserverCall=function(e){for(var t=e.length,n=0;n<t;n++)for(var r=0;r<i.doms.length;r++)e[n].target===i.doms[r]&&i.callbacks[r](i.doms[r])},this.resizeCall=function(){var e=i.doms.length;if(0!==e){for(var t=0;t<e;t++){var n=void 0,r=void 0;try{n=i.doms[t].clientWidth,r=i.doms[t].clientHeight}catch(e){continue}n===i.widths[t]&&r===i.heights[t]||(i.widths[t]=n,i.heights[t]=r,i.callbacks[t](i.doms[t]))}window.requestAnimationFrame(i.resizeCall)}},t&&n&&this.addListener(t,n)}return(0,o.default)(e,[{key:"init",value:function(){requestAnimationFrame(this.resizeCall)}},{key:"addListener",value:function(e,t){if(!e||!t)throw new Error("Attribute required: attribute dom and callback is required");if(s.isElement(e)&&"function"==typeof t){var n=0===this.doms.length,i=this.doms.indexOf(e);if(this.doms.push(e),this.callbacks.push(t),this.widths.push(0),this.heights.push(0),this.compatibleWithResizeObserver&&-1===i)return this.resizeObserverInstance=this.resizeObserverInstance||new ResizeObserver(this.resizeObserverCall),void this.resizeObserverInstance.observe(e);n&&this.init()}}},{key:"remove",value:function(e){for(var t=s.isElement(e)?this.doms:this.callbacks,n=t.indexOf(e),i=this.doms[n];n>-1;)this.doms.splice(n,1),this.callbacks.splice(n,1),this.widths.splice(n,1),this.heights.splice(n,1),n=t.indexOf(e);this.compatibleWithResizeObserver&&this.resizeObserverInstance&&(this.resizeObserverInstance.unobserve(i),0===this.doms.length&&(this.resizeObserverInstance=null))}},{key:"clear",value:function(){this.doms=[],this.callbacks=[],this.widths=[],this.heights=[],this.compatibleWithResizeObserver&&this.resizeObserverInstance&&(this.resizeObserverInstance.disconnect(),this.resizeObserverInstance=null)}}]),e}();t.default=a},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}e.exports=function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}},function(e,t,n){"use strict";!function(){for(var e=0,t=["webkit","moz"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t){var n=(new Date).getTime(),i=Math.max(0,16.7-(n-e)),r=window.setTimeout((function(){t(n+i)}),i);return e=n+i,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}()},function(e,t,n){"use strict";var i=n(0)(n(6));Object.defineProperty(t,"__esModule",{value:!0}),t.isElement=t.isNode=void 0;t.isNode=function(e){return"object"===("undefined"==typeof Node?"undefined":(0,i.default)(Node))?e instanceof Node:e&&"object"===(0,i.default)(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName};t.isElement=function(e){return"object"===("undefined"==typeof HTMLElement?"undefined":(0,i.default)(HTMLElement))?e instanceof HTMLElement:e&&"object"===(0,i.default)(e)&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName}},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n}]).default}));