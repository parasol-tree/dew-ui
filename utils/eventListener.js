import {
  deepCopyFn, // 深克隆
  passiveSupportedFn // 检查浏览器的 addEventListener 是否支持 passive
} from './assistFunction.js'

// addListener
export const addListener = (function () {
  if (window.addEventListener || document.addEventListener) {
    return function(element = window || document, event, handler, options = false) {
      if (element && event && handler) {
          let optionReal = deepCopyFn(options)
          if (Object.prototype.toString.call(options) === '[object Object]' && options.hasOwnProperty('passive') && !passiveSupportedFn()) {
            Object.keys(optionReal).length === 1 ? optionReal = false : delete optionReal.passive
          }
          element.addEventListener(event, handler, optionReal)
      }
    }
  } else {
    return function(element = window || document, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()
// removeListener
export const removeListener = (function() {
  if (window.removeEventListener || document.removeEventListener) {
    return function(element = window || document, event, handler, options = false) {
      if (element && event) {
          let optionReal = deepCopyFn(options)
          if (Object.prototype.toString.call(options) === '[object Object]' && options.hasOwnProperty('passive') && !passiveSupportedFn()) {
            Object.keys(optionReal).length === 1 ? optionReal = false : delete optionReal.passive
          }
          element.removeEventListener(event, handler, optionReal)
      }
    }
  } else {
    return function(element = window || document, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()
