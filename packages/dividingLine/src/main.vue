<template>
  <div
    ref="refDewDividingLine"
    :class="classNameDividingLine"
    :style="styleObjectRefDewDividingLine"
  >
    <span class="slotDividingLine" ref="refSlotDividingLine"
      v-if="hasSlot && direction === 'horizontal'"
    >
      <slot></slot>
    </span>
  </div>
</template>

<script>
const prefixEsClassName = 'dew-dividing-line' // 前缀 class 名, 写这里方便控制
const LEFT = 'left'
const RIGHT = 'right'
const CENTER = 'center'

const HORIZONTAL = 'horizontal'
const VERTICAL = 'vertical'

const SOLID = 'solid'
const DASHED = 'dashed'
const WAVY_LINE = 'wavyLine'

const COLOR = '#e8eaec'

import {
  oneOfFn, // 判断 参数 是否是 其中之一
  getCssStyleFn // 获取非行内元素的样式
} from '../../../utils/assistFunction.js'

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
      default: HORIZONTAL, // 默认 横向
      // 必须是 其中之一
      validator (value) {
        return oneOfFn(value, [HORIZONTAL, VERTICAL])
      }
    },
    // 分界线类型
    type: {
      type: String,
      default: SOLID,
      // 必须是 其中之一
      validator (value) {
        return oneOfFn(value, [SOLID, DASHED, WAVY_LINE])
      }
    },
    // 分界线颜色
    color: {
      type: String,
      default: COLOR
    },
    // 分界线 上下的 margin
    margin: {
      type: Number,
      default: 10
    }
    //
  },
  computed: {
    // 是否有 slot
    hasSlot() {
      // console.log(this.$slots.default, 'this.$slots.default')
      // console.log(!!this.$slots.default, '!!this.$slots.default')
      return !!this.$slots.default
    },
    classNameDividingLine () {
      return [
        `${prefixEsClassName}`,
        {
          [`${prefixEsClassName}-${this.direction}`]: !this.hasSlot, // 分界线 方向
          [`${prefixEsClassName}-${this.direction}-${this.type}`]: !this.hasSlot, // 分界线 类型
          [`${prefixEsClassName}-${this.direction}-${this.type}-slot`]: this.hasSlot, // 分界线 类型
        }
      ]
    },
    styleObjectRefDewDividingLine () {
      let styleObj = {}
      // 只要横向时才设置 分界线的上下 margin
      if (this.direction === HORIZONTAL) {
        styleObj['margin-top'] = `${this.margin}px!important`
        styleObj['margin-bottom'] = `${this.margin}px!important`
      }
      if (this.direction === VERTICAL) {
        styleObj['margin-left'] = `${this.margin}px!important`
        styleObj['margin-right'] = `${this.margin}px!important`
      }
      return styleObj
    }
    //
  },
  beforeDestroy () {
    if (this.position == CENTER) {
      document.styleSheets[0].deleteRule(0)
      document.styleSheets[0].deleteRule(1)
    }
    //
  },
  mounted () {
    if (this.hasSlot && this.direction === VERTICAL) {
      console.warn('组件 DewDividingLine 将不会显示, 当 属性 direction 值 为 vertical 时')
      console.warn('the component of DewDividingLine does not display when the direction is vertical')
    }
    // 横向
    if (this.color !== COLOR) {
      const refDewDividingLine = this.$refs.refDewDividingLine
      refDewDividingLine.style.setProperty('--color', this.color)
    }
    // 设置 分界线 内 标题的位置, 左侧顶宽 右侧自适应, 右侧顶宽左侧自适应
    this.setPosition()
    //
  },
  methods: {
    // 自身水平有限, 目前还没有办法 全部用 css 实现
    setPosition () {
      // solid
      if (this.position === LEFT && this.type === SOLID) {
        document.styleSheets[0].insertRule('.dew-dividing-line-horizontal-solid-slot:before { width: 7%!important }', 0)
        document.styleSheets[0].insertRule('.dew-dividing-line-horizontal-solid-slot:after { flex: 1 }', 0)
      }
      if (this.position === RIGHT && this.type === SOLID) {
        document.styleSheets[0].insertRule('.dew-dividing-line-horizontal-solid-slot:before { flex: 1 }', 0)
        document.styleSheets[0].insertRule('.dew-dividing-line-horizontal-solid-slot:after { width: 7%!important }', 0)
      }
      // dashed
      if (this.position === LEFT && this.type === DASHED) {
        document.styleSheets[0].insertRule('.dew-dividing-line-horizontal-dashed-slot:before { width: 7%!important }', 0)
        document.styleSheets[0].insertRule('.dew-dividing-line-horizontal-dashed-slot:after { flex: 1 }', 0)
      }
      if (this.position === RIGHT && this.type === DASHED) {
        document.styleSheets[0].insertRule('.dew-dividing-line-horizontal-dashed-slot:before { flex: 1 }', 0)
        document.styleSheets[0].insertRule('.dew-dividing-line-horizontal-dashed-slot:after { width: 7%!important }', 0)
      }
      // wavyLine
      if (this.position === LEFT && this.type === WAVY_LINE) {
        document.styleSheets[0].insertRule('.dew-dividing-line-horizontal-wavyLine-slot:before { width: 7%!important }', 0)
        document.styleSheets[0].insertRule('.dew-dividing-line-horizontal-wavyLine-slot:after { flex: 1 }', 0)
      }
      if (this.position === RIGHT && this.type === WAVY_LINE) {
        document.styleSheets[0].insertRule('.dew-dividing-line-horizontal-wavyLine-slot:before { flex: 1 }', 0)
        document.styleSheets[0].insertRule('.dew-dividing-line-horizontal-wavyLine-slot:after { width: 7%!important }', 0)
      }
    }
    //
  }
  //
}
</script>

