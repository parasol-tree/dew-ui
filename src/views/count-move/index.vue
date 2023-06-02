<template>
  <div class="page-dewCountUp">
    <h2>DewCountUp 数字递增</h2>
    <h4>基础用法</h4>
    <p class="hintText">将一个数字以动画的形式动态渐变到指定值的组件</p>
    <div class="baseCard">
      <DewCountUp endValue="123456" separator="," /><br><br>
<pre class="pre" v-show="isShow1">
<code class="code">
  &lt;DewCountUp endValue="200" /&gt;
</code>
</pre>
      <ToogleCode @emit-toogleCode="onToogleCodeFn1"/>
    </div>

    <h4>显示小数</h4>
    <p class="hintText">需要搭配 属性 decimalCount 显示小数</p>
    <div class="baseCard">
      <DewCountUp endValue="200.22" :decimalCount="2" />
<pre class="pre" v-show="isShow2">
<code class="code">
  &lt;DewCountUp endValue="200.22" :decimalCount="2" /&gt;
</code>
</pre>
      <ToogleCode @emit-toogleCode="onToogleCodeFn2"/>
    </div>

    <h4>手动控制</h4>
    <div class="baseCard">
      <p class="hintText">autoplay 设置为false 禁止自动递增, 转为手动代码控制</p>
      <DewCountUp ref="refDewCountUp" endValue="500" :autoplay="false" /><br><br>
      <DewButton type="primary" @click="startFn">开始</DewButton>
      <DewButton type="primary" @click="pauseOrGoOnFn">暂停/继续</DewButton>
      <DewButton type="primary" @click="resetFn">重置</DewButton>
<pre class="pre" v-show="isShow3">
<code class="code">
  &lt;template&gt;
    &lt;DewCountUp ref="refDewCountUp" endValue="500" :autoplay="false" /&gt;
    &lt;DewButton type="primary" @click="startFn"&gt;开始&lt;/DewButton&gt;
    &lt;DewButton type="primary" @click="pauseOrGoOnFn"&gt;暂停/继续&lt;/DewButton&gt;
    &lt;DewButton type="primary" @click="resetFn"&gt;重置&lt;/DewButton&gt;
  &lt;/template&gt;
  &lt;script&gt;
    export default {
      methods: {
        startFn () {
          this.$refs.refDewCountUp.startFn()
        },
        pauseOrGoOnFn () {
          this.$refs.refDewCountUp.reStartFn()
        },
        resetFn () {
          this.$refs.refDewCountUp.resetFn()
        }
      }
    }
  &lt;/script&gt;
</code>
</pre>
      <ToogleCode @emit-toogleCode="onToogleCodeFn3"/>
    </div>

    <h4>分隔符</h4>
    <p class="hintText">分隔符 每隔三位数字显示的字符串，类似金额的分割(￥99,142.8765中的 ',')</p>
    <div class="baseCard">
      &yen;<DewCountUp endValue="99142.8765" separator="," />
<pre class="pre" v-show="isShow1">
<code class="code">
  &yen;&lt;DewCountUp endValue="99142.8765" separator="," /&gt;
</code>
</pre>
      <ToogleCode @emit-toogleCode="onToogleCodeFn1"/>
    </div>

    <h4>DewCountUp props</h4>
    <table class="table" border="1">
      <tr>
        <th>属性</th>
        <th>说明</th>
        <th>可选值</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>startValue</td>
        <td>开始的数值</td>
        <td></td>
        <td>String, Number</td>
        <td>0</td>
      </tr>
      <tr>
        <td>endValue</td>
        <td>目标数值</td>
        <td></td>
        <td>String, Number</td>
        <td>0</td>
      </tr>
      <tr>
        <td>duration</td>
        <td>动画持续时间, 单位为毫秒（ms）</td>
        <td></td>
        <td>String, Number</td>
        <td>2000</td>
      </tr>
      <tr>
        <td>autoplay</td>
        <td>设置目标数值后, 是否自动滚动到目标数值</td>
        <td>true, false</td>
        <td>Boolean</td>
        <td>true</td>
      </tr>
      <tr>
        <td>decimalCount</td>
        <td>要显示的小数位数</td>
        <td></td>
        <td>String, Number</td>
        <td>0</td>
      </tr>
      <tr>
        <td>isUseEasing</td>
        <td>是否在即将到达目标数值的时候，使用缓慢滚动的效果</td>
        <td>true, false</td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>separator</td>
        <td>每隔三位数字显示的字符串</td>
        <td></td>
        <td>String</td>
        <td></td>
      </tr>
      <tr>
        <td>fontFamily</td>
        <td>字体, 默认为等款字体</td>
        <td></td>
        <td>String</td>
        <td>Menlo, Monaco, 'Courier New', monospace</td>
      </tr>
    </table>

    <h4>DewCountUp methods</h4>
    <table class="table" border="1">
      <tr>
        <th>方法名</th>
        <th>说明</th>
        <th>参数</th>
      </tr>
      <tr>
        <td>startFn</td>
        <td>启动滚动</td>
        <td></td>
      </tr>
      <tr>
        <td>pauseFn</td>
        <td>暂停滚动</td>
        <td></td>
      </tr>
      <tr>
        <td>reStartFn</td>
        <td>暂停滚动 (已经滚动的情况下) 或者 继续滚动 (已经暂停的情况下)</td>
        <td></td>
      </tr>
      <tr>
        <td>resumeFn</td>
        <td>重新开始滚动</td>
        <td></td>
      </tr>
      <tr>
        <td>resetFn</td>
        <td>重置数据和滚动状态</td>
        <td></td>
      </tr>
    </table>

    <h4>DewCountUp events</h4>
    <table class="table" border="1">
      <tr>
        <th>事件名</th>
        <th>说明</th>
        <th>回调参数</th>
      </tr>
      <tr>
        <td>emit-start</td>
        <td>数值开始滚动时触发</td>
        <td></td>
      </tr>
      <tr>
        <td>emit-pause</td>
        <td>数值滚动暂停时触发</td>
        <td></td>
      </tr>
      <tr>
        <td>emit-end</td>
        <td>数值滚动到目标值时触发</td>
        <td></td>
      </tr>
      <tr>
        <td>emit-reset</td>
        <td>重置数据和滚动状态时触发</td>
        <td></td>
      </tr>
    </table>

    <h4 style="color: #ed4014;">开发中的功能</h4>
    <div class="baseCard">
      <p class="hintText" style="color: #ed4014;">1、去除属性 decimalCount 改为根据 endValue 自动判断是否显示小数</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'page-dewCountUp',
  data () {
    return {
      isShow1: false,
      endValue1: 200,
      isShow2: false,
      isShow3: false,
      isShow4: false
    }
  },
  mounted () {
    // console.log('this.$copyTextFn --->', this.$copyTextFn)
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
    onToogleCodeFn4 () {
      this.isShow4 = !this.isShow4
    },
    startFn () {
      this.$refs.refDewCountUp.startFn()
    },
    pauseOrGoOnFn () {
      this.$refs.refDewCountUp.reStartFn()
    },
    resetFn () {
      this.$refs.refDewCountUp.resetFn()
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
