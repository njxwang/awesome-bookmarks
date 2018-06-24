(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{172:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("管理后台图表也是常见得需求。这里图表就只推荐ECharts，功能齐全，社区demo也丰富 "),a("a",{attrs:{href:"http://gallery.echartsjs.com/explore.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("gallery"),a("OutboundLink")],1),t._v("。")]),t._m(1),t._m(2),a("p",[a("a",{attrs:{href:"http://echarts.baidu.com/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack 中使用ECharts文档"),a("OutboundLink")],1)]),a("p",[a("a",{attrs:{href:"https://github.com/ecomfe/echarts/blob/master/index.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECharts 按需引入模块文档"),a("OutboundLink")],1)]),a("p",[t._v("接下来我们就要在 vue 中声明初始化 ECharts 了。因为 ECharts 初始化必须绑定 dom，所以我们只能在 vue 的 mounted 生命周期里进行初始化。")]),t._m(3),a("p",[t._v("就这样简单，ECharts就配置完成了，这时候你想说我的data是远程获取的，或者说我动态改变 ECharts 的配置该怎么办呢？我们可以通过 watch 来触发 setOptions 方法")]),t._m(4),a("p",[t._v("其实都差不多，还是要结合自己业务来封装。后面就和平时使用 ECharts 没有什么区别了。题外话 ECharts 的可配置项真心多，大家使用的时候可能要花一点时间了解它的 api 的。知乎有个问题：百度还有什么比较良心的产品？答案：ECharts，可见 ECharts 的强大与好用。")]),t._m(5),t._m(6),t._m(7),t._m(8),a("p",[t._v("当然社区里的其它图表如 "),a("a",{attrs:{href:"https://github.com/d3/d3",target:"_blank",rel:"noopener noreferrer"}},[t._v("d3"),a("OutboundLink")],1),t._v(" , "),a("a",{attrs:{href:"https://github.com/chartjs/Chart.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chart.js"),a("OutboundLink")],1),t._v(" , "),a("a",{attrs:{href:"https://github.com/gionkunz/chartist-js",target:"_blank",rel:"noopener noreferrer"}},[t._v("chartist-js"),a("OutboundLink")],1),t._v(" 等封装方法都是大同小异差不多的，这里就不再展开了。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"图表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图表","aria-hidden":"true"}},[this._v("#")]),this._v(" 图表")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我还是那个观点，大部分插件建议大家还是自己用 vue 来封装就好了，真的很简单。ECharts 支持 webpack 引入，图省事可以将 ECharts 整个引入 "),s("code",[this._v("var echarts = require('echarts')")]),this._v(" 不过 ECharts 还是不小的，如果只使用它小部分功能或者图表类型的话建议按需引入。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 按需引入 引入 ECharts 主模块")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" echarts "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'echarts/lib/echarts'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 引入柱状图")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'echarts/lib/chart/bar'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 引入提示框和标题组件")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'echarts/lib/component/tooltip'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'echarts/lib/component/title'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("//全部引入")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" echarts "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'echarts'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("mounted")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("initCharts")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nmethods"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("initCharts")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chart "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" echarts"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("init")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setOptions")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("setOptions")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chart"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setOption")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        text"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'ECharts 入门示例'")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      tooltip"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      xAxis"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        data"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"衬衫"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"羊毛衫"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"雪纺衫"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"裤子"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"高跟鞋"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"袜子"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      yAxis"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      series"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'销量'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        data"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("20")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("36")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("20")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("//第一种 watch options变化 利用vue的深度 watcher，options一有变化就重新setOption")]),t._v("\nwatch"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  options"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("handler")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chart"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setOption")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    deep"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//第二种 只watch 数据的变化 只有数据变化时触发ECharts")]),t._v("\nwatch"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("seriesData")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setOptions")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("series"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("val"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#demo","aria-hidden":"true"}},[this._v("#")]),this._v(" Demo")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://wpimg.wallstcn.com/137aeadd-ad0e-4b21-badd-c53f96b7482b.gif",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),s("p",[this._v("具体实例可参照 "),s("code",[this._v("@/views/dashboard/admin/components/")]),this._v(" 文件下几个 chart 文件")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"其它"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其它","aria-hidden":"true"}},[this._v("#")]),this._v(" 其它")])}],!1,null,null,null);s.default=o.exports}}]);