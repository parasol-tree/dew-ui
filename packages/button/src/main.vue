<template>
  <button class="dew-btn"
    :disabled="disabled"
    :type="nativeType"
    :class="[
      type ? 'dew-btn--' + type : '',
      {
        'is-disabled': disabled,
        'iconButton': !$slots.default && iconButton && !prefixIcon && !suffixIcon
      }
    ]"
    @click="clickFn"
    @dblclick="dblclickFn"
  >
    <!-- 只存在 icon -->
    <dew-icon v-if="!$slots.default && iconButton && !prefixIcon && !suffixIcon"
      :iconName="iconButton"
      :size="iconSize"
      :color="iconColor"
    ></dew-icon>
    <!-- 存在 前缀 icon -->
    <dew-icon v-if="$slots.default && prefixIcon && !iconButton"
      :iconName="prefixIcon"
      :size="iconSize"
      :color="iconColor"
    ></dew-icon>
    <!-- 只存在插槽 -->
    <span v-if="$slots.default && !iconButton">
      <slot></slot>
    </span>
    <!-- 不存在插槽,不存在 icon -->
    <span v-if="!$slots.default && !iconButton && !prefixIcon && !suffixIcon" style="font-size: 14px;">
      这是一个按钮
    </span>
    <!-- 只存在 后缀 icon -->
    <dew-icon v-if="$slots.default && suffixIcon && !iconButton"
      :iconName="suffixIcon"
      :size="iconSize"
      :color="iconColor"
    ></dew-icon>
  </button>
</template>

<script>
import DewIcon from '../../icon/index.js'

export default {
  name: 'DewButton',
  props: {
    // 是否禁用按钮
    disabled: Boolean,
    // 自定义 按钮 类型 [default, primary, dashed, text, info, success, warning, error ]
    type: {
      type: String,
      default: 'default'
    },
    // 原生 的 type 属性
    nativeType: {
      type: String,
      default: 'button'
    },
    iconButton: {
      type: String,
      default: null
    },
    prefixIcon: {
      type: String,
      default: null
    },
    suffixIcon: {
      type: String,
      default: null
    },
    iconSize: [Number, String],
    iconColor: String
  },
  components: { DewIcon },
  methods: {
    clickFn () {
      this.$emit('click')
    },
    dblclickFn () {
      this.$emit('dblclick')
    }
  }
}
</script>

<style scoped>
  button {
    /* margin: 0;
    padding: 0; */
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    box-sizing: border-box;
  }
  /* 基本按钮 */
  .dew-btn {
    padding: 5px 15px 6px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    position: relative;
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
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: bottom;
  }
  /* .dew-btn:not([disabled]):hover {
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
    padding-left: 5px;
    padding-right: 5px;
  }
  .dew-btn--text:hover {
    border-color: transparent;
    color: #57a3f3;
    background-color: #fff;
  }
  /* info */
  .dew-btn--info {
    border-color: #2db7f5;
    color: #fff;
    background-color: #2db7f5;
  }
  .dew-btn--info:hover {
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
  .iconButton {
    width: 32px;
    height: 32px;
    padding: 0;
    font-size: 16px;
    border-radius: 50%;
  }
  /* 是否禁用按钮 */
  /* .is-disabled {
    border-color: #dcdee2!important;
    color: #c5c8ce!important;
    background-color: #f7f7f7!important;
    background-image: none!important;
    cursor: not-allowed!important;
  } */
  /* .dew-btn.is-disabled.dew-btn--text[disabled] {
    border-color: transparent!important;
    background-color: #fff!important;
  } */
  button[type="button"]:disabled:hover {
    text-decoration: none;
  }
  .is-disabled.dew-btn--default, .is-disabled.dew-btn--dashed {
    cursor: not-allowed;
    color: #c0c4cc;
    background-color: #fff;
    border-color: #ebeef5;
  }
  .is-disabled.dew-btn--primary {
    cursor: not-allowed;
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
  }
  .is-disabled.dew-btn--info {
    cursor: not-allowed;
    color: #fff;
    background-color: #b0e5fe;
    border-color: #b0e5fe;
  }
  .is-disabled.dew-btn--success {
    cursor: not-allowed;
    color: #fff;
    background-color: #87f1bc;
    border-color: #87f1bc;
  }
  .is-disabled.dew-btn--warning {
    cursor: not-allowed;
    color: #fff;
    background-color: #f1d7af;
    border-color: #f1d7af;
  }
  .is-disabled.dew-btn--error {
    cursor: not-allowed;
    color: #fff;
    background-color: #f6ccc1;
    border-color: #f6ccc1;
  }
  .is-disabled.dew-btn--text {
    cursor: not-allowed;
    color: #c0c4cc;
    background-color: transparent;
    border-color: transparent;
  }
</style>
