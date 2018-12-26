<template>
  <i class="dew-icon"
    :class="iconClassName"
    :style="iconStyles"
  >
    123icon
  </i>
</template>

<script>
const classNameConstant = 'dew-icon'
export default {
  name: 'DewIcon',
  props: {
    // 传过来的 class 名字
    iconCategory: {
      type: String,
      default: ''
    },
    size: [Number, String],
    color: String
  },
  computed: {
    iconClassName () {
      return [
        // 可以在这里加 class名 例如 `${classNameConstant}`,
        {
          [`${classNameConstant}-${this.iconCategory}`]: this.iconCategory !== ''
        }
      ]
    },
    iconStyles () {
        let styleObj = {}
        if (this.size) {
            styleObj['font-size'] = `${this.size}px`
        }
        if (this.color) {
            styleObj.color = this.color
        }
        return styleObj
    }
  },
  mounted () {
    // console.log(this.iconCategory, 'iconCategory')
  }
}
</script>

<style scoped>
</style>
