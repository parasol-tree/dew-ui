<template>
  <i>
    <svg ref="refDewSvg" aria-hidden="true"></svg>
    <i ref="refDewIcon"
      :class="iconClassName"
      :style="iconStyles"
      @click="handleEmitIconClick"
      @dblclick="handleEmitIconDblclick"
    >
    </i>
  </i>
  <!-- <i ref="refDewIcon"
    :class="iconClassName"
    :style="iconStyles"
    @click="handleEmitIconClick"
    @dblclick="handleEmitIconDblclick"
  >
  </i> -->
</template>

<script>
import {
  oneOfFn // 判断 参数 是否是 其中之一
} from '../../../utils/assistFunction.js'

// 前缀 class 名, 写这里方便控制, 前缀 css 属性在 dew-icon.css 内
const prefixEsClassName = 'dew-icon'

export default {
  name: 'DewIcon',
  props: {
    // 传过来的 class 名字
    iconCategory: {
      type: String,
      default: ''
    },
    size: {
      type: [Number, String],
      default: null
    },
    unit: {
      type: String,
      default: 'px',
      // 必须是 其中之一
      validator (value) {
        return oneOfFn(value, ['px', 'em', 'rem', 'vh', 'vw'])
      }
    },
    color: {
      type: String,
      default: null
    },
    backgroundColor: {
      type: String,
      default: null
    }
  },
  computed: {
    iconClassName () {
      return [
        // 可以在这里加 class名 例如 `${classNameConstant}`,
        {
          [`${prefixEsClassName}-${this.iconCategory}`]: this.iconCategory !== ''
        }
      ]
    },
    iconStyles () {
      const styleObj = {}
      if (this.size && this.unit) {
        styleObj['font-size'] = `${this.size}${this.unit}`
      }
      if (this.color) {
        styleObj.color = this.color
      }
      if (this.backgroundColor) {
        styleObj['background-color'] = this.backgroundColor
      }
      return styleObj
    }
    //
  },
  methods: {
    handleEmitIconClick (event) {
      const params = {
        iconCategory: this.iconCategory,
        size: this.size,
        unit: this.unit,
        color: this.color,
        backgroundColor: this.backgroundColor
      }
      this.$emit('click', event, params)
    },
    handleEmitIconDblclick (event) {
      const params = {
        iconCategory: this.iconCategory,
        size: this.size,
        unit: this.unit,
        color: this.color,
        backgroundColor: this.backgroundColor
      }
      this.$emit('dblclick', event, params)
    }
    //
  }
  //
}
</script>

<style scoped>
</style>