<style scoped>
  span {
    font-style: normal;
  }
  .dew-dividing-line {
    --color: #e8eaec;
    box-sizing: border-box;
    width: 1px;
    height: 1px;
    padding: 0 10px;
    position: relative;
    font-size: 14px;
    line-height: 1.5;
    white-space: nowrap;
    color: #515a6e;
    vertical-align: middle;
  }
  /*横向 无插槽内容*/
  .dew-dividing-line-horizontal {
    width: 100%;
    height: 1px;
    clear: both;
  }
  .dew-dividing-line-horizontal:before {
    display: block;
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .dew-dividing-line-horizontal-solid:before {
    background-color: var(--color);
  }
  .dew-dividing-line-horizontal-dashed:before {
    height: 0;
    border-bottom: 1px dashed var(--color);
  }
  .dew-dividing-line-horizontal-wavyLine:before {
    height: .25rem;
    background:
        linear-gradient(135deg, transparent, transparent 45%, var(--color), transparent 55%, transparent 100%),
        linear-gradient(45deg, transparent, transparent 45%, var(--color), transparent 55%, transparent 100%);
    background-size: .5rem .5rem;
    background-repeat: repeat-x, repeat-x;
  }
  /*竖向 无插槽内容*/
  .dew-dividing-line-vertical {
    display: inline-block;
    width: 1px;
    height: .9em;
    margin: 0 8px;
    padding: 0;
    left: 0;
    top: -.06em;
    vertical-align: middle;
  }
  .dew-dividing-line-vertical:before {
    display: block;
    content: '';
    width: 1px;
    height: .9em;
    position: absolute;
    left: 0;
    top: 0;
  }
  .dew-dividing-line-vertical-solid:before {
    background-color: var(--color);
  }
  .dew-dividing-line-vertical-dashed:before {
    height: .9em;
    border-left: 1px dashed var(--color);
  }
  .dew-dividing-line-vertical-wavyLine:before {
    width: 4px;
    height: .9em;
    background:
        linear-gradient(135deg, transparent, transparent 45%, var(--color), transparent 55%, transparent 100%),
        linear-gradient(45deg, transparent, transparent 45%, var(--color), transparent 55%, transparent 100%);
    background-size: .5rem .5rem;
    background-repeat: repeat-y, repeat-y;
  }
  /*插槽*/
  .slotDividingLine {
    min-width: 100px;
    max-width: 100%;
    padding: 0 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
    color: #17233d;
    font-size: 16px;
    background-color: #fff;
  }
  /*横向 有插槽内容*/
  .dew-dividing-line-horizontal-solid-slot,
  .dew-dividing-line-horizontal-dashed-slot,
  .dew-dividing-line-horizontal-wavyLine-slot {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 24px;
    line-height: 24px;
    text-align: center;
  }
  .dew-dividing-line-horizontal-solid-slot:before,
  .dew-dividing-line-horizontal-solid-slot:after,
  .dew-dividing-line-horizontal-dashed-slot:before,
  .dew-dividing-line-horizontal-dashed-slot:after,
  .dew-dividing-line-horizontal-wavyLine-slot:before,
  .dew-dividing-line-horizontal-wavyLine-slot:after
   {
    display: table-cell;
    content: "";
    width: 50%;
    height: 1px;
  }
  /*solid*/
  .dew-dividing-line-horizontal-solid-slot:before {
    background-color: var(--color);
  }
  .dew-dividing-line-horizontal-solid-slot:after {
    background-color: var(--color);
  }
  /*dashed*/
  .dew-dividing-line-horizontal-dashed-slot:before {
    height: 0;
    border-top: 1px dashed var(--color);
  }
  .dew-dividing-line-horizontal-dashed-slot:after {
    height: 0;
    border-top: 1px dashed var(--color);
  }
  /*wavyLine*/
  .dew-dividing-line-horizontal-wavyLine-slot:before {
    height: .25rem;
    background:
        linear-gradient(135deg, transparent, transparent 45%, var(--color), transparent 55%, transparent 100%),
        linear-gradient(45deg, transparent, transparent 45%, var(--color), transparent 55%, transparent 100%);
    background-size: .5rem .5rem;
    background-repeat: repeat-x, repeat-x;
  }
  .dew-dividing-line-horizontal-wavyLine-slot:after {
    height: .25rem;
    background:
        linear-gradient(135deg, transparent, transparent 45%, var(--color), transparent 55%, transparent 100%),
        linear-gradient(45deg, transparent, transparent 45%, var(--color), transparent 55%, transparent 100%);
    background-size: .5rem .5rem;
    background-repeat: repeat-x, repeat-x;
  }
</style>
