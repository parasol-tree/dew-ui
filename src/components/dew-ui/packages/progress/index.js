import DewProgress from './src/main.vue' // 导入组件

DewProgress.install = function (Vue) {
  Vue.component(DewProgress.name, DewProgress)
}

export default DewProgress
