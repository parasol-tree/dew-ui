import DewIcon from './src/main.vue' // 导入组件

DewIcon.install = function (Vue) {
  Vue.component(DewIcon.name, DewIcon)
}

export default DewIcon
