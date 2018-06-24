(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{183:function(e,t,s){"use strict";s.r(t);var o=s(0),r=Object(o.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),s("p",[e._v("The most question I am asked is still about cross-domain issues. In fact, the cross-domain issue is really not a very difficult question to solve. Here I will briefly summarize several cross-domain solutions I recommend.")]),e._m(1),s("p",[e._v("The reason for the recommendation is: once the first match, and then no matter how many interfaces and project reuse will be OK, once and for all to solve the cross-domain problem, and regardless of the development environment or production environment can be easily used.")]),s("p",[e._v("But there are always trouble back-end development do not want to do this.That pure front-end is also has solutions.")]),s("p",[e._v("In dev environment, you can use webpack "),s("code",[e._v("proxy")]),e._v(", it is also very easy to use。 It's recommended that you look at the "),s("a",{attrs:{href:"https://doc.webpack-china.org/configuration/dev-server/#devserver-proxy",target:"_blank",rel:"noopener noreferrer"}},[e._v("document"),s("OutboundLink")],1),e._v(" and we're not going to discuss it here. Some of the author's personal projects use this method")]),e._m(2),e._m(3),e._m(4)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"cors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cors","aria-hidden":"true"}},[this._v("#")]),this._v(" Cors")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The most recommended way is also commonly used by our company is "),t("code",[this._v("cors")]),this._v(", full name is "),t("code",[this._v("Cross Origin Resource Sharing")]),this._v(".This solution does not make any difference to the front-end write request as usual. The workload is basically on the back-end. For each request, the browser must first send a pre-request as OPTIONS, to know the server-side HTTP method supported for cross-source requests. After confirming that the server allows the cross-source request, then send the real request with the actual HTTP request method.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("But this method can not used in the production environment. In production environment, you need to use nginx reverse proxy. Whether "),t("code",[this._v("proxy")]),this._v(" or "),t("code",[this._v("nginx")]),this._v(", the principle is the same. Solve the cross-domain issues by building a transit server to forward requests.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[this._v("development")]),t("th",[this._v("production")])])]),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[this._v("cors")]),t("td",[this._v("cors")])]),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[this._v("proxy")]),t("td",[this._v("nginx")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Here I only recommend these two ways cross-domain, the other cross-domain ways are many, but the only real mainstream is "),t("code",[this._v("cors")]),this._v(" and "),t("code",[this._v("nginx")]),this._v(".")])}],!1,null,null,null);t.default=r.exports}}]);