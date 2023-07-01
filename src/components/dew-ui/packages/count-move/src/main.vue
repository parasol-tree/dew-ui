<template>
  <span class="dew-count-move-com" :style="{ 'font-family': fontFamily }">{{ displayValue }}</span>
</template>

<script>
export default {
  name: 'DewCountUp',
  props: {
    // 开始的数值，默认从 0 递增到某一个数
    startValue: {
      type: [Number, String],
      default: 0,
      validator (value) {
        if (isNaN(value)) {
          console.error('Invalid prop: The prop of startValue is invalid, it should be a number or numeric string')
          return false
        }
        return true
      }
    },
    endValue: {
      type: [Number, String],
      default: 0,
      required: true,
      validator (value) {
        if (isNaN(value)) {
          console.error('Invalid prop: The prop of endValue is invalid, it should be a number or numeric string')
          return false
        }
        return true
      }
    }, // 要滚动的目标数值
    duration: { type: [Number, String], default: 2000 }, // 动画持续时间, 单位为毫秒（ms）
    autoplay: { type: Boolean, default: true }, // 设置目标数值后, 是否自动滚动到目标数值
    decimalCount: { type: [Number, String], default: 0 }, // 要显示的小数位数
    isUseEasing: { type: Boolean, default: false }, // 是否在即将到达目标数值的时候，使用缓慢滚动的效果
    decimal: { type: [Number, String], default: '.' }, // 十进制分割
    separator: { type: String, default: '' }, // 分隔符 每隔三位数字显示的字符串，类似金额的分割(￥99,142.8765 中的 ',')
    fontFamily: { type: String, default: "Menlo, Monaco, 'Courier New', monospace" }
  },
  data  () {
    return {
      localStartVal: this.startValue,
      displayValue: this.formatNumber(this.startValue),
      printVal: null,
      paused: false, // 是否暂停
      localDuration: Number(this.duration),
      startTime: null, // 开始的时间
      timestamp: null, // 时间戳
      remaining: null, // 停留的时间
      rAF: null,
      lastTime: 0, // 上一次的时间
      end: false // 是否结束
    }
  },
  computed: {
    countDown () {
      return this.startValue > this.endValue
    }
  },
  watch: {
    startValue () {
      this.autoplay && this.startFn()
    },
    endValue () {
      this.autoplay && this.startFn()
    }
  },
  mounted () {
    this.autoplay && this.startFn()
  },
  methods: {
    easingFn (t, b, c, d) {
      return (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b
    },
    requestAnimationFrame (callback) {
      const currTime = new Date().getTime()
      const timeToCall = Math.max(0, 16 - (currTime - this.lastTime)) // 为了使setTimteout的尽可能的接近每秒60帧的效果
      // console.log('timeToCall --->', timeToCall)
      const id = setTimeout(() => {
        const _totalTime = currTime + timeToCall
        callback(_totalTime)
      }, timeToCall)
      this.lastTime = currTime + timeToCall
      return id
    },
    cancelAnimationFrame (id) {
      clearTimeout(id)
    },
    // 开始滚动数字
    startFn () {
      this.localStartVal = this.startValue
      this.startTime = null
      this.localDuration = this.duration
      this.paused = false
      this.$emit('emit-start')
      this.rAF = this.requestAnimationFrame(this.countMoveFn)
    },
    // 暂定状态，重新再开始滚动；或者滚动状态下，暂停
    reStartFn () {
      if (this.end) { return false }
      if (this.paused) {
        this.resumeFn()
        this.paused = false
      } else {
        this.pauseFn()
        this.paused = true
      }
    },
    // 暂停
    pauseFn () {
      this.cancelAnimationFrame(this.rAF)
      this.$emit('emit-pause')
    },
    // 重新开始(暂停的情况下)
    resumeFn () {
      this.startTime = null
      this.localDuration = this.remaining
      this.localStartVal = this.printVal
      this.requestAnimationFrame(this.countMoveFn)
    },
    // 重置
    resetFn () {
      this.startTime = null
      this.cancelAnimationFrame(this.rAF)
      this.displayValue = this.formatNumber(this.startValue)
      this.$emit('emit-reset')
    },
    countMoveFn (timestamp) {
      if (!this.startTime) this.startTime = timestamp
      this.timestamp = timestamp
      const progress = timestamp - this.startTime
      this.remaining = this.localDuration - progress
      if (this.isUseEasing) {
        if (this.countDown) {
          this.printVal = this.localStartVal - this.easingFn(progress, 0, this.localStartVal - this.endValue, this.localDuration)
        } else {
          this.printVal = this.easingFn(progress, this.localStartVal, this.endValue - this.localStartVal, this.localDuration)
        }
      } else {
        if (this.countDown) {
          this.printVal = this.localStartVal - (this.localStartVal - this.endValue) * (progress / this.localDuration)
        } else {
          this.printVal = this.localStartVal + (this.endValue - this.localStartVal) * (progress / this.localDuration)
        }
      }
      if (this.countDown) {
        this.printVal = this.printVal < this.endValue ? this.endValue : this.printVal
      } else {
        this.printVal = this.printVal > this.endValue ? this.endValue : this.printVal
      }
      this.displayValue = this.formatNumber(this.printVal)
      if (progress < this.localDuration) {
        this.end = false
        this.rAF = this.requestAnimationFrame(this.countMoveFn)
      } else {
        this.end = true
        this.$emit('emit-end')
      }
    },
    // 判断是否数字
    isNumber (val) {
      return !isNaN(parseFloat(val))
    },
    formatNumber (num) {
      // 将num转为Number类型，因为其值可能为字符串数值，调用toFixed会报错
      num = Number(num)
      num = num.toFixed(Number(this.decimalCount))
      num += ''
      const x = num.split('.')
      let x1 = x[0]
      const x2 = x.length > 1 ? this.decimal + x[1] : ''
      const rgx = /(\d+)(\d{3})/
      if (this.separator && !this.isNumber(this.separator)) {
        while (rgx.test(x1)) {
          x1 = x1.replace(rgx, '$1' + this.separator + '$2')
        }
      }
      return x1 + x2
    },
    destroyed () {
      this.cancelAnimationFrame(this.rAF)
    }
  }
}
</script>
