<template>
  <div class="pageIconBox">
    <input class="copyInput" value="">
    <h2>Icon 图标</h2>
    <h4>基础用法</h4>
    <p class="hintText">使用内置彩色图标建议使用 svg 模式</p>
    <div class="baseCard">
      删除<DewIcon iconName="delete" color="red" />
      code<DewIcon svgName="color-file-code" color="red" />
      拍照<i class="dew-icon-paizhao" style="margin-right: 10px;"></i>
      <DewButton type="error" prefixIcon="delete">删除</DewButton>
      <DewButton type="error" suffixIcon="delete">删除</DewButton>
      <DewButton type="primary" prefixIcon="search">搜索</DewButton>
      <DewButton type="primary" iconButton="send"></DewButton>
<pre class="pre" v-show="isShow1">
<code class="code">
  删除&lt;DewIcon iconName="delete" /&gt;
  code&lt;DewIcon svgName="delete" /&gt;
  也可以直接通过设置类名为 dew-icon-iconName 来使用
  拍照&lt;i class="dew-icon-delete"&gt;&lt;/i&gt;
  &lt;DewButton type="error" prefixIcon="delete"&gt;删除&lt;/DewButton&gt;
  &lt;DewButton type="error" suffixIcon="delete"&gt;删除&lt;/DewButton&gt;
  &lt;DewButton type="primary" suffixIcon="search"&gt;搜索&lt;/DewButton&gt;
  &lt;DewButton type="primary" iconButton="send"&gt;&lt;/DewButton&gt;
  <!-- 也支持<a href="https://www.iconfont.cn/" target="_blank" style="color: red;">阿里巴巴<span style="color: #304455;">(点击跳转)</span></a>的自定义 icon
  eg: &lt;DewIcon class="iconfont userIconName" /&gt; -->
</code>
</pre>
      <ToogleCode @emit-toogleCode="onToogleCodeFn1"/>
    </div>

    <h4>icon props</h4>
    <table class="table" border="1">
      <tr>
        <th>属性</th>
        <th>说明</th>
        <th>可选值</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>svgName</td>
        <td>svg 的 名字</td>
        <td></td>
        <td>String</td>
        <td></td>
      </tr>
      <tr>
        <td>iconName</td>
        <td>iconfont 的 名字</td>
        <td></td>
        <td>String</td>
        <td></td>
      </tr>
      <tr>
        <td>iconClass</td>
        <td>自定义 iconfont 的 类名</td>
        <td></td>
        <td>String</td>
        <td></td>
      </tr>
      <tr>
        <td>svgClass</td>
        <td>自定义 svg 的 类名</td>
        <td></td>
        <td>String</td>
        <td></td>
      </tr>
      <tr>
        <td>size</td>
        <td>iconfont/svg 的font-size, 如不写单位默认为 px</td>
        <td></td>
        <td>String, Number</td>
        <td></td>
      </tr>
      <tr>
        <td>styles</td>
        <td>iconfont/svg 的 样式对象, 会覆盖 传入的 color 属性</td>
        <td></td>
        <td>Object</td>
        <td></td>
      </tr>
      <tr>
        <td>color</td>
        <td>iconfont/svg 的颜色, 支持类型 HEX, RGB, RGBA, HSL, HSLA, color of EnglishWord</td>
        <td></td>
        <td>String</td>
        <td></td>
      </tr>
    </table>

    <h4>图标集合</h4>
    <p class="hintText">单击图标名称复制到剪切板</p>
    <!-- <div class="baseCard"> -->
      <ul class="iconUl">
        <li class="iconLi" v-for="item of iconList" :key="item">
          <DewIcon :svgName="item" size="30" />
          <span class="iconName" @click="copyIconNameFn(item)">{{ item }}</span>
        </li>
      </ul>
      <!-- <div class="DewIcon" v-for="item of iconList" :key="item">
        <DewIcon size="40" :iconName="item" />
        <div>{{ item }}</div>
      </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'icon',
  data () {
    return {
      isShow1: false,
      iconList: [
        'loading1',
        'loading2',
        'loading-dot',
        'loading-vientiane-corps',
        'renminbi',
        'renminbi1',
        'refresh',
        'visible',
        'eye_protection',
        'QRcode',
        'code',
        'deviceoff',
        'deviceon',
        'paizhao',
        'photo',
        'setting',
        'setting-filling',
        'upload1',
        'download1',
        'minus-circle',
        'add-circle',
        'voice_fill',
        'voice_empty',
        'file-database',
        'eye',
        'eye-close',
        'man',
        'woman',
        'menu',
        'menu2',
        'menu-left',
        'menu-left2',
        'color-folder-open2',
        'folder-open-fill',
        'folder-open',
        'color-folder-close2',
        'folder-close-fill',
        'folder-close',
        'color-folder-open1',
        'color-folder-close1',
        'color-file-image',
        'color-file-undefined',
        'color-file-music',
        'color-file-video',
        'color-file-word',
        'color-file-excel',
        'color-file-ppt',
        'color-file-email',
        'color-file-ppt2',
        'color-file-txt',
        'edit',
        'color-file-ppt1',
        'modular',
        'move',
        'save',
        'share1',
        'scanning',
        'zoom-in',
        'zoom-out',
        'color-file-code',
        'key1',
        'calendar',
        'sign-out',
        'sign-out-fill',
        'clock',
        'comment-fill',
        'comment',
        'message',
        'message-fill',
        'more1',
        'more2',
        'histroy',
        'arrow-top-small',
        'arrow-right-small',
        'arrow-bottom-small',
        'arrow-left-small',
        'cancel-full-screen',
        'full-screen',
        'correct-circle',
        'close-circle',
        'mute',
        'voice',
        'delete',
        'delete-fill',
        'top',
        'left',
        'bottom',
        'right',
        'right-large',
        'left-large',
        'top-large',
        'bottom-large',
        'notice-fill',
        'notice-empty',
        'send',
        'cloud',
        'cloud-upload',
        'cloud-download',
        'cloud-sync',
        'upload',
        'download',
        'warnfill',
        'warn',
        'pic',
        'lock',
        'unlock',
        'add',
        'minus',
        'slide-up',
        'slide-down',
        'close',
        'collection',
        'collection-fill',
        'search',
        'share',
        'like',
        'like-fill',
        'to-top'
      ]
    }
  },
  methods: {
    onToogleCodeFn1 () {
      this.isShow1 = !this.isShow1
    },
    copyIconNameFn (val) {
      const copyInput = document.querySelector('.copyInput')
      copyInput.value = val
      copyInput.select()
      document.execCommand('copy')
    }
  }
}
</script>

<style lang="stylus" scoped>
.copyInput
  position absolute
  left -99999px
  top -99999px

.iconUl
  margin-top 10px
  display flex
  justify-content flex-start
  align-items flex-start
  flex-wrap wrap
  border-top 1px solid #eee
  border-left 1px solid #eee
.iconLi
  display flex
  flex-direction column
  justify-content center
  align-items center
  width 16.66%
  height 120px
  // border 1px solid red
  border-right 1px solid #eee
  border-bottom 1px solid #eee
  .iconName
    margin-top 10px
    text-align center
    cursor pointer

.baseCard
  // display flex
  // justify-content flex-start
  // align-items center
  // padding-bottom 20px
  // background-color skyblue

.dew-btn
  margin-bottom: 0
</style>
