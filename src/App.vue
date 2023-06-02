<template>
  <div class="App">
    <PageHeader />
    <SideBar />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/header/index.vue'
import SideBar from '@/components/sideBar/index.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    SideBar
  },
  created () {
    const isMobile = /iPad|iPhone|Android/i.test(navigator.userAgent)
    if (isMobile) {
      console.log('手机')
      this.$store.commit('updatePlatform', 'mobile')
    } else {
      console.log('PC')
      this.$store.commit('updatePlatform', 'pc')
    }
    addEventListener('resize', this.resize, false)
  },
  beforeDestroy () {
    removeEventListener('resize', this.resize)
  },
  methods: {
    resize () {
      const isMobile = /iPad|iPhone|Android/i.test(navigator.userAgent)
      if (isMobile) {
        console.log('手机')
        this.$store.commit('updatePlatform', 'mobile')
      } else {
        console.log('PC')
        this.$store.commit('updatePlatform', 'pc')
      }
    }
  }
}
</script>

<style lang="stylus">
.App
  padding-top 60px
  .content
    position relative
    padding 35px 0
    max-width 1000px
    margin 0 auto
    // margin-left 260px
    padding-left 50px
</style>
