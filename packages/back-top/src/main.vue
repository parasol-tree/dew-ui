<template>
  <div class="dewbackTopContainer"
    :class="classBackTop"
    :style="stylesBackTop"
    @click="handleBtnBackTopClick"
  >
    <DewIcon v-if="!hasSlot"
      :svgName="svgName"
      :iconName="iconName"
      :size="iconSize"
      :color="color"
    />
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {
  animationBackTopFn // 返回顶部的动画
} from '../../../utils/assistFunction.js'
import {
  addListener,
  removeListener
} from '../../../utils/eventListener.js' // 事件监听器
import DewIcon from '../../icon/index.js'

const prefixEsClassName = 'dew-back-top' // 前缀 class 名, 写这里方便控制

export default {
  name: 'DewBackTop',
  data () {
    return {
      isBackTop: false // 是否返回顶部, false 不返回, true 返回
    }
  },
  props: {
    // 按钮距离底部的距离, 默认 30px
    bottom: { type: [Number, String], default: 30 },
    // 按钮距离右侧的距离, 默认 30px
    right: { type: Number, default: 30 },
    // 动画持续时间
    duration: { type: Number, default: 1000 },
    // 距离顶部多高时显示 返回顶部的 按钮, 默认 400 px
    height: { type: Number, default: 0 },
    backgroundColor: { type: String, default: null },
    color: { type: String, default: null },
    iconName: { type: String, default: 'to-top' },
    svgName: { type: String, default: '' },
    iconSize: [Number, String]
  },
  computed: {
    hasSlot () {
      return !!this.$slots.default
    },
    classBackTop () {
      return [
        `${prefixEsClassName}`, // dew-back-top
        {
          [`${prefixEsClassName}-show`]: this.isBackTop,
          [`${prefixEsClassName}-noSlot`]: !this.hasSlot,
          hasSlot: this.hasSlot
        }
      ]
    },
    stylesBackTop () {
      const styleObj = {}
      styleObj.right = `${this.right}px`
      styleObj.bottom = `${this.bottom}px`
      if (this.backgroundColor) {
        styleObj['background-color'] = this.backgroundColor
      }
      if (this.color) {
        styleObj.color = this.color
      }
      return styleObj
    }
    //
  },
  components: { DewIcon },
  beforeDestroy () {
    // 直接用 window.addEventListener 存在 兼容性问题, 故此不用, 转而用自定义的 事件监听器(监听的 dom 默认值为 window 或者 document)
    removeListener(window, 'scroll', this.isBackTopFn, { passive: true, capture: false })
    removeListener(window, 'scroll', this.isBackTopFn, { passive: true, capture: false })
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.addEventListener()
    },
    addEventListener () {
      // 直接用 window.addEventListener 存在 兼容性问题, 故此不用, 转而用自定义的 事件监听器(监听的 dom 默认值为 window 或者 document)
      addListener(window, 'scroll', this.isBackTopFn, { passive: true, capture: false })
      addListener(window, 'resize', this.isBackTopFn, { passive: true, capture: false })
    },
    // 是否显示返回顶部(是否显示按钮), 距离顶部多高时显示 返回顶部的 按钮, 默认 400 px
    isBackTopFn () {
      // 如果没有传入 参数 height, 那么 就在 pageYOffset > 0 时显示 按钮, 否则 >= height 时 显示按钮
      this.height === 0 ? this.isBackTop = window.pageYOffset > 0 : this.isBackTop = window.pageYOffset >= this.height
    },
    handleBtnBackTopClick () {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      animationBackTopFn(window, scrollTop, 0, this.duration)
      this.$emit('on-click', scrollTop) // 返回一个 click 事件, 用于 填写 自定义 的 代码
    }
    //
  }
  //
}
</script>

<style scoped>
.dewbackTopContainer {
  cursor: pointer;
}
  .dew-back-top {
    position: fixed;
    /* right 和 bottom 的值 由 props 的 right 和 bottom 决定 */
    cursor: pointer;
    display: none;
    z-index: 42;
  }
  /* v-show 也是一种解决方案, 性能没有直接用 className 控制 来的 快 */
  .dew-back-top-show {
    display: block;
  }
  .dew-back-top-noSlot {
    box-sizing: border-box;
    padding: 6px 10px;
    border-radius: 4px;
    font-size: 16px;
    color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0,.2);
    background-color: rgba(0, 0, 0,.6);
  }
  .hasSlot {
    padding: 10px;
    border-radius: 4px;
    font-size: 12px;
    text-align: center;
    color: #fff;
    background-color: rgba(46, 58, 41, .6);
  }
</style>
