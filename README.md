# dew-ui
A high quality UI components Library with Vue.js

```
beta version,
please do not download
测试版本,
请不要下载

# 作者注:
  目前只实现了 基本的 DewButton, DewBackTop 组件,
  组件 不能附带 icon, DewIcon 组件 正在开发中...
  目前只有我一个人 在开发与维护, 利用的 是 下班之后的时间 在开发, 进度略慢, 开发完成我会在 issue 内 说明
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
  DewBackTop
} from 'dew-ui'

Vue.use(DewButton)
Vue.use(DewIcon)
Vue.use(DewBackTop)
```
# API
## DewButton
```
  <dew-button
    disabled
    native-type="button"
    type="warning"
  >
    Warning
  </dew-button>
# DewButton props
属性          说明                                                                          类型          默认值
type          按钮类型 [default, primary, dashed, text, info, success, warning, error]        String       default
disabled      是否禁用按钮                                                                     Boolean      false
nativeType    button 原生属性 type, 仅支持三种 [button, submit, reset]                          String       button
```

## DewIcon
```
  组件 不能附带 icon, DewIcon 组件 正在开发中...
  <dew-icon></dew-icon>
# DewIcon props
属性          说明                                                                            类型              默认值
color         字体颜色 支持类型 [HEX RGB RGBA HSL HSLA word(eg: color="red",  color="#333")]    String            无
size          字体大小 (eg: size="23" 相当于设置了 font-size: 23px;)                             Number, String    无
iconCategory  自定义 class 名                                                                   String            ''
```

## DewBackTop
```
  DewIcon 组件正在开发中, 所以目前不支持 slot 的 icon 的用法
  <dew-back-top></<dew-back-top>
  <dew-back-top>返回顶部</<dew-back-top>
# DewBackTop props
属性      说明                                    类型      默认值
height    页面滚动高度达到该值时才显示BackTop组件    Number     400
bottom    组件距离底部的距离                       Number     30
right     组件距离右部的距离                       Number     30
duration  滚动动画持续时间，单位 毫秒               Number     1000

# DewBackTop events
事件名     说明                                      返回值       默认值
on-click  点击按钮时触发,页面滚动的距离(scrollTop)      单位 px      无

```
[docs for dew-ui](http://www.dew-ui.com/).
