import DewIcon from './src/main.vue' // 导入组件
import '../../theme/font/dew-icons'

DewIcon.install = function (Vue) {
  Vue.component(DewIcon.name, DewIcon)
}

export default DewIcon
