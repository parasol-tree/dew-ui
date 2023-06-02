<template>
  <i class="dew-icon-box">
    <svg ref="refDewSvg" class="dew-svg" aria-hidden="true" v-if="svgName"
      :class="[svgClass]"
      :style="iconStyles"
    >
      <use :xlink:href="'#dew-icon-' + svgName"></use>
    </svg>
    <i ref="refDewIcon" class="dew-icon" v-else
      :class="iconClassName"
      :style="iconStyles"
    >
    </i>
  </i>
</template>

<script>
import { getType, hasVal } from '../../../utils/assistFunction'

// 前缀 class 名, 写这里方便控制, 前缀 css 属性在 dew-icon.css 内
const prefixEsClassName = 'dew-icon'
/** svg 优先 iconfont 展示
 * @property {String} svgName svg 的 名字
 * @property {String} iconName icon 的 名字
 *
 * @property {String} iconClass icon 的 class
 * @property {String} svgClass svg 的 class
 *
 * @property {String} size icon 的 font-size
 * @property {String} styles icon 的 style
 * @property {String} color icon 的 color
 */
export default {
  name: 'DewIcon',
  props: {
    svgName: { type: String, default: '' },
    iconName: { type: String, default: '' },

    iconClass: { type: String, default: '' },
    svgClass: { type: String, default: '' },

    size: { type: [Number, String], default: '' },
    styles: { type: Object, default: () => ({}) },
    color: { type: String, default: '' }
  },
  computed: {
    iconClassName () {
      return [
        `${prefixEsClassName}-${this.iconName}`, this.iconClass
      ]
    },
    iconStyles () {
      const styleObj = {}
      if (this.size) {
        if (isNaN(Number(this.size))) {
          styleObj['font-size'] = this.size
        } else {
          styleObj['font-size'] = this.size + 'px'
        }
      }
      if (this.color) {
        if (this.svgName) {
          // styleObj.fill = 'red !important'
          styleObj.fill = 'red'
        } else {
          styleObj.color = this.color
        }
      }
      if (this.backgroundColor) {
        styleObj['background-color'] = this.backgroundColor
      }
      if (hasVal(this.styles) && getType(this.styles) === 'object') {
        for (const name of Object.keys(this.styles)) {
          styleObj[name] = this.styles[name]
        }
      }
      return styleObj
    }
    //
  }
}
</script>

<style scoped>
.dew-icon-box {
  display: inline-block;
  vertical-align: bottom;
}
.dew-svg {
  width: 1.2em;
  height: 1.2em;
  position: relative;
  top: 0.1em;
}
</style>
