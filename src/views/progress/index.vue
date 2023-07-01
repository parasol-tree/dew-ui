<template>
  <div class="pagePageProgress">
    <h2>Progress 按钮</h2>
    <h4>基础用法</h4>
    <p class="hintText">展示操作或任务的当前进度。</p>
    <div class="baseCard">
      <DewProgress class="dewProgress" :percent="25" />
      <DewProgress class="dewProgress" :percent="45" progressColor="#2d8cf0" />
      <DewProgress class="dewProgress" :percent="75" progressColor="#ed4014" />
<pre class="pre" v-highlightjs v-show="isShow1">
<code class="code html">
  &lt;DewProgress :percent="25" /&gt;
  &lt;DewProgress :percent="45" progressColor="#2d8cf0" /&gt;
  &lt;DewProgress :percent="75" progressColor="#ed4014" /&gt;
</code>
</pre>
      <ToogleCode @emit-toogleCode="onToogleCodeFn1"/>
    </div>

    <h4>百分比的位置</h4>
    <div class="baseCard">
      <p class="hintText" style="margin-bottom: 10px;">百分比在左侧</p>
      <DewProgress class="dewProgress" :percent="25" percentPosition="left" />
      <DewProgress class="dewProgress" :percent="25" percentPosition="left" :percentInside="true" />
      <p class="hintText" style="margin: 10px 0;text-align: center;">百分比在中间</p>
      <DewProgress class="dewProgress" :percent="100" percentPosition="center" />
      <p class="hintText" style="margin: 10px 0;text-align: right;">百分比在右侧</p>
      <DewProgress class="dewProgress" :percent="70" percentPosition="right" />
      <DewProgress class="dewProgress" :percent="70" percentPosition="right" :percentInside="true" />
<pre class="pre" v-highlightjs v-show="isShow2">
<code class="code html">
  &lt;DewProgress :percent="25" percentPosition="left" /&gt;
  &lt;DewProgress :percent="25" percentPosition="left" :percentInside="true" /&gt;
  &lt;DewProgress :percent="100" percentPosition="center" /&gt;
  &lt;DewProgress :percent="70" percentPosition="right" /&gt;
  &lt;DewProgress :percent="70" percentPosition="right" :percentInside="true" /&gt;
</code>
</pre>
      <ToogleCode @emit-toogleCode="onToogleCodeFn2"/>
    </div>

    <h4>配合外部组件使用, 动态太展示百分比</h4>
    <div class="baseCard">
      <DewProgress class="dewProgress" :percent="percent" percentPosition="left" /><br>
      <DewButton type="primary" prefixIcon="add" @click="addFn">增加</DewButton>
      <DewButton type="primary" prefixIcon="minus" @click="minusFn">减少</DewButton>
<pre class="pre" v-highlightjs v-show="isShow3">
<code class="code html">
  &lt;template&gt;
    &lt;DewProgress :percent="percent" percentPosition="left" /&gt;
    &lt;DewButton type="primary" prefixIcon="add" @click="addFn"&gt;增加&lt;/DewButton&gt;
    &lt;DewButton type="primary" prefixIcon="minus" @click="minusFn"&gt;减少&lt;/DewButton&gt;
  &lt;/template&gt;
  &lt;script&gt;
    export default {
      data () {
        return {
          percent: 20
        }
      },
      methods: {
        addFn () {
          if (this.percent &gt;= 100) {
            this.percent = 100
            return false
          }
          this.percent += 10
        },
        minusFn () {
          if (this.percent &lt;= 0) {
            this.percent = 0
            return false
          }
          this.percent -= 10
        }
      }
    }
  &lt;/script&gt;
</code>
</pre>
      <ToogleCode @emit-toogleCode="onToogleCodeFn3"/>
    </div>

    <h4>显示条纹</h4>
    <div class="baseCard">
      <p class="hintText" style="margin-bottom: 10px;">显示条纹</p>
      <DewProgress isStriped :percent="73"/>
      <p class="hintText" style="margin: 10px 0;">条纹具有动画效果</p>
      <DewProgress isStriped isStripeMove :percent="73"/>
      <p class="hintText" style="margin: 10px 0;">自定义条纹样式</p>
      <DewProgress isStriped isStripeMove stripeWidth="20px" stripeColor="#BD2D30" stripeAnimationTime="1s" :percent="73"/>
