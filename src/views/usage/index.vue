<template>
  <div class="pageUsage">
    <h3>引入dew-ui（项目中使用 ）</h3>
    <h4>按需引入</h4>
    <pre class="pre">
  <code class="code">
    // main.js 内引入
    import Vue from 'vue'
    import {
      DewButton,
      DewIcon,
      DewBackTop,
      DewDividingLine,
      DewSwitch,
      DewProgress,
      DewCountUp,
      DewCopyText
    } from 'dew-ui'
    import 'dew-ui/theme/font/dew-icons.css' // 如不需要 DewIcon 组件不需要引入
    Vue.use(DewButton)
    Vue.use(DewIcon)
    Vue.use(DewBackTop)
    Vue.use(DewDividingLine)
    Vue.use(DewSwitch)
    Vue.use(DewProgress)
    Vue.use(DewCountUp)
    Vue.use(DewCopyText)
  </code>
  <code class="code">
    &lt;template&gt;
      &lt;DewButton&gt;一个按钮&lt;/DewButton&gt;
    &lt;/template&gt;
    &lt;script&gt;
    // 单文件组件 内引入
    import { DewButton } from 'dew-ui'

    export default {
      components: { DewButton }
    }
    &lt;/script&gt;
  </code>
    </pre>

    <h4>全量引入</h4>
    <pre class="pre">
      <code class="code">暂不支持</code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'usage'
}
</script>

<style lang="stylus" scoped>

</style>
