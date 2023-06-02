(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pageButton"],{f48c:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pageButton"},[e("h2",[t._v("Button 按钮")]),e("h4",[t._v("基础用法")]),e("p",{staticClass:"hintText",staticStyle:{color:"red"}},[t._v("如不需要使用icon不必引入 icon 的 css")]),e("p",{staticClass:"hintText",staticStyle:{color:"red"}},[t._v("在 main.js 内 引入 icon 的 css")]),e("p",{staticClass:"hintText",staticStyle:{color:"red"}},[t._v("import 'dew-ui/theme/font/dew-icons.css'")]),e("div",{staticClass:"baseCard"},[e("DewButton",{on:{dblclick:t.dblclickFn}},[t._v("默认按钮")]),e("DewButton",{attrs:{type:"primary"}},[t._v("primary")]),e("DewButton",{attrs:{type:"dashed"}},[t._v("dashed")]),e("DewButton",{attrs:{type:"info"}},[t._v("info")]),e("DewButton",{attrs:{type:"success"}},[t._v("success")]),e("DewButton",{attrs:{type:"warning"}},[t._v("warning")]),e("DewButton",{attrs:{type:"error"}},[t._v("error")]),e("DewButton",{staticStyle:{"margin-left":"0"},attrs:{type:"text"}},[t._v("text文本")]),e("div",[e("DewButton",{attrs:{type:"primary",prefixIcon:"clock"}},[t._v("闹钟")]),e("DewButton",{attrs:{type:"primary",suffixIcon:"edit"}},[t._v("编辑")]),e("DewButton",{attrs:{type:"error",iconButton:"delete"}})],1),e("pre",{directives:[{name:"show",rawName:"v-show",value:t.isShow1,expression:"isShow1"}],staticClass:"pre"},[e("code",{staticClass:"code"},[t._v('\n  <DewButton>默认按钮</DewButton>\n  <DewButton type="primary">primary</DewButton>\n  <DewButton type="dashed">dashed</DewButton>\n  <DewButton type="info">info</DewButton>\n  <DewButton type="success">success</DewButton>\n  <DewButton type="warning">warning</DewButton>\n  <DewButton type="error">error</DewButton>\n  <DewButton type="text">text文本</DewButton>\n\n  <DewButton type="primary" prefixIcon="clock">闹钟</DewButton>\n  <DewButton type="primary" suffixIcon="edit">编辑</DewButton>\n  <DewButton type="error" iconButton="delete"></DewButton>\n')]),t._v("\n")]),e("ToogleCode",{on:{"emit-toogleCode":t.onToogleCodeFn1}})],1),e("h4",[t._v("禁用状态")]),e("p",{staticClass:"hintText"},[t._v("添加属性 disabled 即可，也可用变量控制")]),e("div",{staticClass:"baseCard"},[e("DewButton",{attrs:{disabled:""}},[t._v("默认按钮")]),e("DewButton",{attrs:{type:"primary",disabled:""}},[t._v("primary")]),e("DewButton",{attrs:{type:"dashed",disabled:""}},[t._v("dashed")]),e("DewButton",{attrs:{type:"info",disabled:""}},[t._v("info")]),e("DewButton",{attrs:{type:"success",disabled:""}},[t._v("success")]),e("DewButton",{attrs:{type:"warning",disabled:""}},[t._v("warning")]),e("DewButton",{attrs:{type:"error",disabled:""}},[t._v("error")]),e("DewButton",{staticStyle:{"margin-left":"0"},attrs:{type:"text",disabled:""}},[t._v("text文本")]),e("div",[e("DewButton",{attrs:{type:"primary",prefixIcon:"clock",disabled:""}},[t._v("闹钟")]),e("DewButton",{attrs:{type:"primary",suffixIcon:"edit",disabled:""}},[t._v("编辑")]),e("DewButton",{attrs:{type:"error",iconButton:"delete",disabled:""}})],1),e("pre",{directives:[{name:"show",rawName:"v-show",value:t.isShow2,expression:"isShow2"}],staticClass:"pre"},[e("code",{staticClass:"code"},[t._v('\n  <DewButton>默认按钮</DewButton>\n  <DewButton type="primary" disabled>primary</DewButton>\n  <DewButton type="dashed" disabled>dashed</DewButton>\n  <DewButton type="info" disabled>info</DewButton>\n  <DewButton type="success" disabled>success</DewButton>\n  <DewButton type="warning" disabled>warning</DewButton>\n  <DewButton type="error" disabled>error</DewButton>\n  <DewButton type="text" disabled>text文本</DewButton>\n\n  <DewButton type="primary" prefixIcon="clock" disabled>闹钟</DewButton>\n  <DewButton type="primary" suffixIcon="edit" disabled>编辑</DewButton>\n  <DewButton type="error" iconButton="delete" disabled></DewButton>\n')]),t._v("\n")]),e("ToogleCode",{on:{"emit-toogleCode":t.onToogleCodeFn2}})],1),e("h4",[t._v("文字按钮")]),e("div",{staticClass:"baseCard"},[e("DewButton",{attrs:{type:"text"}},[t._v("text文本")]),e("DewButton",{attrs:{type:"text",disabled:""}},[t._v("text文本")]),e("pre",{directives:[{name:"show",rawName:"v-show",value:t.isShow3,expression:"isShow3"}],staticClass:"pre"},[e("code",{staticClass:"code"},[t._v('\n  <DewButton type="text">text文本</DewButton>\n  <DewButton type="text" disabled>text文本</DewButton>\n')]),t._v("\n")]),e("ToogleCode",{on:{"emit-toogleCode":t.onToogleCodeFn3}})],1),e("h4",[t._v("button props")]),t._m(0),e("h4",[t._v("buttonGroup props")]),t._m(1),e("h4",[t._v("button events")]),t._m(2),e("h4",{staticStyle:{color:"#ed4014"}},[t._v("开发中的功能")]),t._m(3)])},n=[function(){var t=this,e=t._self._c;return e("table",{staticClass:"table",attrs:{border:"1"}},[e("tr",[e("th",[t._v("属性")]),e("th",[t._v("说明")]),e("th",[t._v("可选值")]),e("th",[t._v("类型")]),e("th",[t._v("默认值")])]),e("tr",[e("td",[t._v("type")]),e("td",[t._v("按钮类型")]),e("td",[t._v("default, primary, dashed, text, info, success, warning, error")]),e("td",[t._v("String")]),e("td",[t._v("default")])]),e("tr",[e("td",[t._v("size")]),e("td",[t._v("按钮大小"),e("span",{staticStyle:{color:"red"}},[t._v("（功能开发中）")])]),e("td",[t._v("large, small, default")]),e("td",[t._v("String")]),e("td",[t._v("default")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("是否禁用按钮")]),e("td",[t._v("true, false")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("loading")]),e("td",[t._v("是否展示加载中的动画"),e("span",{staticStyle:{color:"red"}},[t._v("（功能开发中）")])]),e("td",[t._v("true, false")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("nativeType")]),e("td",[t._v("原生属性 type")]),e("td",[t._v("button, submit, reset")]),e("td",[t._v("String")]),e("td",[t._v("button")])]),e("tr",[e("td",[t._v("prefixIcon")]),e("td",[t._v("前缀 icon 的名字")]),e("td"),e("td",[t._v("String")]),e("td")]),e("tr",[e("td",[t._v("suffixIcon")]),e("td",[t._v("后缀 icon 的名字")]),e("td"),e("td",[t._v("String")]),e("td")]),e("tr",[e("td",[t._v("iconButton")]),e("td",[t._v("icon 的名字，与button的slot冲突")]),e("td"),e("td",[t._v("String")]),e("td")]),e("tr",[e("td",[t._v("iconSize")]),e("td",[t._v("icon 的大小(即font-size)")]),e("td"),e("td",[t._v("String, Number")]),e("td")]),e("tr",[e("td",[t._v("iconColor")]),e("td",[t._v("icon 的 颜色, 支持类型 HEX RGB RGBA HSL HSLA, color of EnglishWord")]),e("td"),e("td",[t._v("String")]),e("td")])])},function(){var t=this,e=t._self._c;return e("table",{staticClass:"table",attrs:{border:"1"}},[e("tr",[e("th",[t._v("属性")]),e("th",[t._v("说明")]),e("th",[t._v("可选值")]),e("th",[t._v("类型")]),e("th",[t._v("默认值")])]),e("tr",[e("td",[t._v("size")]),e("td",[t._v("按钮大小"),e("span",{staticStyle:{color:"red"}},[t._v("（功能开发中）")])]),e("td",[t._v("large, small, default")]),e("td",[t._v("String")]),e("td",[t._v("default")])]),e("tr",[e("td",[t._v("isVertical")]),e("td",[t._v("是否纵向排列按钮组"),e("span",{staticStyle:{color:"red"}},[t._v("（功能开发中）")])]),e("td",[t._v("true, false")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")])])])},function(){var t=this,e=t._self._c;return e("table",{staticClass:"table",attrs:{border:"1"}},[e("tr",[e("th",[t._v("事件名")]),e("th",[t._v("说明")]),e("th",[t._v("返回值")])]),e("tr",[e("td",[t._v("click")]),e("td",[t._v("单击鼠标左键时触发")]),e("td",[t._v("event")])]),e("tr",[e("td",[t._v("dblclick")]),e("td",[t._v("双击鼠标左键时触发")]),e("td",[t._v("event")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"baseCard"},[e("p",{staticClass:"hintText",staticStyle:{color:"#ed4014"}},[t._v("1、按钮加载中")]),e("p",{staticClass:"hintText",staticStyle:{color:"#ed4014"}},[t._v("2、按钮尺寸")]),e("p",{staticClass:"hintText",staticStyle:{color:"#ed4014"}},[t._v("3、按钮组")]),e("p",{staticClass:"hintText",staticStyle:{color:"#ed4014"}},[t._v("4、按钮组横/纵向排列")]),e("p",{staticClass:"hintText",staticStyle:{color:"#ed4014"}},[t._v("5、button组件和icon组件解耦")])])}],i={name:"pageButton",data(){return{isShow1:!1,isShow2:!1,isShow3:!1}},methods:{onToogleCodeFn1(){this.isShow1=!this.isShow1},onToogleCodeFn2(){this.isShow2=!this.isShow2},onToogleCodeFn3(){this.isShow3=!this.isShow3},dblclickFn(){console.log("dblclickFn")}}},r=i,a=o("2877"),d=Object(a["a"])(r,s,n,!1,null,"f2f6807a",null);e["default"]=d.exports}}]);