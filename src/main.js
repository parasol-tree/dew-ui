import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/reset.css'
import '@/components/dew-ui/theme/font/dew-icons.css'
import 'highlight.js/styles/monokai-sublime.css'

import VueHighlightJS from 'vue-highlightjs'

import {
  DewButton,
  DewIcon,
  DewBackTop,
  DewDividingLine,
  DewSwitch,
  DewProgress,
  DewCountUp,
  DewCopyText
} from '@/components/dew-ui/index.js'
import ToogleCode from '@/components/toogleCode/index.vue'

Vue.use(VueHighlightJS)

Vue.use(DewButton)
Vue.use(DewIcon)
Vue.use(DewBackTop)
Vue.use(DewDividingLine)
Vue.use(DewSwitch)
Vue.use(DewProgress)
Vue.use(DewCountUp)
Vue.use(DewCopyText)
Vue.component('ToogleCode', ToogleCode)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
