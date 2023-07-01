<template>
  <div class="pageButton">
    <h2>Button 按钮</h2>
    <h4>基础用法</h4>
    <p class="hintText" style="color: red;">如不需要使用icon不必引入 icon 的 css</p>
    <p class="hintText" style="color: red;">在 main.js 内 引入 icon 的 css</p>
    <p class="hintText" style="color: red;">import 'dew-ui/theme/font/dew-icons.css'</p>
    <div class="baseCard">
      <DewButton @dblclick="dblclickFn">默认按钮</DewButton>
      <DewButton type="primary">primary</DewButton>
      <DewButton type="dashed">dashed</DewButton>
      <DewButton type="info">info</DewButton>
      <DewButton type="success">success</DewButton>
      <DewButton type="warning">warning</DewButton>
      <DewButton type="error">error</DewButton>
      <DewButton type="text" style="margin-left: 0;">text文本</DewButton>
      <div>
        <DewButton type="primary" prefixIcon="clock">闹钟</DewButton>
        <DewButton type="primary" suffixIcon="edit">编辑</DewButton>
        <DewButton type="error" iconButton="delete"></DewButton>
      </div>
<pre class="pre" v-highlightjs v-show="isShow1">
<code class="code html" >
  &lt;DewButton&gt;默认按钮&lt;/DewButton&gt;
  &lt;DewButton type="primary"&gt;primary&lt;/DewButton&gt;
  &lt;DewButton type="dashed"&gt;dashed&lt;/DewButton&gt;
  &lt;DewButton type="info"&gt;info&lt;/DewButton&gt;
  &lt;DewButton type="success"&gt;success&lt;/DewButton&gt;
  &lt;DewButton type="warning"&gt;warning&lt;/DewButton&gt;
  &lt;DewButton type="error"&gt;error&lt;/DewButton&gt;
  &lt;DewButton type="text"&gt;text文本&lt;/DewButton&gt;

  &lt;DewButton type="primary" prefixIcon="clock"&gt;闹钟&lt;/DewButton&gt;
  &lt;DewButton type="primary" suffixIcon="edit"&gt;编辑&lt;/DewButton&gt;
  &lt;DewButton type="error" iconButton="delete"&gt;&lt;/DewButton&gt;
</code>
</pre>
      <ToogleCode @emit-toogleCode="onToogleCodeFn1"/>
    </div>

    <h4>禁用状态</h4>
    <p class="hintText">添加属性 disabled 即可，也可用变量控制</p>
    <div class="baseCard">
      <DewButton disabled>默认按钮</DewButton>
      <DewButton type="primary" disabled>primary</DewButton>
      <DewButton type="dashed" disabled>dashed</DewButton>
      <DewButton type="info" disabled>info</DewButton>
      <DewButton type="success" disabled>success</DewButton>
      <DewButton type="warning" disabled>warning</DewButton>
      <DewButton type="error" disabled>error</DewButton>
      <DewButton type="text" disabled style="margin-left: 0;">text文本</DewButton>
      <div>
        <DewButton type="primary" prefixIcon="clock" disabled>闹钟</DewButton>
        <DewButton type="primary" suffixIcon="edit" disabled>编辑</DewButton>
        <DewButton type="error" iconButton="delete" disabled></DewButton>
      </div>
<pre class="pre" v-highlightjs v-show="isShow2">
<code class="code html">
  &lt;DewButton&gt;默认按钮&lt;/DewButton&gt;
  &lt;DewButton type="primary" disabled&gt;primary&lt;/DewButton&gt;
  &lt;DewButton type="dashed" disabled&gt;dashed&lt;/DewButton&gt;
  &lt;DewButton type="info" disabled&gt;info&lt;/DewButton&gt;
  &lt;DewButton type="success" disabled&gt;success&lt;/DewButton&gt;
  &lt;DewButton type="warning" disabled&gt;warning&lt;/DewButton&gt;
  &lt;DewButton type="error" disabled&gt;error&lt;/DewButton&gt;
  &lt;DewButton type="text" disabled&gt;text文本&lt;/DewButton&gt;

  &lt;DewButton type="primary" prefixIcon="clock" disabled&gt;闹钟&lt;/DewButton&gt;
  &lt;DewButton type="primary" suffixIcon="edit" disabled&gt;编辑&lt;/DewButton&gt;
  &lt;DewButton type="error" iconButton="delete" disabled&gt;&lt;/DewButton&gt;
