<template>
  <header class="header">
    <a class="logo" href="javascript:void 0">
      <span>dew-ui</span>
    </a>
    <ul class="nav">
      <li class="navItem">
        <SearchForm />
      </li>
      <li class="navItem"><a class="link" href="javascript:void 0">指南</a><span class="arrow"></span></li>
      <li class="navItem"><a class="link" href="javascript:void 0">组件</a><span class="arrow"></span></li>
      <li class="navItem"><a class="link" href="javascript:void 0">版本</a><span class="arrow"></span></li>
      <li class="navItem"><a class="link" href="javascript:void 0">国际化</a><span class="arrow"></span></li>
      <li class="navItem"><a class="link" href="javascript:void 0">参与翻译</a><span class="arrow"></span></li>
    </ul>
  </header>
</template>

<script>
import SearchForm from './searchForm.vue'

export default {
  name: 'PageHeader',
  components: {
    SearchForm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.header
  width 100%
  padding 10px 30px 10px 60px
  position fixed
  left 0
  top 0
  z-index: 10
  background-color #fff
  display flex
  justify-content space-between
  align-items center
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
  transition: background-color 0.3s ease-in-out;
  .logo
    font-size 1.5em
    line-height 40px
    color #273849
    font-weight 500
  .nav
    .navItem
      position relative
      display inline-block
      margin 0 0.6em
      // padding-right 0.8em
</style>
