<template>
  <form class="searchForm">
    <input type="text" class="searchInput" aria-label="搜索" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="algolia-autocomplete-listbox-0" dir="auto" placeholder="暂不提供搜索">
  </form>
</template>

<script>
export default {
  name: 'searchForm'
}
</script>

<style lang="stylus" scoped>
.searchInput
  height 30px
  line-height 30px
  box-sizing border-box
  padding 0 15px 0 30px
  border 1px solid #e3e3e3
  color #273849
  outline none
  border-radius 15px
  margin-right 10px
  transition border-color 0.2s ease
  background #fff url("~@/assets/img/search.png") 8px 5px no-repeat
  background-size 20px
  vertical-align middle !important
  &:focus
    // border-color #42b983
    border-color #2d8cf0
</style>
