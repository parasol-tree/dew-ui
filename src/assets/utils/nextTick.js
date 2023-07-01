import { getType } from './getType'
import { isNativeCode } from './isNativeCode'
import { isIE, isIOS } from './browser'

let _timer = null
const callbackQuesuArr = []
let isRunning = false
let fn

function flushCallbackQueueFn () {
  isRunning = false
  clearTimeout(_timer)
  _timer = null
  callbackQuesuArr.forEach(item => item())
}
// 支持 Promise
if (typeof Promise !== 'undefined' && isNativeCode(Promise)) {
  fn = () => {
    Promise.resolve().then(flushCallbackQueueFn)
    if (isIOS) setTimeout(function () {})
  }
} else if (!isIE && typeof MutationObserver !== 'undefined' && ( // 不是 IE, 支持 MutationObserver
  isNativeCode(MutationObserver) || MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  let counter = 1
  const observer = new MutationObserver(flushCallbackQueueFn)
  const textNode = document.createTextNode(String(counter))
  observer(textNode, { characterData: true })
  fn = () => {
    counter = counter + 1
    textNode.data = String(counter)
  }
} else if (typeof setImmediate !== 'undefined' && isNativeCode(setImmediate)) { // 支持 setImmediate
  fn = () => {
    setImmediate(flushCallbackQueueFn)
  }
} else { // 最后兼容为 setTimeout
  fn = () => {
    _timer = setTimeout(flushCallbackQueueFn, 0)
  }
}

const nextTick = function (callback = null) {
  if (typeof callback !== 'function') {
    console.error('nextTick: expect a function', 'but got a ' + getType(callback))
    return false
  }
  callbackQuesuArr.push(callback)
  if (isRunning) {
    return false
  }
  isRunning = true
  fn()
}

export {
  nextTick
}
