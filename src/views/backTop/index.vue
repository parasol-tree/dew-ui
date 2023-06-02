<template>
  <div class="pageBackTop">
    <h2>BackTop 返回顶部</h2>
    <p class="hintText">当页面内容冗长，需要快捷返回顶部时使用，一般放置在页面右下角位置。</p>
    <p class="hintText">html,body 设置 css 属性 overflow 时 该组件无效</p>
    <h4>基础用法</h4>
    <div class="baseCard">
      <strong>向下滚动页面，右下角的按钮为默认效果。</strong>
      <DewBackTop />
<pre class="pre" v-show="isShow1">
<code class="code">
  &lt;DewBackTop /&gt;
</code>
</pre>
      <ToogleCode @emit-toogleCode="onToogleCodeFn1"/>
    </div>

    <h4>自定义用法</h4>
    <div class="baseCard">
      <p>背景色为 blue 的 DewBackTop 距离页面底部 100px</p>
      <p>color 为 blue  的 DewBackTop 距离页面底部 100px, 右边100px</p>
      <DewBackTop bottom="100" backgroundColor="blue" />
      <DewBackTop bottom="100" right="100" color="blue">返回顶部</DewBackTop>
<pre class="pre" v-show="isShow2">
<code class="code">
  &lt;DewBackTop  bottom="100" color="skyblue" /&gt;
  &lt;DewBackTop color="red"&gt;返回顶部&lt;/DewBackTop&gt;
</code>
</pre>
      <ToogleCode @emit-toogleCode="onToogleCodeFn2"/>
    </div>

    <h4>BackTop props</h4>
    <table class="table" border="1">
      <tr>
        <th>属性</th>
        <th>说明</th>
        <th>可选值</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>bottom</td>
        <td>组件距离底部的距离, 单位 px</td>
        <td></td>
        <td>Number</td>
        <td>30</td>
      </tr>
      <tr>
        <td>right</td>
        <td>组件距离右部的距离, 单位 px</td>
        <td></td>
        <td>Number</td>
        <td>30</td>
      </tr>
      <tr>
        <td>duration</td>
        <td>滚动动画持续时间，单位 (ms)毫秒</td>
        <td></td>
        <td>Number</td>
        <td>1000</td>
      </tr>
      <tr>
        <td>height</td>
        <td>页面滚动高度 >= 该值时显示BackTop组件(height = 0 不显示按钮), 默认400px </td>
        <td></td>
        <td>Number</td>
        <td>400</td>
      </tr>
      <tr>
        <td>backgroundColor</td>
        <td>组件 背景颜色</td>
        <td></td>
        <td>String</td>
        <td></td>
      </tr>
      <tr>
        <td>color</td>
        <td>组件 内文字的 颜色, DewIcon 的 color 会继承此属性</td>
        <td></td>
        <td>String</td>
        <td></td>
      </tr>
      <tr>
        <td>iconName</td>
        <td>同 DewIcon 的 iconName, 与组件默认插槽冲突, 插槽优先级高</td>
        <td></td>
        <td>String</td>
        <td>to-top</td>
      </tr>
      <tr>
        <td>svgName</td>
        <td>同 DewIcon 的 svgName, 与组件默认插槽冲突, 插槽优先级高</td>
        <td></td>
        <td>String</td>
        <td></td>
      </tr>
    </table>

    <h4 style="margin: 20px 0;">测试用例</h4>
    <strong>我爱工作，工作使我快乐。</strong><br>
    <strong>我爱老板，老板是我的衣食父母。</strong><br>
    <strong>我爱同事，同事是我的兄弟姐妹，工作使我进步，工作使我脱离贫穷。</strong><br>
    <img style="margin-top: 20px;" src="@/assets/img/love_work.webp" alt="我爱工作，工作使我快乐，我爱老板，老板是我的衣食父母">

  </div>
</template>

<script>
export default {
  name: 'back-top',
  data () {
    return {
      isShow1: false,
      isShow2: false
    }
  },
  methods: {
    onToogleCodeFn1 () {
      this.isShow1 = !this.isShow1
    },
    onToogleCodeFn2 () {
      this.isShow2 = !this.isShow2
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
