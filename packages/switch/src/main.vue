<template>
  <span
    :class="switchClassNames"
    :style="switchStyles"
    @click="cutover"
    :title="titleSwicth"
  >
    <span class="dew-switch-slot"
      v-if="hasSlot"
    >
      <slot name="active" v-if="isActive"></slot>
      <slot name="inactive" v-if="!isActive"></slot>
      <slot></slot>
    </span>
  </span>
</template>

<script>
import {
  oneOfFn // 判断 参数 是否是 其中之一
} from '../../../utils/assistFunction.js'

const prefixEsClassName = 'dew-switch'
const SMALL = 'small'
// const LARGE = 'large'
// const DEFAULT = 'default'

export default {
  name: 'DewSwitch',
  data () {
    return {
      isActive: false, // 是否选中
      currentVal: this.value, // 当前选中值
      titleSwicth: ''
    }
  },
  props: {
    // 绑定值
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 选中时的值
    activeVal: {
      type: [String, Number, Boolean],
      default: true
    },
    // 取消选中时的值
    inactiveVal: {
      type: [String, Number, Boolean],
      default: false
    },
    size: {
      type: String,
      default: 'default', // 默认 small
      validator (value) {
        return oneOfFn(value, ['small', 'large', 'default'])
      }
    },
    // 激活时的背景色
    activeBackgroundColor: {
      type: String,
      default: null
    },
    // 取消时 的背景色
    inactiveBackgroundColor: {
      type: String,
      default: null
    },
    switchBtnBg: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    }
    //
  },
  computed: {
    // 是否有 slot
    hasSlot () {
      return !!this.$slots.active && !!this.$slots.inactive
    },
    switchClassNames () {
      return [
        `${prefixEsClassName}`,
        {
          // [`${prefixEsClassName}-active`]: this.currentVal === this.value || this.isActive,
          [`${prefixEsClassName}-active`]: this.currentVal === this.activeVal, // 兼容 props 属性 value ,显示是否 选中
          [`${prefixEsClassName}-disabled`]: this.disabled,
          [`${prefixEsClassName}-${this.size}`]: !!this.size && this.size !== 'default',
          [`${prefixEsClassName}-loading`]: this.loading
        }
      ]
    },
    switchStyles () {
      const styleObj = {}
      if (this.isActive && !!this.activeBackgroundColor) {
        styleObj['background-color'] = this.activeBackgroundColor
        styleObj['border-color'] = this.activeBackgroundColor
      }
      if (!this.isActive && !!this.inactiveBackgroundColor) {
        styleObj['background-color'] = this.inactiveBackgroundColor
        styleObj['border-color'] = this.inactiveBackgroundColor
      }
      return styleObj
    }
    //
  },
  watch: {
    // value: {
    //   immediate: true,
    //   handler: function (newVal, oldVal) {
    //     this.currentVal = newVal
    //   }
    // },
    value (newVal, oldVal) {
      if (newVal !== this.activeVal && newVal !== this.inactiveVal) {
        throw new Error("value 的值 应当是 'activeVal' 或者 'inactiveVal' 的值 \n Value should be activeVal or inactiveVal.")
      }
      // console.log(newVal, 'newVal')
      this.currentVal = newVal
    },
    switchBtnBg: {
      immediate: true,
      handler: function (newVal, oldVal) {
        // eslint-disable-next-line no-extra-boolean-cast
        if (!!newVal) {
          document.styleSheets[0].insertRule(`.dew-switch:after { background-color: ${this.switchBtnBg}!important`, 0)
        }
      }
    },
    loading: {
      immediate: true,
      handler: function (newVal, oldVal) {
        if (this.loading) {
          this.titleSwicth = '加载中'
        } else {
          this.titleSwicth = ''
        }
      }
    }
    //
  },
  mounted () {
    if (this.hasSlot && this.size === SMALL) {
      console.warn("建议: 如果组件 'DewSwitch' 用了插槽, 属性 'size' 的值 应为 'large' 或者 'default' \n" + "Recommendation: If a slot is used on the component of the 'DewSwitch', the value of the attribute 'size' is should be a 'large' or 'default'")
    }
  },
  methods: {
    cutover (e) {
      e.preventDefault ? e.preventDefault() : e.returnValue = false
      if (this.disabled || this.loading) {
        return false
      }
      const selected = this.currentVal === this.activeVal ? this.inactiveVal : this.activeVal
      this.currentVal = selected
      this.isActive = !this.isActive
      this.$emit('input', selected)
      this.$emit('on-change', selected)
    }
  }
}
</script>

