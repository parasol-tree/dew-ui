import DewButton from './packages/button/index.js'
import DewIcon from './packages/icon/index.js'
import DewBackTop from './packages/back-top/index.js'

const install = function (Vue, opts = {}) {}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  DewButton,
  DewIcon,
  DewBackTop
}
