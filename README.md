# dew-ui
A high quality UI components Library with Vue.js

```
version beta
please do not download
测试版本, 请不要下载

# 作者注:
  目前只实现了 基本的 button, icon 组件,
  button 组件 不能附带 icon, icon 功能 正在开发中...
  icon 组件 没有 icon 功能, 正在开发中...
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
```SPA
<template>
  <dew-button
    disabled
    native-type="button"
    type="warning"
  >Warning</dew-button>
</template>
<script>
import Vue from 'vue'
import { DewButton } from 'dew-ui'

Vue.use(DewButton)

export default {}
</script>
```

```
# DewButton
属性 type
[default, primary, dashed, text, info, success, warning, error ]

属性 disabled 是否禁用按钮
disabled: Boolean 或者 disabled

属性 nativeType (设置 button 原生的 type)
[button, submit, reset]

# DewIcon
属性 color
[HEX RGB RGBA HSL HSLA word(eg: red, skyblue)]

属性 font-size
digital (eg: 23)

```

```
[docs](https://github.com/parasol-tree/dew-ui).
```