</code>
</pre>
      <ToogleCode @emit-toogleCode="onToogleCodeFn2"/>
    </div>

    <h4>文字按钮</h4>
    <div class="baseCard">
      <DewButton type="text">text文本</DewButton>
      <DewButton type="text" disabled>text文本</DewButton>
<pre class="pre" v-highlightjs v-show="isShow3">
<code class="code html">
  &lt;DewButton type="text"&gt;text文本&lt;/DewButton&gt;
  &lt;DewButton type="text" disabled&gt;text文本&lt;/DewButton&gt;
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
        <td>type</td>
        <td>按钮类型</td>
        <td>default, primary, dashed, text, info, success, warning, error</td>
        <td>String</td>
        <td>default</td>
      </tr>
      <tr>
        <td>size</td>
        <td>按钮大小<span style="color: red;">（功能开发中）</span></td>
        <td>large, small, default</td>
        <td>String</td>
        <td>default</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用按钮</td>
        <td>true, false</td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>loading</td>
        <td>是否展示加载中的动画<span style="color: red;">（功能开发中）</span></td>
        <td>true, false</td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>nativeType</td>
        <td>原生属性 type</td>
        <td>button, submit, reset</td>
        <td>String</td>
        <td>button</td>
      </tr>
      <tr>
        <td>prefixIcon</td>
        <td>前缀 icon 的名字</td>
        <td></td>
        <td>String</td>
        <td></td>
      </tr>
      <tr>
        <td>suffixIcon</td>
        <td>后缀 icon 的名字</td>
        <td></td>
        <td>String</td>
        <td></td>
      </tr>
      <tr>
        <td>iconButton</td>
        <td>icon 的名字，与button的slot冲突</td>
        <td></td>
        <td>String</td>
        <td></td>
      </tr>
      <tr>
        <td>iconSize</td>
        <td>icon 的大小(即font-size)</td>
        <td></td>
        <td>String, Number</td>
        <td></td>
      </tr>
      <tr>
        <td>iconColor</td>
        <td>icon 的 颜色, 支持类型 HEX RGB RGBA HSL HSLA, color of EnglishWord</td>
        <td></td>
        <td>String</td>
        <td></td>
      </tr>
    </table>

    <h4>buttonGroup props</h4>
    <table class="table" border="1">
      <tr>
        <th>属性</th>
        <th>说明</th>
        <th>可选值</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>size</td>
        <td>按钮大小<span style="color: red;">（功能开发中）</span></td>
        <td>large, small, default</td>
        <td>String</td>
        <td>default</td>
      </tr>
      <tr>
        <td>isVertical</td>
        <td>是否纵向排列按钮组<span style="color: red;">（功能开发中）</span></td>
        <td>true, false</td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
    </table>
    <h4>button events</h4>
    <table class="table" border="1">
      <tr>
        <th>事件名</th>
        <th>说明</th>
        <th>返回值</th>
      </tr>
      <tr>
        <td>click</td>
        <td>单击鼠标左键时触发</td>
        <td>event</td>
      </tr>
      <tr>
        <td>dblclick</td>
        <td>双击鼠标左键时触发</td>
        <td>event</td>
      </tr>
    </table>

    <h4 style="color: #ed4014;">开发中的功能</h4>
    <div class="baseCard">
      <p class="hintText" style="color: #ed4014;">1、按钮加载中</p>
      <p class="hintText" style="color: #ed4014;">2、按钮尺寸</p>
      <p class="hintText" style="color: #ed4014;">3、按钮组</p>
      <p class="hintText" style="color: #ed4014;">4、按钮组横/纵向排列</p>
      <p class="hintText" style="color: #ed4014;">5、button组件和icon组件解耦</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageButton',
  data () {
    return {
      isShow1: false,
      isShow2: false,
      isShow3: false
    }
  },
  mounted () {
    // window.hljs.highlightAll()
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
    dblclickFn () {
      console.log('dblclickFn')
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
