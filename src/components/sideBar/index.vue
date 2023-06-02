<template>
  <div class="sideBar">
    <ul class="menuRoot">
      <li class="menuItem">
        <h3 class="title">杂项</h3>
        <ul class="subMenu">
          <li class="subMenuItem" :class="{ 'menuitemActive': currentMenu === 'log' }" @click="currentMenuFn('log')"><router-link to="/log">更新日志</router-link></li>
        </ul>
      </li>
      <li class="menuItem">
        <h3 class="title">起步</h3>
        <ul class="subMenu">
          <li class="subMenuItem" :class="{ 'menuitemActive': currentMenu === 'install' }" @click="currentMenuFn('install')"><router-link to="/install">安装</router-link></li>
          <li class="subMenuItem" :class="{ 'menuitemActive': currentMenu === 'usage' }" @click="currentMenuFn('usage')"><router-link to="/usage">极速上手</router-link></li>
        </ul>
      </li>
      <li class="menuItem">
        <h3 class="title">组件</h3>
        <ul class="subMenu">
          <li class="subMenuItem" :class="{ 'menuitemActive': currentMenu === 'button' }" @click="currentMenuFn('button')"><router-link to="/button">按钮（button）</router-link></li>
          <li class="subMenuItem" :class="{ 'menuitemActive': currentMenu === 'icon' }" @click="currentMenuFn('icon')"><router-link to="/icon">图标（icon）</router-link></li>
          <li class="subMenuItem" :class="{ 'menuitemActive': currentMenu === 'back-top' }" @click="currentMenuFn('back-top')"><router-link to="/back-top">返回顶部（back-top）</router-link></li>
          <li class="subMenuItem" :class="{ 'menuitemActive': currentMenu === 'dividing-line' }" @click="currentMenuFn('dividing-line')"><router-link to="/dividing-line">分界线（dividing-line）</router-link></li>
          <li class="subMenuItem" :class="{ 'menuitemActive': currentMenu === 'switch' }" @click="currentMenuFn('switch')"><router-link to="/switch">开关（switch）</router-link></li>
          <li class="subMenuItem" :class="{ 'menuitemActive': currentMenu === 'progress' }" @click="currentMenuFn('progress')"><router-link to="/progress">进度条（progress）</router-link></li>
          <li class="subMenuItem" :class="{ 'menuitemActive': currentMenu === 'count-move' }" @click="currentMenuFn('count-move')"><router-link to="/count-move">数字滚动（count-move）</router-link></li>
          <li class="subMenuItem" :class="{ 'menuitemActive': currentMenu === 'copy-text' }" @click="currentMenuFn('copy-text')"><router-link to="/copy-text">复制到剪贴板（copy-text）</router-link></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'sideBar',
  data () {
    return {
      // currentMenu: 'log'
    }
  },
  computed: {
    currentMenu () {
      return this.$store.state.currentMenu
    }
  },
  mounted () {
    this.$router.onReady(() => {
      this.$store.commit('updateSideBarMenuItem', this.$route.name)
    })
  },
  methods: {
    currentMenuFn (value) {
      // console.log('this.$store', this.$store)
      console.log(this.$route)
      // this.currentMenu = value
      this.$store.commit('updateSideBarMenuItem', value)
    }
  }
}
</script>

<style lang="stylus" scoped>
.sideBar
  position fixed
  z-index: 10
  width 260px
  height 100%
  padding 35px 0px 60px 20px
  background-color #fff
  .menuRoot
    .menuItem
      cursor pointer
      .title
        margin-bottom .3em
      .subMenu
        padding-left 1em
        .subMenuItem + .subMenuItem
          margin-top .5em
        .subMenuItem a
          display inline-block
          width 100%
    .menuItem + .menuItem
      margin-top .5em

.menuitemActive a
  color #2d8cf0
  font-weight 500
</style>
