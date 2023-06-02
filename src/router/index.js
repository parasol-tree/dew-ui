import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/log',
    name: 'log',
    component: () => import(/* webpackChunkName: "log" */ '@/views/log/index.vue')
  },
  {
    path: '/install',
    name: 'install',
    component: () => import(/* webpackChunkName: "install" */ '@/views/install/index.vue')
  },
  {
    path: '/usage',
    name: 'usage',
    component: () => import(/* webpackChunkName: "usage" */ '@/views/usage/index.vue')
  },
  {
    path: '/button',
    name: 'button',
    component: () => import(/* webpackChunkName: "pageButton" */ '@/views/button/index.vue')
  },
  {
    path: '/icon',
    name: 'icon',
    component: () => import(/* webpackChunkName: "icon" */ '@/views/icon/index.vue')
  },
  {
    path: '/back-top',
    name: 'back-top',
    component: () => import(/* webpackChunkName: "backTop" */ '@/views/backTop/index.vue')
  },
  {
    path: '/dividing-line',
    name: 'dividing-line',
    component: () => import(/* webpackChunkName: "dividingLine" */ '@/views/dividingLine/index.vue')
  },
  {
    path: '/switch',
    name: 'switch',
    component: () => import(/* webpackChunkName: "switch" */ '@/views/switch/index.vue')
  },
  {
    path: '/progress',
    name: 'progress',
    component: () => import(/* webpackChunkName: "progress" */ '@/views/progress/index.vue')
  },
  {
    path: '/count-move',
    name: 'count-move',
    component: () => import(/* webpackChunkName: "dewCountUp" */ '@/views/count-move/index.vue')
  },
  {
    path: '/copy-text',
    name: 'copy-text',
    component: () => import(/* webpackChunkName: "dewCopyText" */ '@/views/copy-text/index.vue')
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    // 会匹配所有路径
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/404/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  store.commit('updateSideBarMenuItem', to.name)
  next()
})

export default router
