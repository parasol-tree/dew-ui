<template>
  <canvas class="dateTimeCanvas" ref="refCanvas">
  </canvas>
</template>

<script>
/* eslint-disable no-unused-vars */
import { getRandom } from '@/assets/utils/index'

export default {
  name: 'dateTime',
  data () {
    return {
    }
  },
  mounted () {
    this.initFn()
  },
  methods: {
    initFn () {
      /** @type {HTMLCanvasElement} */
      const canvas = this.$refs.refCanvas
      /** @type {CanvasRenderingContext2D} */
      const ctx = canvas.getContext('2d', { willReadFrequently: true })
      let text = ''
      canvas.width = 400 * devicePixelRatio
      canvas.height = 40 * devicePixelRatio
      const particleList = []

      class Particle {
        constructor () {
          this.r = Math.min(canvas.width, canvas.height) / 2 // canvas 半径
          this.centerPointX = canvas.width / 2 // canvas 中心点 x 坐标
          this.centerPointY = canvas.height / 2 // canvas 中心点 y 坐标
          this.rad = getRandom(0, 360) * Math.PI / 180 // 弧度
          this.x = this.centerPointX + this.r * Math.cos(this.rad) //
          this.y = this.centerPointY + this.r * Math.sin(this.rad)
          // this.size = getRandom(2 * devicePixelRatio, 7 * devicePixelRatio) // 每个例子的大小
          this.size = getRandom(1 * devicePixelRatio, 1 * devicePixelRatio) // 每个例子的大小
        }

        draw () {
          ctx.beginPath()
          // ctx.fillStyle = 'red'
          // ctx.fillStyle = '#19be6b'
          ctx.fillStyle = '#53B9CF'
          ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
          ctx.fill()
        }

        moveTo (targetX, targetY) {
          const duration = 500 // ms
          const startX = this.x // 开始 x 坐标
          const startY = this.y // 开始 x 坐标

          const speedX = (targetX - startX) / duration // x 速度
          const speedY = (targetY - startY) / duration // y 速度

          const startTime = Date.now() // 当前时间

          const _move = () => {
            const time = Date.now() - startTime // 过去了多长时间
            const x = this.x + speedX * time
            const y = this.y + speedY * time
            this.x = x
            this.y = y
            if (time >= duration) {
              this.x = targetX
              this.y = targetY
              return false
            }
            requestAnimationFrame(_move)
          }
          _move()
        }
      }

      /**
       * 清空 canvas 画布
       */
      function clearRect () {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
      /**
       * 返回当前时间
       * @returns {String} 时间格式 hh:mm:ss
       */
      function getTimeString () {
        // return new Date().toTimeString().substring(0, 8)
        let _res = new Date().toLocaleString()
        _res = _res.replace(/(?<=\/|-|\.|:|\b|T)\d{1}(?=\/|-|\.|:|\b|T)/g, '0$&')
        return _res
      }
      /**
       * 返回当前画布上的像素点信息
       * @returns {Array} eg: [0,0,0,255] rgba
       */
      function getPoints () {
        const { width, height, data } = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const pointsList = []
        for (let i = 0; i < width; i += 6) {
          for (let j = 0; j < height; j += 6) {
            const index = (i + j * width) * 4
            const r = data[index + 0]
            const g = data[index + 1]
            const b = data[index + 2]
            const a = data[index + 3]
            if (r === 0 && g === 0 && b === 0 && a === 255) {
              pointsList.push([i, j])
            }
          }
        }
        return pointsList
      }
      function update () {
        const newText = getTimeString()
        if (newText === text) {
          return false
        }
        clearRect()
        text = newText
        ctx.fillStyle = '#000'
        ctx.textBaseline = 'middle'
        ctx.font = `bold ${40 * devicePixelRatio}px sans-serif`
        // ctx.font = `${40 * devicePixelRatio}px sans-serif`
        const textWidth = ctx.measureText(text).width
        ctx.fillText(text, (canvas.width - textWidth) / 2, canvas.height / 2)

        const pointsList = getPoints()
        clearRect()
        for (let i = 0; i < pointsList.length; i++) {
          let particle = particleList[i]
          if (!particle) {
            particle = new Particle()
            particleList.push(particle)
          }
          const [x, y] = pointsList[i]
          // console.log(x, y)
          particle.moveTo(x, y)
        }
        if (pointsList.length < particleList.length) {
          particleList.splice(pointsList.length)
        }
      }
      function drawParticle () {
        clearRect()
        update()
        particleList.forEach(particle => particle.draw())
        requestAnimationFrame(drawParticle)
      }
      drawParticle()
    }
  }
}
</script>

<style lang="stylus" scoped>
.dateTimeCanvas
  display block
  width 400px
  height 40px
</style>
