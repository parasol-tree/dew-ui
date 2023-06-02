import DewBackTop from './src/main.vue' // 导入组件

DewBackTop.install = function (Vue) {
  Vue.component(DewBackTop.name, DewBackTop)
}

export default DewBackTop
