// 返回顶部的动画,   ie 的 别看我, el 本来想默认给个 window 的,想想算了
export function animationBackTopFn (el, from = 0, to, duration = 500, endCallback) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 1000 / 60)
      }
    )
  }
  const differenceNumber = Math.abs(from - to) // 差值
  const step = Math.ceil(differenceNumber / duration * 50) // 步数

  function _scroll (start, end, step) {
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

// 检测数据类型
export function getType (data) {
  const type = typeof data
  if (type !== 'object') {
    return type
  }
  const res = Object.prototype.toString.call(data)
  return res.slice(8, res.length - 1).toLowerCase()
}

// 深克隆
export function deepCopyFn (data) {
  const t = getType(data)
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
  } else if (t === 'object') {
    for (const i in data) {
      o[i] = deepCopyFn(data[i])
    }
  }
  return o
}

// 校验浏览器是否支持 addEventListener 的 passive 属性
export function passiveSupportedFn () {
  let passiveSupported = false

  try {
    const options = Object.defineProperty({}, 'passive', {
      get: function () {
        passiveSupported = true
      }
    })
    window.addEventListener('test', null, options)
  } catch (err) {
    console.error(err, "err 校验 浏览器 的 addEventListener 是否支持 passive 属性时出错 , Error while check for the 'passive' of addEventListener option")
  }
  return passiveSupported
}

// 判断 参数 是否是 valueList 的 其中之一
export function oneOfFn (value, valueList) {
  if (getType(valueList) !== 'array') {
    throw new Error('函数 oneOfFn 的第二个参数 数据类型必须是 数组')
  }
  for (let i = 0, l = valueList.length; i < l; i++) {
    if (value === valueList[i]) {
      return true
    }
  }
  return false
}

// 获取非行内元素的样式
export function getCssStyleFn (obj, attr) {
  if (!obj) {
    throw new Error('函数 getCssStyleFn 第一个参数不能为空, The function getCssStyleFn The first argument cannot be empty')
  }
  if (getType(attr) !== 'string' && !attr) {
    throw new Error('函数 getCssStyleFn 第二个参数类型必须是 string, The function getCssStyleFn The second parameter type must be string')
  }
  return window.getComputedStyle ? window.getComputedStyle(obj, null)[attr] : obj.currentStyle[attr]
}

// 是否有值 ['true 有值', 'false 没有值']
export function hasVal (val) {
  if (getType(val) === 'array') {
    return val.length > 0
  }
  if (getType(val) === 'object') {
    return Object.keys(val).length > 0
  }
  return val !== '' && val !== null && val !== 'null' && val !== undefined && val !== 'undefined'
}