<pre class="pre" v-highlightjs v-show="isShow4">
<code class="code html">
  &lt;DewProgress isStriped :percent="73"/&gt;
  &lt;DewProgress isStriped isStripeMove :percent="73"/&gt;
  &lt;DewProgress isStriped isStripeMove stripeWidth="20px" stripeColor="#BD2D30" :percent="73"/&gt;
</code>
</pre>
      <ToogleCode @emit-toogleCode="onToogleCodeFn4"/>
    </div>

    <h4>显示条纹</h4>
    <div class="baseCard">
      <p class="hintText" style="margin-bottom: 10px;">显示条纹</p>
      <DewProgress isStriped :percent="73"/>
      <p class="hintText" style="margin: 10px 0;">条纹具有动画效果</p>
      <DewProgress isStriped isStripeMove :percent="73"/>
      <p class="hintText" style="margin: 10px 0;">自定义条纹样式</p>
      <DewProgress isStriped isStripeMove stripeWidth="20px" stripeColor="#BD2D30" stripeAnimationTime="1s" :percent="73"/>
<pre class="pre" v-highlightjs v-show="isShow5">
<code class="code html">
  &lt;DewProgress isStriped :percent="73"/&gt;
  &lt;DewProgress isStriped isStripeMove :percent="73"/&gt;
  &lt;DewProgress isStriped isStripeMove stripeWidth="20px" stripeColor="#BD2D30" :percent="73"/&gt;
</code>
</pre>
      <ToogleCode @emit-toogleCode="onToogleCodeFn5"/>
    </div>

    <h4>自定义波纹动画</h4>
    <div class="baseCard">
      <DewProgress isStriped :percent="73" customizeStripeClass="myStripe" />
<pre class="pre" v-highlightjs v-show="isShow6">
<code class="code html">
  &lt;template&gt;
    &lt;DewProgress isStriped :percent="73" customizeStripeClass="myStripe" /&gt;
  &lt;/template&gt;
  &lt;style&gt;
    @keyframes myStripeMove {
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: var(--stripeWidth) 0;
      }
    }
    .myStripe {
      background-image: linear-gradient(45deg, skyblue 25%, transparent 25%, transparent 50%, skyblue 50%, skyblue 75%, transparent 75%, transparent);
      background-size: 30px 30px;
      animation: myStripeMove 2s linear infinite;
    }
  &lt;/style&gt;
