// 返回顶部的动画,   ie 的 别看我, el 本来想默认给个 window 的,想想算了
export function animationBackTopFn (el, from = 0, to, duration = 500, endCallback) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 1000/60)
      }
    )
  }
  const differenceNumber = Math.abs(from - to) // 差值
  const step = Math.ceil(differenceNumber / duration * 50) // 步数

  function _scroll(start, end, step) {
    if (start === end) {
      endCallback && endCallback()
      return false
    }
    // 滚动的值
    let value = (start + step > end) ? end : start + step
    if (start > end) {
      value = (start - step < end) ? end : start - step
    }
    if (el === window) {
      window.scrollTo(value, value)
    } else {
      el.scrollTop = value
    }
    window.requestAnimationFrame(() => _scroll(value, end, step))
  }
  _scroll(from, to, step)
}

// 检测数据类型 字母 o 大写, 区别 js 原生的 typeof
export function typeOf(obj) {
  const toString = Object.prototype.toString
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return map[toString.call(obj)]
}

// 深克隆
export function deepCopyFn (data) {
  const t = typeOf(data)
  let o
  if (t === 'array') {
    o = []
  } else if (t === 'object') {
    o = {}
  } else {
    return data
  }
  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopyFn(data[i]))
    }
  } else if ( t === 'object') {
    for (let i in data) {
        o[i] = deepCopyFn(data[i])
    }
  }
  return o
}

// 校验浏览器是否支持 addEventListener 的 passive 属性
export function passiveSupportedFn () {
  let passiveSupported = false

  try {
    let options = Object.defineProperty({}, 'passive', {
      get: function() {
        passiveSupported = true
      }
    })
    window.addEventListener('test', null, options)
  } catch(err) {
    console.error(err, "err 校验 浏览器 的 addEventListener 是否支持 passive 属性时出错 , Error while check for the 'passive' of addEventListener option")
  }
  return passiveSupported
}
