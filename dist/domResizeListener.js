!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.DomResizeListener=n():e.DomResizeListener=n()}(window,(function(){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=2)}([function(e,n){function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t},function(e,n){!function(){for(var e=0,n=["webkit","moz"],t=0;t<n.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[n[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[t]+"CancelAnimationFrame"]||window[n[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n){var t=(new Date).getTime(),o=Math.max(0,16.7-(t-e)),r=window.setTimeout((function(){n(t+o)}),o);return e=t+o,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}()},function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));t(1);var o=t(0),r=t.n(o),i=function(e){return"object"===("undefined"==typeof HTMLElement?"undefined":r()(HTMLElement))?e instanceof HTMLElement:e&&"object"===r()(e)&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};function u(e,n){var t=[],o=[],r=[],u=[];function f(){var e=t.length;if(0!==e){for(var n=0;n<e;n++){var i="",a="";try{i=t[n].clientWidth,a=t[n].clientHeight}catch(e){continue}i===r[n]&&a===u[n]||(r[n]=i,u[n]=a,o[n](t[n]))}window.requestAnimationFrame(f)}}function a(){requestAnimationFrame(f)}this.addListener=function(e,n){if(!e||!n)throw new Error("Attribute required: attribute dom and callback is required");if(i(e)&&"function"==typeof n){var r=0===t.length;t.push(e),o.push(n),r&&a()}},this.remove=function(e){for(var n=i(e)?t:o,f=n.indexOf(e);f>-1;)t.splice(f,1),o.splice(f,1),r.splice(f,1),u.splice(f,1),f=n.indexOf(e)},this.clear=function(){t=[],o=[],r=[],u=[]},e&&n&&this.addListener(e,n),a()}}]).default}));