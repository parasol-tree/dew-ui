<template>
  <div class="pageSwitch">
    <h2>Switch 开关</h2>
    <p class="hintText">两种状态间切换时用到的开关选择器。</p>
    <h4>基础用法</h4>
    <div class="baseCard">
      <DewSwitch v-model="switchVal1" @on-change="changeFn" /> <span>开关状态{{ switchVal1 }}</span>
<pre class="pre" v-highlightjs v-show="isShow1">
<code class="code html">
  &lt;template&gt;
    &lt;DewSwitch v-model=&quot;switchVal1&quot; @on-change=&quot;changeFn&quot; /&gt; &lt;span&gt;开关状态&lcub;&lcub;switchVal1&rcub; &rcub;&lt;/span&gt;
  &lt;/template&gt;
  &lt;script&gt;
    export default {
      data () {
        return {
          switchVal1: false
        }
      },
      methods: {
        changeFn (status) {
          console.log('开关状态：' + status);
        }
      }
    }
  &lt;/script&gt;
</code>
</pre>
      <ToogleCode @emit-toogleCode="onToogleCodeFn1"/>
    </div>

    <h4>禁用状态</h4>
    <div class="baseCard">
      <DewSwitch disabled style="margin-right: 10px;" />
      <DewSwitch v-model="switchVal2" :disabled="true" />
<pre class="pre" v-highlightjs v-show="isShow2">
<code class="code html">
  &lt;template&gt;
    &lt;DewSwitch disabled /&gt;
    &lt;DewSwitch v-model=&quot;switchVal2&quot; :disabled=&quot;true&quot; /&gt;
  &lt;/template&gt;
  &lt;script&gt;
    export default {
      data () {
        return {
          switchVal2: true
        }
      }
    }
  &lt;/script&gt;
</code>
</pre>
      <ToogleCode @emit-toogleCode="onToogleCodeFn2"/>
    </div>

    <h4>自定义显示内容</h4>
    <p class="hintText">自定义内容, 如果使用2个汉字, 建议将开关尺寸 size 设置为 large。</p>
    <div class="baseCard">
      <DewSwitch style="margin-right: 10px;">
        <template v-slot:active>
          <span>开</span>
        </template>
        <template v-slot:inactive>
          <span>关</span>
        </template>
      </DewSwitch>
      <DewSwitch size="large">
        <template v-slot:active>
          <span>开了</span>
        </template>
        <template v-slot:inactive>
          <span>关了</span>
        </template>
      </DewSwitch>
<pre class="pre" v-highlightjs v-show="isShow3">
<code class="code html">
  &lt;template&gt;
    &lt;DewSwitch&gt;
      &lt;template v-slot:active&gt;
        &lt;span&gt;开&lt;/span&gt;
      &lt;/template&gt;
      &lt;template v-slot:inactive&gt;
        &lt;span&gt;关&lt;/span&gt;
      &lt;/template&gt;
    &lt;/DewSwitch&gt;
    &lt;DewSwitch size="large"&gt;
      &lt;template v-slot:active&gt;
        &lt;span&gt;开了&lt;/span&gt;
      &lt;/template&gt;
      &lt;template v-slot:inactive&gt;
        &lt;span&gt;关了&lt;/span&gt;
      &lt;/template&gt;
    &lt;/DewSwitch&gt;
  &lt;/template&gt;
</code>
</pre>
      <ToogleCode @emit-toogleCode="onToogleCodeFn3"/>
    </div>

    <h4>自定义颜色，选中的值，未选中的值</h4>
    <div class="baseCard">
      <p class="hintText" style="margin-bottom: 10px;">自定义颜色。</p>
      <DewSwitch activeBackgroundColor="red" inactiveBackgroundColor="blue" style="margin-right: 10px;" />
      <p class="hintText" style="margin: 10px 0;">选中的值，未选中的值。</p>
      <DewSwitch activeVal="打开了" inactiveVal="关闭了" v-model="switchVal3" />选中的值/未选中的值:<span style="color: red;">{{ switchVal3 }}</span>
