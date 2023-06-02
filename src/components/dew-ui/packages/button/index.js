import DewButton from './src/main.vue' // 导入组件

DewButton.install = function (Vue) {
  Vue.component(DewButton.name, DewButton)
}

export default DewButton
