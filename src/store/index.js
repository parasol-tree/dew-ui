import Vue from 'vue'
import Vuex from 'vuex'

import vuexPersistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    platform: 'pc',
    currentMenu: 'log'
  },
  mutations: {
    updatePlatform (state, data) {
      state.platform = data
    },
    updateSideBarMenuItem (state, data) {
      state.currentMenu = data
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    vuexPersistedstate({
      key: 'dew',
      storage: window.sessionStorage
    })
  ]
})