<pre class="pre" v-highlightjs v-show="isShow4">
<code class="code html">
  &lt;template&gt;
    &lt;DewSwitch activeBackgroundColor="red" inactiveBackgroundColor="blue" /&gt;
    &lt;DewSwitch activeVal="打开了" inactiveVal="关闭了" v-model="switchVal3" /&gt;
    选中的值/未选中的值:&lt;span style="color: red;"&gt;&lcub;&lcub; switchVal3 &rcub; &rcub;&lt;/span&gt;
  &lt;/template&gt;
  &lt;script&gt;
    export default {
      data () {
        return {
          switchVal3: '关闭了'
        }
      }
    }
  &lt;/script&gt;
</code>
</pre>
      <ToogleCode @emit-toogleCode="onToogleCodeFn4"/>
    </div>

    <h4>加载中</h4>
    <p class="hintText">标识开关操作仍在执行中。</p>
    <div class="baseCard">
      <DewSwitch :loading="isLoading" v-model="switchVal4" size="large" style="margin-right: 10px;" />
      <DewSwitch loading style="margin-right: 10px;" />
      <DewSwitch :loading="isLoading" v-model="switchVal4" size="small" />
<pre class="pre" v-highlightjs v-show="isShow5">
<code class="code html">
  &lt;template&gt;
    &lt;DewSwitch :loading="isLoading" v-model="switchVal4" size="large" /&gt;
    &lt;DewSwitch loading /&gt;
    &lt;DewSwitch :loading="isLoading" v-model="switchVal4" size="small" /&gt;
  &lt;/template&gt;
  &lt;script&gt;
    export default {
      data () {
        return {
          isLoading: true,
          switchVal4: true
        }
      }
    }
  &lt;/script&gt;
</code>
</pre>
      <ToogleCode @emit-toogleCode="onToogleCodeFn5"/>
    </div>

    <h4>Switch props</h4>
    <table class="table" border="1">
      <tr>
        <th>属性</th>
        <th>说明</th>
        <th>可选值</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>value</td>
        <td>指定当前是否选中，可以使用 v-model 双向绑定数据</td>
        <td></td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用开关</td>
        <td>true, false</td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>activeVal</td>
        <td>选中时的值</td>
        <td></td>
        <td>String, Number, Boolean</td>
        <td>true</td>
      </tr>
      <tr>
        <td>inactiveVal</td>
        <td>取消选中时的值</td>
        <td></td>
        <td>String, Number, Boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>size</td>
        <td>开关的尺寸</td>
        <td>small, large, default</td>
        <td>String</td>
        <td>default</td>
      </tr>
      <tr>
        <td>activeBackgroundColor</td>
        <td>选中时的 开关背景色, 支持类型 HEX RGB RGBA HSL HSLA, color of EnglishWord</td>
        <td></td>
        <td>String</td>
        <td></td>
      </tr>
      <tr>
        <td>activeBackgroundColor</td>
        <td>取消选中时的 开关背景色, 支持类型 HEX RGB RGBA HSL HSLA, color of EnglishWord</td>
        <td></td>
        <td>String</td>
        <td></td>
      </tr>
      <tr>
        <td>switchBtnBg</td>
        <td>开关按钮 的颜色, 支持类型 HEX RGB RGBA HSL HSLA, color of EnglishWord</td>
        <td></td>
        <td>String</td>
        <td></td>
      </tr>
      <tr>
        <td>loading</td>
        <td>标识开关是否处于加载中</td>
        <td>true, false</td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>before-change</td>
        <td>返回 Promise 可以阻止切换<span style="color: red;">（功能开发中）</span></td>
        <td></td>
        <td>Promise</td>
        <td></td>
      </tr>
    </table>

    <h4 style="color: #ed4014;">开发中的功能</h4>
    <div class="baseCard">
      <p class="hintText" style="color: #ed4014;">1、接收一个 Promise 做为属性, 以阻止切换</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'pageSwitch',
  data () {
    return {
      switchVal1: false,
      switchVal2: true,
      switchVal3: '关闭了',
      switchVal4: true,
      isLoading: true,
      isShow1: false,
      isShow2: false,
      isShow3: false,
      isShow4: false,
      isShow5: false
    }
  },
  methods: {
    changeFn (status) {
      console.log('开关状态 --->', status)
    },
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
    onToogleCodeFn5 () {
      this.isShow5 = !this.isShow5
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
