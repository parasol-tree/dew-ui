import DewButton from './packages/button/index.js'
import DewIcon from './packages/icon/index.js'
import DewBackTop from './packages/back-top/index.js'
import DewDividingLine from './packages/dividing-line/index.js'
import DewSwitch from './packages/switch/index.js'
import DewProgress from './packages/progress/index.js'
import DewCountUp from './packages/count-move/index.js'
import DewCopyText from './packages/copy-text/index.js'

const install = function (Vue, opts = {}) {}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  DewButton,
  DewIcon,
  DewBackTop,
  DewDividingLine,
  DewSwitch,
  DewProgress,
  DewCountUp,
  DewCopyText
}
