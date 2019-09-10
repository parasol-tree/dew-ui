# dew-ui
A high quality UI components Library with Vue.js

```
beta version,
please do not download
测试版本,
请不要下载

# 作者注(Author's note):
  目前只有我一个人 在开发与维护, 利用的 是 下班之后的时间 在开发, 进度略慢, 开发完成我会在 issue 内 说明.
  At present, I am only developing and maintaining.
  Utilizing the time after work for development.
  the progress is slightly slower. I will explain in the issue after the development is completed.

  目前 npm 仓库内还是最原始的代码,只有 一个 button 组件,这个框架写到 70% 我会 提交到 npm 仓库的.
  Currently the npm repository is still the most primitive code, with only one button and icon component.
  When this framework is written to 70%, I will submit it to the npm repository.
```
## Build Setup

``` bash
## 安装 (install)
npm install dew-ui --save
或者 (or)
yarn add dew-ui
```

## 用法 (usage):
完整引入列表, 只支持 按需引入 (css 集成在 各自的组建内, 不需要单独引入 组件 css 文件)
正在考虑是否将 css 单独放置在css文件内
Full import list, only support on-demand (css integrated in their respective components, no need to introduce component css files separately).
Considering whether to place css separately in the css file

```
import Vue from 'vue'
import {
  DewButton,
  DewIcon,
  DewBackTop,
  DewDividingLine
} from 'dew-ui'

Vue.use(DewButton)
Vue.use(DewIcon)
Vue.use(DewBackTop)
Vue.use(DewDividingLine)
```
# API
## DewButton(button, 按钮)
```
  <dew-button
    disabled
    native-type="button"
    type="warning"
  >
    Warning
  </dew-button>
# DewButton props
属性                   说明                                                                          类型          默认值
type                   按钮类型 [default, primary, dashed, text, info, success, warning, error]       String       default
disabled               是否禁用按钮                                                                    Boolean      false
nativeType             button 原生属性 type, 仅支持三种 [button, submit, reset]                         String       button
prefixIcon             前缀 icon 同 DewIcon 的 iconCategory
suffixIcon             后缀 icon 同 DewIcon 的 iconCategory
iconButton             带 icon 的 button, 同 DewIcon 的 iconCategory                                   String        ''
iconSize               同 DewIcon 的 iconSize
iconUnit               同 DewIcon 的 iconUnit
iconColor              同 DewIcon 的 iconColor
iconBackgroundColor    同 DewIcon 的 iconBackgroundColor
```

## DewIcon(icon, 矢量图标)
```
  需要在 main.js 内 引入 index.css
  import '你的 main.js 相对于根的路径/node_modules/dew-ui/theme/index.css'
  <dew-icon iconCategory="huidaodingbu"></dew-icon>
  支持自定义 icon eg: <dew-icon class="iconfont userIconName"></dew-icon>
# DewIcon props
属性                说明                                                                              类型              默认值
iconCategory       icon 的 名字, 自定义的 icon 会覆盖 组件自身上的 iconCategory 属性                     String            ''
size               字体大小 (eg: size="23" 相当于设置了 font-size: 23px;)                              Number, String    null
unit               字体大小的单位,可选值 ['px', 'em', 'rem', 'vh', 'vw']                               String            px
color              字体颜色 支持类型 [HEX RGB RGBA HSL HSLA color of EnglishWord(eg: color="red")]     String           null
backgroundColor    字体的背景色 支持类型 [HEX, RGB, RGBA, HSL, HSLA, color of EnglishWord]             String            null

# DewBackTop events
事件名       说明            返回值                   默认值
icon-click  icon 单击时触发  该组件的 props 属性       该组件的 props 属性(以对象的形式返回)
```

## DewBackTop(返回顶部)
```
  <dew-back-top iconCategory="huidaodingbu"></<dew-back-top>
  <dew-back-top>返回顶部</<dew-back-top>
  html,body 设置 css 属性 overflow 时 该组件无效
# DewBackTop props
属性                  说明                                                                类型      默认值
bottom                组件距离底部的距离, 单位 px                                           Number     30
right                 组件距离右部的距离, 单位 px                                           Number     30
duration              滚动动画持续时间，单位 (ms)毫秒                                        Number     1000
height                页面滚动高度 >= 该值时显示BackTop组件(height = 0 不显示按钮)             Number     0
backgroundColor       组件 背景颜色, 同 DewIcon 的 iconColor
color                 组件 内文字的 颜色 同 DewIcon 的 iconColor(与 iconColor 只生效一个)
iconCategory          同 DewIcon 的 iconCategory
iconSize              同 DewIcon 的 iconSize
iconUnit              同 DewIcon 的 iconUnit
iconColor             同 DewIcon 的 iconColor
iconBackgroundColor   同 DewIcon 的 iconBackgroundColor

# DewBackTop events
事件名     说明                返回值                               默认值
on-click  点击按钮时触发        页面滚动的距离(scrollTop)单位 px      无

```
## DewDividingLine(分界线)
```
  <dew-dividing-line></dew-dividing-line>
# DewBackTop props
属性        说明                                                                     类型      默认值
position    分界线 标题的位置，可选值为 left、right 或 center                           String    center
direction   分界线 水平还是垂直类型，可选值为 horizontal 或 vertical                     String    horizontal
type        分界线 的类型, 可选值为 solid, dashed, wavyLine                            String    solid
color       分界线 的颜色                                                             String    #e8eaec
margin      分界线 上下的 margin 值, 单位 px, direction 为 vertical 时无效              Number     10
```
## DewSwitch(开关)
```
  <dew-switch></dew-switch>
# DewSwitch props
属性                     说明                                                                     类型                         默认值
value                    指定当前是否选中, 可以使用 v-model 双向数据绑定                              String, Number, Boolean      false
disabled                 是否禁用开关                                                              Boolean                      false
activeVal                选中时的值                                                                String, Number, Boolean      true
inactiveVal              没有选中时的值                                                            String, Number, Boolean       false
size                     开关的尺寸，可选值为 small、large、default                                 String                       'default'
activeBackgroundColor    选中时的 开关背景色                                                       String                        null
inactiveBackgroundColor  取消选中时的 开关背景色                                                    String                        null
switchBackgroundColor    按钮 的颜色                                                               String                       #fff

# DewBackTop events
事件名       说明                                返回值                               默认值
on-change    开关变化时触发，返回当前选中时的值/开关的状态                               true or false

# DewBackTop slot
名称                说明
active              自定义显示 开关 打开时的内容
inactive            自定义显示 开关 关闭时的内容

Vue 2.6.0+
  <dew-switch>
    <template v-slot:active>
      <span>开</span>
    </template>
    <template v-slot:inactive>
      <span>关</span>
    </template>
  </dew-switch>
vue 2.6.0-
  <dew-switch>
    <span slot="active">开</span>
    <span slot="inactive">关</span>
  </dew-switch>

tips: 两个文字时建议 size 属性值 为 large
```

[docs for dew-ui](http://www.dew-ui.com/).
