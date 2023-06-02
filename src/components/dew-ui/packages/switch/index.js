import DewSwitch from './src/main.vue' // 导入组件

DewSwitch.install = function (Vue) {
  Vue.component(DewSwitch.name, DewSwitch)
}

export default DewSwitch
