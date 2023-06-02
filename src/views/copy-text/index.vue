<template>
  <div class="page-copy-text">
    <h2>DewCopyText 复制到剪贴板</h2>
    <h4>基础用法</h4>
    <p class="hintText">将传入的一段文本复制到剪贴板</p>
    <div class="baseCard">
      <textarea cols="30" rows="4" v-model="text1"></textarea>
      <DewButton type="primary" style="margin-left: 10px;" @click="copyFn">复制</DewButton>
<pre class="pre" v-show="isShow1">
<code class="code">
  &lt;template&gt;
    &lt;textarea cols="30" rows="4" v-model="text1"&gt;&lt;/textarea&gt;
    &lt;DewButton type="primary" @click="copyFn"&gt;复制&lt;/DewButton&gt;
  &lt;/template&gt;
  &lt;script&gt;
    import Vue from 'vue'
    import { DewCopyText } from 'dew-ui'
    Vue.use(DewCopyText)

    export default {
      data () {
        return {
          text1: '这是一段文本'
        }
      },
      methods: {
        copyFn () {
          this.$_copyTextFn(this.text1)
            .then(res =&lt; {
              console.log('copyFn res ---&lt;', res)
            })
            .catch(err =&lt; {
              console.log('copyFn err ---&lt;', err)
            })
        }
      }
    }
  &lt;/script&gt;
</code>
</pre>
      <ToogleCode @emit-toogleCode="onToogleCodeFn1"/>
    </div>

    <h4>DewCopyText API</h4>
    <table class="table" border="1">
      <tr>
        <th>API 名字</th>
        <th>说明</th>
        <th>返回值</th>
      </tr>
      <tr>
        <td>_copyTextFn</td>
        <td>将传入的一段文本复制到剪贴板</td>
        <td>返回一个 Promise, 可以在 then 和 catch 的回调函数里拿到复制成功与否的状态</td>
      </tr>
    </table>

    <h4 style="color: #ed4014;">开发中的功能</h4>
    <div class="baseCard">
      <p class="hintText" style="color: #ed4014;">1、添加 vue 指令方式的调用</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'copy-text',
  data () {
    return {
      text1: '这是一段文本',
      isShow1: false
    }
  },
  methods: {
    onToogleCodeFn1 () {
      this.isShow1 = !this.isShow1
    },
    copyFn () {
      this.$_copyTextFn(this.text1)
        .then(res => {
          console.log('copyFn res --->', res)
        })
        .catch(err => {
          console.log('copyFn err --->', err)
        })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
