<template>
  <button class="dew-btn"
    :disabled="disabled"
    :type="nativeType"
    :class="[
      type ? 'dew-btn--' + type : '',
      {
        'is-disabled': disabled,
        'is-circle': circle
      }
    ]"
  >
    <dew-icon
      :iconCategory="iconCategory"
      color="#000"
    >
    </dew-icon>
    <span v-if="showSlot" ref="slot">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import DewIcon from '../../icon/index.js'

// 判断参数是否是其中之一
function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}
export default {
  name: 'DewButton',
  components: { DewIcon }, // dew-icon
  props: {
    // 是否禁用按钮
    disabled: Boolean,
    // 自定义 按钮 类型 [default, primary, dashed, text, info, success, warning, error ]
    type: {
      validator (value) {
        return oneOf(value, ['default', 'primary', 'dashed', 'text', 'info', 'success', 'warning', 'error'])
      },
      default: 'default'
    },
    // 原生 的 type 属性
    nativeType: {
      type: String,
      default: 'button'
    },
    // 是否圆形按钮
    circle: Boolean,
    iconCategory: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showSlot: true
    }
  },
  mounted () {
    // 子元素数组 this.$slots.default
    this.showSlot = this.$slots.default !== undefined
    // console.log(this.$slots.default, 'this.$slots.default')
    // console.log(this.iconCategory, 'iconCategory')
  }
}
</script>

<style scoped>
  /* 基本按钮 */
  .dew-btn {
    margin: 0;
    font-family: inherit;
    box-sizing: border-box;
    padding: 5px 15px 6px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    background-image: none;
    cursor: pointer;
    outline: 0;
    white-space: nowrap;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    /* 让 颜色 的 展示与隐藏有动画效果 */
    transition: color .2s linear, background-color .2s linear,border .2s linear, box-shadow .2s linear;
  }
  .dew-btn>span {
    vertical-align: middle;
  }
/*   .dew-btn:not([disabled]):hover {
    text-decoration: none;
  } */
  /* 默认按钮样式 */
  .dew-btn--default {
    color: #515a6e;
    background-color: #fff;
  }
  .dew-btn--default:hover {
    border-color: #57a3f3;
    color: #57a3f3;
    background-color: #fff;
  }
  /* primary */
  .dew-btn--primary {
    border-color: #2d8cf0;
    color: #fff;
    background-color: #2d8cf0;
  }
  .dew-btn--primary:hover {
    border-color: #57a3f3;
    background-color: #57a3f3;
  }
  /* dashed */
  .dew-btn--dashed {
    border-color: #dcdee2;
    border-style: dashed;
    color: #515a6e;
    background-color: #fff;
  }
  .dew-btn--dashed:hover {
    border-color: #57a3f3;
    color: #57a3f3;
  }
  /* text */
  .dew-btn--text {
    border-color: transparent;
    color: #515a6e;
    background-color: transparent;
  }
  .dew-btn--text:hover {
    border-color: transparent;
    color: #57a3f3;
    background-color: #fff;
  }
  /* indo */
  .dew-btn--indo {
    border-color: #2db7f5;
    color: #fff;
    background-color: #2db7f5;
  }
  .dew-btn--indo:hover {
    border-color: #57c5f7;
    background-color: #57c5f7;
  }
  /* success */
  .dew-btn--success {
    border-color: #19be6b;
    color: #fff;
    background-color: #19be6b;
  }
  .dew-btn--success:hover {
    border-color: #47cb89;
    background-color: #47cb89;
  }
  /* warning */
  .dew-btn--warning {
    border-color: #f90;
    color: #fff;
    background-color: #f90;
  }
  .dew-btn--warning:hover {
    border-color: #ffad33;
    background-color: #ffad33;
  }
  /* error */
  .dew-btn--error {
    border-color: #ed4014;
    color: #fff;
    background-color: #ed4014;
  }
  .dew-btn--error:hover {
    border-color: #f16643;
    background-color: #f16643;
  }
  /* 是否禁用按钮 */
  .dew-btn.is-disabled {
    border-color: #dcdee2;
    color: #c5c8ce;
    background-color: #f7f7f7;
    background-image: none;
    cursor: not-allowed;
  }
  /* .dew-btn.is-circle {
    border-radius: 32px;
  }
  .dew-btn.dew-btn-icon-only {
    width: 32px;
    height: 32px;
    padding: 0;
    border-radius: 50%;
    font-size: 16px;
  } */
  /* 禁用按钮 去除所有文本修饰 */
  button[type="button"]:disabled:hover {
    text-decoration: none;
  }
</style>