<style scoped>
  .dew-switch {
    box-sizing: border-box;
    display: inline-block;
    width: 46px;
    height: 22px;
    line-height: 20px;
    border-radius: 22px;
    border: 1px solid #ccc;
    vertical-align: middle;
    background-color: #ccc;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: all .2s ease-in-out;
  }
  /* 按钮 */
  .dew-switch:after {
    content: '';
    width: 18px;
    height: 18px;
    border-radius: 18px;
    background-color: #fff;
    position: absolute;
    left: 1px;
    top: 1px;
    cursor: pointer;
    transition: left .2s ease-in-out,width .2s ease-in-out;
  }
  /* 加载中的 行为主体 */
  .dew-switch:before {
    content: "";
    display: none;
    width: 14px;
    height: 14px;
    border: 1px solid #2d8cf0;
    border-color: transparent transparent transparent #2d8cf0;
    border-radius: 50%;
    background-color: transparent;
    position: absolute;
    left: 3px;
    top: 3px;
    z-index: 1;
    /* Internet Explorer 9 及更早IE版本不支持 animation 属性 */
    animation: switch-loading 1s linear;
    -webkit-animation: switch-loading 1s linear;
    animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
  }
  .dew-switch:focus {
    box-shadow: 0 0 0 2px rgba(45,140,240,.2);
    outline: 0;
  }
  .dew-switch:focus:hover {
    box-shadow: none;
  }

  /* 激活 */
  .dew-switch-active {
    border-color: #2d8cf0;
    background-color: #2d8cf0;
  }
  .dew-switch.dew-switch-active:after {
    left: 25px;
  }
  .dew-switch.dew-switch-active:before {
    left: 27px;
  }
  .dew-switch:active:after {
    width: 26px
  }
  .dew-switch-active:active:after {
    left: 17px
  }
  /* 禁用 */
  .dew-switch-disabled {
    cursor: not-allowed;
    opacity: .4;
  }
  .dew-switch-disabled::after {
    cursor: not-allowed;
  }
  /* 插槽 */
  .dew-switch-slot {
    font-size: 12px;
    color: #fff;
    position: absolute;
    left: 22px;
  }
  .dew-switch-active .dew-switch-slot {
    left: 10px;
  }

  /*.dew-switch-default {}*/

  /* 小号 */
  .dew-switch-small {
    width: 28px;
    height: 16px;
    line-height: 14px
  }
  .dew-switch-small:after {
    width: 12px;
    height: 12px
  }
  .dew-switch-small:before {
    width: 10px;
    height: 10px;
    left: 2px;
    top: 2px
  }
  .dew-switch-small:active:after {
    width: 16px
  }
  .dew-switch-small.dew-switch-active:after {
    left: 13px
  }
  .dew-switch-small.dew-switch-active:before {
    left: 14px
  }
  .dew-switch-small:active.dew-switch-active:after {
    left: 9px
  }

  /* 大号 */
  .dew-switch-large {
    width: 56px
  }
  .dew-switch-large:active:after {
    width: 26px
  }
  .dew-switch-large:active:after {
    width: 30px
  }
  .dew-switch-large.dew-switch-active:after {
    left: 35px
  }
  .dew-switch-large.dew-switch-active:before {
    left: 37px
  }
  .dew-switch-large:active.dew-switch-active:after {
    left: 23px
  }

  /* 加载中的动画 */
  @keyframes switch-loading {
    0% {
      transform: rotate(0);
      -ms-transform:rotate(0); /* IE 9 */
      -webkit-transform: rotate(0); /* Safari and Chrome */
    }
    100% {
      transform: rotate(360deg);
      -ms-transform:rotate(360deg); /* IE 9 */
      -webkit-transform: rotate(360deg); /* Safari and Chrome */
    }
  }
  @-webkit-keyframes switch-loading /* Safari and Chrome */ {
    0% {
      transform: rotate(0);
      -ms-transform:rotate(0); /* IE 9 */
      -webkit-transform: rotate(0); /* Safari and Chrome */
    }
    100% {
      transform: rotate(360deg);
      -ms-transform:rotate(360deg); /* IE 9 */
      -webkit-transform: rotate(360deg); /* Safari and Chrome */
    }
  }
  .dew-switch-loading {
    opacity: .5;
    filter: Alpha(opacity=50); /* IE8 and earlier */
  }
  .dew-switch-loading:before {
    display: block
  }
</style>
