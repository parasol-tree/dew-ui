<template>
  <div class="dew-progress-com" ref="refDewProgress">
    <template v-if="percentInside">
      <div class="dew-progress-item-box"
        :style="{
          width: '100%',
          'background-color': backgroundColor,
          'border-radius': (parseInt(strokeWidth) / 2) + 'px',
        }"
      >
        <div class="progress-item" :class="stripeClassObj" :style="stylesObj">
          <span v-if="showPercent">{{ percent }}%</span>
        </div>
      </div>
    </template>
    <template v-else>
      <template v-if="showPercent && percentPosition === 'left'">
        <span class="percent-left">{{ percent }}</span><span style="margin-right: 4px;">%</span>
      </template>
      <div class="dew-progress-item-box"
        :style="{
          width: 0,
          flex: 1,
          'background-color': backgroundColor,
          'border-radius': (parseInt(strokeWidth) / 2) + 'px',
        }"
      >
        <div class="progress-item" :class="stripeClassObj" :style="stylesObj">
          <template v-if="showPercent && percentPosition === 'center' && percent > 2">
            <span class="percent-center">{{ percent }}</span>
            <span style="display: inline-block;" v-if="percent > 2">%</span>
          </template>
        </div>
      </div>
      <template v-if="showPercent && percentPosition === 'right'">
        <span class="percent-right">{{ percent }}</span><span>%</span>
      </template>
    </template>
  </div>
</template>

<script>
import {
  oneOfFn // 判断 参数 是否是 其中之一
} from '../../../utils/assistFunction.js'

const STRIPE_WIDTH = '30px'
const STRIPE_COLOR = 'rgba(255, 255, 255, 0.15)'
const STRIPE_ANIMATION_TIME = '2s'

export default {
  name: 'DewProgress',
  props: {
    category: {
      type: String,
      default: 'line',
      validator (value) {
        if (oneOfFn(value, ['line', 'circle'])) {
          return true
        }
        console.error('Invalid prop: The prop of category is invalid, it should be one of line, circle')
        return false
      }
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator (value) {
        if (oneOfFn(value, ['horizontal', 'vertical'])) {
          return true
        }
        console.error('Invalid prop: The prop of direction is invalid, it should be one of horizontal, vertical')
        return false
      }
    },
    percent: {
      type: Number,
      default: 0,
      validator (value) {
        if (value < 0 || value > 100) {
          console.error('Invalid prop: The prop of percent is invalid, it should be greater than or equal to 0 and less than or equal to 100')
          return false
        }
        return true
      }
    }, // 进度百分比，数值
    showPercent: { type: Boolean, default: true }, // 是否在显示百分比的值
    percentInside: { type: Boolean, default: false }, // 百分比显示 是否在内部显示
    percentPosition: {
      type: String,
      default: 'right',
      validator (value) {
        if (oneOfFn(value, ['left', 'center', 'right'])) {
          return true
        }
        console.error('Invalid prop: The prop of percentPosition is invalid, it should be one of left, center, right')
        return false
      }
    },
    // 进度条的高度，单位rpx
    strokeWidth: { type: String, default: '18px' },
    color: { type: String, default: '#fff' }, // 文字颜色
    backgroundColor: { type: String, default: '#ececec' }, // 整体背景色
    progressColor: { type: String, default: '#19be6b' }, // 进度条的颜色

    isStriped: { type: Boolean, default: false },
    stripeWidth: { type: String, default: STRIPE_WIDTH },
    stripeColor: { type: String, default: STRIPE_COLOR },
    isStripeMove: { type: Boolean, default: false },
    stripeAnimationTime: { type: String, default: STRIPE_ANIMATION_TIME },
    customizeStripeClass: { type: String, default: '' }
  },
  data () {
    return {
    }
  },
  computed: {
    stylesObj () {
      // const radius = (parseInt(this.strokeWidth) / 2) + 'px'
      const obj = {
        width: this.percent + '%',
        height: this.strokeWidth,
        color: this.color,
        // 'border-top-left': radius,
        // 'border-bottom-left': radius,
        'background-color': this.progressColor,
        'line-height': this.strokeWidth,
        'text-align': this.percentPosition
      }
      obj.padding = this.percent > 3 ? '0 4px' : 0
      // console.log('obj --->', obj)
      return obj
    },
    stripeClassObj () {
      if (this.customizeStripeClass) {
        return {
          [this.customizeStripeClass]: this.customizeStripeClass
        }
      } else {
        return { 'dew-progress-striped': this.isStriped, 'stripe-move': this.isStripeMove }
      }
    }
  },
  mounted () {
    if (this.customizeStripeClass) {
      return false
    }
    let refDewProgress = this.$refs.refDewProgress
    if (this.stripeWidth === STRIPE_WIDTH && this.stripeColor === STRIPE_COLOR && this.stripeAnimationTime === STRIPE_ANIMATION_TIME) {
      refDewProgress = null
      return false
    }
    if (this.stripeWidth !== STRIPE_WIDTH) {
      refDewProgress.style.setProperty('--stripeWidth', this.stripeWidth)
    }
    if (this.stripeColor !== STRIPE_COLOR) {
      refDewProgress.style.setProperty('--stripeColor', this.stripeColor)
    }
    if (this.stripeAnimationTime !== STRIPE_ANIMATION_TIME) {
      refDewProgress.style.setProperty('--stripeAnimationTime', this.stripeAnimationTime)
    }
    this.$nextTick(() => {
      refDewProgress = null
    })
  },
  methods: {}
}
</script>

<style scoped>
/* 进度条 波纹动画 */
@keyframes progress-stripe-move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: var(--stripeWidth) 0;
  }
}

.dew-progress-com {
  --stripeWidth: 30px;
  --stripeColor: rgba(255, 255, 255, 0.15);
  --stripeAnimationTime: 2s;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.8em;
}
  .dew-progress-item-box {
    overflow: hidden;
  }
    .progress-item {
      overflow: hidden;
      transition: width 1s ease;
    }
    .percent-left, .percent-right {
      max-width: 51px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .percent-center {
      display: inline-block;
      /* max-width: 55%; */
      max-width: 4em;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      vertical-align: bottom;
    }
    .percent-right {
      margin-left: 4px;
    }
/* 波纹 */
.dew-progress-striped {
  background-image: linear-gradient(45deg, var(--stripeColor) 25%, transparent 25%, transparent 50%, var(--stripeColor) 50%, var(--stripeColor) 75%, transparent 75%, transparent);
  background-size: var(--stripeWidth) var(--stripeWidth);
}
/* 波纹 移动动起来 */
.stripe-move {
  animation: progress-stripe-move var(--stripeAnimationTime) linear infinite;
}
</style>