</code>
</pre>
      <ToogleCode @emit-toogleCode="onToogleCodeFn6"/>
    </div>

    <h4>DewProgress props</h4>
    <table class="table" border="1">
      <tr>
        <th>属性</th>
        <th>说明</th>
        <th>可选值</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>category</td>
        <td>进度条类型<span style="color: red;">(circle 圆形进度条 功能开发中)</span></td>
        <td>line, circle</td>
        <td>String</td>
        <td>line</td>
      </tr>
      <tr>
        <td>direction</td>
        <td>进度条展示的方向<span style="color: red;">(vertical 竖着展示进度条 功能开发中)</span></td>
        <td>horizontal, vertical</td>
        <td>String</td>
        <td>horizontal</td>
      </tr>
      <tr>
        <td>percent</td>
        <td>进度条百分比值</td>
        <td>范围 0-100</td>
        <td>Number</td>
        <td>0</td>
      </tr>
      <tr>
        <td>showPercent</td>
        <td>是否显示百分比</td>
        <td>true, false</td>
        <td>Boolean</td>
        <td>true</td>
      </tr>
      <tr>
        <td>percentInside</td>
        <td>百分比是否在进度条内部显示</td>
        <td>true, false</td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>percentPosition</td>
        <td>百分比显示的位置</td>
        <td>left, center, right</td>
        <td>String</td>
        <td>right</td>
      </tr>
      <tr>
        <td>strokeWidth</td>
        <td>进度条的高度(宽度)</td>
        <td></td>
        <td>String</td>
        <td>18px</td>
      </tr>
      <tr>
        <td>color</td>
        <td>百分比文字颜色</td>
        <td>支持类型 HEX RGB RGBA HSL HSLA, color of EnglishWord</td>
        <td>String</td>
        <td>#fff</td>
      </tr>
      <tr>
        <td>backgroundColor</td>
        <td>整体背景色</td>
        <td>支持类型 HEX RGB RGBA HSL HSLA, color of EnglishWord</td>
        <td>String</td>
        <td>#ececec</td>
      </tr>
      <tr>
        <td>progressColor</td>
        <td>进度条的颜色</td>
        <td>支持类型 HEX RGB RGBA HSL HSLA, color of EnglishWord</td>
        <td>String</td>
        <td>#19be6b</td>
      </tr>
      <tr>
        <td>isStriped</td>
        <td>是否在进度条上显示波纹</td>
        <td>true, false</td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>stripeWidth</td>
        <td>波纹的宽度</td>
        <td></td>
        <td>String</td>
        <td>30px</td>
      </tr>
      <tr>
        <td>stripeColor</td>
        <td>波纹的颜色</td>
        <td>支持类型 HEX RGB RGBA HSL HSLA, color of EnglishWord</td>
        <td>String</td>
        <td>rgba(255,255,255,.15)</td>
      </tr>
      <tr>
        <td>isStripeMove</td>
        <td>波纹是否移动</td>
        <td>true, false</td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>stripeAnimationTime</td>
        <td>波纹动画的时间</td>
        <td>单位秒, 例如 2s</td>
        <td>String</td>
        <td>2s</td>
      </tr>
      <tr>
        <td>customizeStripeClass</td>
        <td>用户自定义波纹动画的类名</td>
        <td></td>
        <td>String</td>
        <td></td>
      </tr>
    </table>

    <h4 style="color: #ed4014;">开发中的功能</h4>
    <div class="baseCard">
      <p class="hintText" style="color: #ed4014;">1、以 canvas 实现圆形进度条</p>
      <p class="hintText" style="color: #ed4014;">2、垂直方向显示进度条</p>
      <p class="hintText" style="color: #ed4014;">3、用户 自定义 进度条波纹动画</p>
      <p class="hintText" style="color: #ed4014;">4、用户 自定义 slot 用以 替换百分比</p>
      <!-- <p class="hintText" style="color: #ed4014;">5、分段进度条</p> -->
    </div>

  </div>
</template>

<script>
export default {
  name: 'pageProgress',
  data () {
    return {
      isShow1: false,
      isShow2: false,
      isShow3: false,
      percent: 20,
      isShow4: false,
      isShow5: false,
      isShow6: false
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.percent = 20
    // }, 3000)
  },
  methods: {
    onToogleCodeFn1 () {
      this.isShow1 = !this.isShow1
    },
    onToogleCodeFn2 () {
      this.isShow2 = !this.isShow2
    },
    onToogleCodeFn3 () {
      this.isShow3 = !this.isShow3
    },
    addFn () {
      if (this.percent >= 100) {
        this.percent = 100
        return false
      }
      this.percent += 10
    },
    minusFn () {
      if (this.percent <= 0) {
        this.percent = 0
        return false
      }
      this.percent -= 10
    },
    onToogleCodeFn4 () {
      this.isShow4 = !this.isShow4
    },
    onToogleCodeFn5 () {
      this.isShow5 = !this.isShow5
    },
    onToogleCodeFn6 () {
      this.isShow6 = !this.isShow6
    }
  }
}
</script>

<style lang="stylus" scoped>
.dewProgress + .dewProgress {
  margin-top: 10px
}
</style>
<style>
  @keyframes myStripeMove {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 30px 0;
    }
  }
  .myStripe {
    background-image: linear-gradient(45deg, skyblue 25%, transparent 25%, transparent 50%, skyblue 50%, skyblue 75%, transparent 75%, transparent);
    background-size: 30px 30px;
    animation: myStripeMove 2s linear infinite;
  }
</style>
