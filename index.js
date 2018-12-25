import DewButton from './packages/button/index.js'

const install = function (Vue, opts = {}) {}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  DewButton
}
