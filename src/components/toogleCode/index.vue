<template>
  <div class="toogleCodeBox">
    <div class="btnCode" title="切换代码" @click="$emit('emit-toogleCode')"><span>切换代码</span></div>
  </div>
</template>

<script>
export default {
  name: 'toogleCode'
}
</script>

<style lang="stylus" scoped>
.toogleCodeBox
  width 100%
  margin-top: 10px;
  display flex
  justify-content flex-end
  align-items center
  .btnCode {
    width 100px
    height 20px
    padding-left 20px
    background #fff url("~@/assets/img/code.png") no-repeat left center
    background-size 20px 100%
    cursor pointer
  }
</style>
