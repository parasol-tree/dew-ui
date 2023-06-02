<template>
  <div class="refDewDividingLine" ref="refDewDividingLine"
    :style="styleObj"
  >
    <template v-if="hasSlot">
      <template v-if="direction === 'horizontal'">
        <template v-if="position === 'left'">
          <span class="line lineLeft_left"></span>
          <span class="slotBox"><slot></slot></span>
          <span class="line lineLeft_right"></span>
        </template>
        <template v-if="position === 'center'">
          <span class="line lineCenter"></span>
          <span class="slotBox"><slot></slot></span>
          <span class="line lineCenter"></span>
        </template>
        <template v-if="position === 'right'">
          <span class="line lineRight_left"></span>
          <span class="slotBox"><slot></slot></span>
          <span class="line lineRight_right"></span>
        </template>
      </template>
      <template v-else>
      </template>
    </template>
    <template v-else>
      <template v-if="direction === 'horizontal'">
        <span class="defaultLine"></span>
      </template>
      <template v-else>
        <span class="lineVertical"></span>
      </template>
    </template>
  </div>
</template>

<script>
import {
  oneOfFn // 判断 参数 是否是 其中之一
  // getCssStyleFn // 获取非行内元素的样式
} from '../../../utils/assistFunction.js'

const COLOR = '#dcdee2'

export default {
  name: 'DewDividingLine',
  data () {
    return {}
  },
  props: {
    // 分界线 标题 的 位置
    position: {
      type: String,
      default: 'center',
      // 必须是 其中之一
      validator (value) {
        return oneOfFn(value, ['left', 'right', 'center'])
      }
    },
    // 分界线的方向
    direction: {
      type: String,
      default: 'horizontal', // 默认 横向
      // 必须是 其中之一
      validator (value) {
        return oneOfFn(value, ['horizontal', 'vertical'])
      }
    },
    // 分界线类型
    waveType: {
      type: String,
      default: 'solid'
    },
    // 分界线颜色
    color: { type: String, default: COLOR },
    // 分界线 上下的 margin
    margin: { type: String }
    //
  },
  computed: {
    // 是否有 slot
    hasSlot () {
      return !!this.$slots.default
    },
    styleObj () {
      const obj = {}
      if (this.hasSlot) {
        if (this.direction === 'horizontal') {
          obj.width = '100%'
          this.margin ? (obj.margin = this.margin) : (obj.margin = '24px 0')
        } else {}
      } else {
        if (this.direction === 'horizontal') {
          obj.width = '100%'
        } else {
          this.margin ? (obj.margin = this.margin) : (obj.margin = '0 8px')
        }
      }
      return obj
    }
  },
  beforeDestroy () {
  },
  mounted () {
    if (this.hasSlot && this.direction === 'vertical') {
      console.warn('组件 DewDividingLine 将不会显示, 当 属性 direction 值 为 vertical 时')
      console.warn('the component of DewDividingLine does not display when the direction is vertical')
    }
    if (this.color !== COLOR) {
      const refDewDividingLine = this.$refs.refDewDividingLine
      refDewDividingLine.style.setProperty('--color', this.color)
    }
    if (this.waveType) {
      const refDewDividingLine = this.$refs.refDewDividingLine
      refDewDividingLine.style.setProperty('--waveType', this.waveType)
    }
  }
}
</script>

<style scoped>
.refDewDividingLine {
  /* width: 100%; */
  /* margin: 24px 0; */
  --color: #dcdee2;
  --waveType: solid;
  vertical-align: middle;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
}

.defaultLine {
  display: inline-block;
  width: 100%;
  height: 1px;
  border-bottom: 1px var(--waveType) var(--color);
}
.line {
  display: inline-block;
  height: 1px;
  border-bottom: 1px var(--waveType) var(--color);
}
.lineCenter {
  width: 0;
  flex: 1;
}
.lineLeft_left {
  width: 7%;
}
.lineLeft_right {
  width: 0;
  flex: 1;
}
.lineRight_left {
  width: 0;
  flex: 1;
}
.lineRight_right {
  width: 7%;
}
.lineVertical {
  width: 1px;
  height: 1em;
  border-left: 1px var(--waveType) var(--color);
  position: relative;
  top: -0.1em;
}
.slotBox {
  min-width: 10%;
  max-width: 60%;
  padding: 0 10px;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
