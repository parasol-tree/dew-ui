import DewCountUp from './src/main.vue' // 导入组件

DewCountUp.install = function (Vue) {
  Vue.component(DewCountUp.name, DewCountUp)
}

export default DewCountUp
