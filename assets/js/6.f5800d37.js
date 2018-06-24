(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{218:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),s("p",[t._v("本功能是响应大家需求，后期加上的，其实本人在公司项目或者个人项目中是不太使用该功能的。以前那些传统后台框架往往会包含此功能，由于以前的后台项目大部分都是多页面的形式，所以标签栏导航功能还是具有一定意义的基本，大部分都是基于iframe的方式实现的。")]),s("p",[t._v("但随着时代的发展，现在的后台项目几乎都是 spa(single page web application 单页面开发)，再使用以前的方案来实现标签导航显然是不合适的。")]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),s("p",[t._v("目前 tags-view 维护了两个数组。")]),s("ul",[s("li",[t._v("visitedViews : 用户访问过的页面 就是标签栏导航显示的一个个 tag 数组集合")]),s("li",[t._v("cachedViews : 实际 keep-alive 的路由。可以在配置路由的时候通过 "),s("code",[t._v("meta.noCache")]),t._v(" 来设置是否需要缓存这个路由 默认都缓存。"),s("router-link",{attrs:{to:"./router-and-nav.html"}},[t._v("配置文档")])],1)]),t._m(6),s("p",[t._v("由于目前 "),s("code",[t._v("keep-alive")]),t._v(" 和 "),s("code",[t._v("router-view")]),t._v(" 是强耦合的，而且查看文档和源码不难发现 "),s("code",[t._v("keep-alive")]),t._v(" 的 "),s("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#keep-alive",target:"_blank",rel:"noopener noreferrer"}},[t._v("include"),s("OutboundLink")],1),t._v(" 默认是优先匹配组件的 "),s("strong",[t._v("name")]),t._v(" ，所以在编写路由 router 和路由对应的 view component 的时候一定要确保 两者的 name 是完全一致的。(切记 name 命名时候尽量保证唯一性 切记不要可某些组件的命名重复了，不然会递归引用最后内存溢出等问题)")]),t._m(7),t._m(8),t._m(9),s("p",[t._v("一定要保证两着的名字相同，切记写重或者写错。默认如果不写name 就不会被缓存，详情见"),s("a",{attrs:{href:"https://github.com/vuejs/vue/issues/6938#issuecomment-345728620",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue"),s("OutboundLink")],1),t._v("。")]),t._m(10),t._m(11),s("ul",[s("li",[s("p",[t._v("不使用 keep-alive 的 include 功能 ，直接是用 keep-alive 缓存所有组件，这样子是支持前面所说的业务情况的。\n前往"),s("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/views/layout/components/AppMain.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/layout/components/AppMain.vueAppMain.vue"),s("OutboundLink")],1),t._v("文件下，移除"),s("code",[t._v("include")]),t._v("相关代码即可。当然直接使用keep-alive 也是有弊端的，他并不能动态的删除缓存，你最多只能帮它设置一个最大缓存实例的个数limit。"),s("a",{attrs:{href:"https://github.com/vuejs/vue/issues/6509",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关issue"),s("OutboundLink")],1)])]),t._m(12)]),t._m(13),s("p",[t._v("其实 keep-alive "),s("a",{attrs:{href:"https://github.com/vuejs/vue/blob/dev/src/core/components/keep-alive.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码"),s("OutboundLink")],1),t._v("不复杂，但逻辑还是蛮绕的，之前尤大自己修复一个bug的时候也不小心搞错了，连发两个版本来修复，所以如果没有标签导航栏需求的用户，建议移除此功能。")]),t._m(14),t._m(15),t._m(16)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"快捷导航-标签栏导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快捷导航-标签栏导航","aria-hidden":"true"}},[this._v("#")]),this._v(" 快捷导航(标签栏导航)")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("所以目前的方案大致为：\n运用 "),a("code",[this._v("keep-alive")]),this._v(" 和 "),a("code",[this._v("router-view")]),this._v(" 的结合。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("代码: "),a("code",[this._v("@/layout/components/AppMain.vue")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("keep-alive")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":include")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cachedViews"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-view")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-view")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("keep-alive")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("顶部标签栏导航实际作用相当于 nav 的另一种展现形式，其实说白了都是一个个router-link，点击跳转到相应的页面。然后我们在来监听路由 "),a("code",[this._v("$route")]),this._v(" 的变化，来判断当前页面是否需要重新加载或者已被缓存。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"visitedviews-cachedviews"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visitedviews-cachedviews","aria-hidden":"true"}},[this._v("#")]),this._v(" visitedViews && cachedViews")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项","aria-hidden":"true"}},[this._v("#")]),this._v(" 注意事项")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("DEMO:")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("//router 路由声明")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'create-form'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  component"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'@/views/form/create'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'createForm'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  meta"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'createForm'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" icon"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'table'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("//路由对应的view  form/create")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'createForm'")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"缓存不适合场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存不适合场景","aria-hidden":"true"}},[this._v("#")]),this._v(" 缓存不适合场景")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("目前缓存的方案对于某些业务是不适合的，比如文章详情页这种 "),a("code",[this._v("/article/1")]),a("code",[this._v("/article/2")]),this._v("，他们的路由不同但对应的组件却是一样的，所以他们的组件name 就是一样的，就如前面提到的，"),a("code",[this._v("keep-alive")]),this._v("的include 只能根据组件名来进行缓存，所以这样就出问题了。目前有两种解决方案：")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("p",[this._v("使用localstorage 等游览器缓存方案，自己进行缓存处理")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"移除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移除","aria-hidden":"true"}},[this._v("#")]),this._v(" 移除")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("首先找到 "),a("code",[this._v("@/layout/components/AppMain.vue")]),this._v(" 然后移除 "),a("code",[this._v("keep-alive")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("section")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app-main"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token style-attr language-css"}},[s("span",{attrs:{class:"token attr-name"}},[t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token property"}},[t._v("min-height")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transition")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fade-transform"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("mode")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("out-in"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-view")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-view")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("transition")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("section")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("然后移除整个 "),s("code",[t._v("@/layout/components/TagsView.vue")]),t._v(" 文件，并在"),s("code",[t._v("@/layout/components/index")]),t._v(" 和 "),s("code",[t._v("@/layout/Layout.vue")]),t._v(" 移除相应的依赖。最后把 "),s("code",[t._v("@/store/modules/tagsView")]),t._v(" 相关的代码删除即可。")])}],!1,null,null,null);a.default=e.exports}}]);