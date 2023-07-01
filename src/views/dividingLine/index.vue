<template>
  <div class="pageDividingLine">
    <h2>dividing-line 分界线</h2>
    <h4>基础用法</h4>
    <p class="hintText">用于区隔内容的分割线、对不同章节的文本段落进行分割。</p>
    <div class="baseCard">
      <p>计算机（computer）俗称电脑，是现代一种用于高速计算的电子计算机器，可以进行数值计算，又可以进行逻辑计算，还具有存储记忆功能。是能够按照程序运行，自动、高速处理海量数据的现代化智能电子设备。</p>
      <DewDividingLine />
      <p>由硬件系统和软件系统所组成，没有安装任何软件的计算机称为裸机。可分为超级计算机、工业控制计算机、网络计算机、个人计算机、嵌入式计算机五类，较先进的计算机有生物计算机、光子计算机、量子计算机等。</p>
      <DewDividingLine waveType="dotted" />
      <p>由硬件系统和软件系统所组成，没有安装任何软件的计算机称为裸机。可分为超级计算机、工业控制计算机、网络计算机、个人计算机、嵌入式计算机五类，较先进的计算机有生物计算机、光子计算机、量子计算机等。</p>
      <DewDividingLine waveType="dashed" />
      <DewDividingLine>默认为水平分割线，也可在中间加入文字</DewDividingLine>
<pre class="pre" v-highlightjs v-show="isShow1">
<code class="code html">
  &lt;p&gt;计算机（computer）俗称电脑，是现代一种用于高速计算的电子计算机器，可以进行数值计算，又可以进行逻辑计算，还具有存储记忆功能。是能够按照程序运行，自动、高速处理海量数据的现代化智能电子设备。&lt;/p&gt;
  &lt;DewDividingLine /&gt;
  &lt;p&gt;由硬件系统和软件系统所组成，没有安装任何软件的计算机称为裸机。可分为超级计算机、工业控制计算机、网络计算机、个人计算机、嵌入式计算机五类，较先进的计算机有生物计算机、光子计算机、量子计算机等。&lt;/p&gt;
  &lt;DewDividingLine waveType="dotted" /&gt;
  &lt;p&gt;由硬件系统和软件系统所组成，没有安装任何软件的计算机称为裸机。可分为超级计算机、工业控制计算机、网络计算机、个人计算机、嵌入式计算机五类，较先进的计算机有生物计算机、光子计算机、量子计算机等。&lt;/p&gt;
  &lt;DewDividingLine waveType="dashed" /&gt;
  &lt;DewDividingLine&gt;默认为水平分割线，也可在中间加入文字&lt;/DewDividingLine&gt;
</code>
</pre>
      <ToogleCode @emit-toogleCode="onToogleCodeFn1"/>
    </div>

    <h4>垂直的分割线</h4>
    <div class="baseCard">
      垂直<DewDividingLine direction="vertical" color="red" />的<DewDividingLine direction="vertical" color="blue" />分割线
<pre class="pre" v-highlightjs v-show="isShow2">
<code class="code html">
  垂直&lt;DewDividingLine direction="vertical" color="red" /&gt;的&lt;DewDividingLine direction="vertical" color="blue" /&gt;分割线
</code>
</pre>
      <ToogleCode @emit-toogleCode="onToogleCodeFn2"/>
    </div>

    <h4>设置左右位置</h4>
    <div class="baseCard">
      <DewDividingLine position="left">一个标题</DewDividingLine>
      <p>计算机（computer）俗称电脑，是现代一种用于高速计算的电子计算机器，可以进行数值计算，又可以进行逻辑计算，还具有存储记忆功能。是能够按照程序运行，自动、高速处理海量数据的现代化智能电子设备。</p>
      <DewDividingLine position="right">一个标题</DewDividingLine>
      <p>由硬件系统和软件系统所组成，没有安装任何软件的计算机称为裸机。可分为超级计算机、工业控制计算机、网络计算机、个人计算机、嵌入式计算机五类，较先进的计算机有生物计算机、光子计算机、量子计算机等。</p>
      <DewDividingLine>一个标题</DewDividingLine>
      <p>由硬件系统和软件系统所组成，没有安装任何软件的计算机称为裸机。可分为超级计算机、工业控制计算机、网络计算机、个人计算机、嵌入式计算机五类，较先进的计算机有生物计算机、光子计算机、量子计算机等。</p>
<pre class="pre" v-highlightjs v-show="isShow3">
<code class="code html">
  &lt;DewDividingLine position="left"&gt;一个标题&lt;/DewDividingLine&gt;
  &lt;p&gt;计算机（computer）俗称电脑，是现代一种用于高速计算的电子计算机器，可以进行数值计算，又可以进行逻辑计算，还具有存储记忆功能。是能够按照程序运行，自动、高速处理海量数据的现代化智能电子设备。&lt;/p&gt;
  &lt;DewDividingLine position="right"&gt;一个标题&lt;/DewDividingLine&gt;
  &lt;p&gt;由硬件系统和软件系统所组成，没有安装任何软件的计算机称为裸机。可分为超级计算机、工业控制计算机、网络计算机、个人计算机、嵌入式计算机五类，较先进的计算机有生物计算机、光子计算机、量子计算机等。&lt;/p&gt;
  &lt;DewDividingLine&gt;一个标题&lt;/DewDividingLine&gt;
  &lt;p&gt;由硬件系统和软件系统所组成，没有安装任何软件的计算机称为裸机。可分为超级计算机、工业控制计算机、网络计算机、个人计算机、嵌入式计算机五类，较先进的计算机有生物计算机、光子计算机、量子计算机等。&lt;/p&gt;
</code>
</pre>
      <ToogleCode @emit-toogleCode="onToogleCodeFn3"/>
    </div>

    <h4>button props</h4>
    <table class="table" border="1">
      <tr>
        <th>属性</th>
        <th>说明</th>
        <th>可选值</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>position</td>
        <td>分界线 标题的位置</td>
        <td>left, right, center</td>
        <td>String</td>
        <td>center</td>
      </tr>
      <tr>
        <td>direction</td>
        <td>分界线 方向</td>
        <td>horizontal, vertical</td>
        <td>String</td>
        <td>horizontal</td>
      </tr>
      <tr>
        <td>waveType</td>
        <td>分界线 的类型</td>
        <td>solid, dashed, dotted</td>
        <td>String</td>
        <td>solid</td>
      </tr>
      <tr>
        <td>color</td>
        <td>分界线 的颜色, 支持类型 HEX RGB RGBA HSL HSLA, color of EnglishWord</td>
        <td></td>
        <td>String</td>
        <td>#e8eaec</td>
      </tr>
      <tr>
        <td>margin</td>
        <td>分界线 上下的 margin 值, horizontal 时设置上下, vertical 时设置左右</td>
        <td></td>
        <td>String</td>
        <td>24px(horizontal), 8px(vertical)</td>
      </tr>
    </table>

  </div>
</template>

<script>
export default {
  name: 'dividing-line',
  data () {
    return {
      isShow1: false,
      isShow2: false,
      isShow3: false
    }
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
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
