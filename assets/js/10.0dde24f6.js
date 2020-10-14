(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{356:function(t,n,s){"use strict";s.r(n);var e=s(41),a=Object(e.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dns-prefetch-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns-prefetch-control","aria-hidden":"true"}},[t._v("#")]),t._v(" DNS Prefetch Control "),s("Badge",{attrs:{text:"默认启用"}})],1),t._v(" "),s("p",[s("a",{attrs:{href:"https://helmetjs.github.io/docs/dns-prefetch-control/",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("简介：该中间件允许您通过设置"),s("code",[t._v("X-DNS-Prefetch-Control")]),t._v("响应头来禁用浏览器的DNS预解析。")]),t._v(" "),s("h2",{attrs:{id:"攻击方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#攻击方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 攻击方式")]),t._v(" "),s("p",[t._v("当您访问一个URL时，您的浏览器会去查找域的IP地址。举个例子，它必须将"),s("code",[t._v("example.com")]),t._v("解析为"),s("code",[t._v("93.184.216.34")]),t._v("。这个过程就叫做DNS解析。")]),t._v(" "),s("p",[t._v("浏览器可以在用户单击链接或是从某处加载资源之前启动这些DNS请求。这样就提高了用户点击链接时的性能，但也影响了用户的隐私。因为它可以理解为替用户访问了他们并未访问的链接。")]),t._v(" "),s("p",[t._v("扩展阅读")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Controlling_DNS_prefetching",target:"_blank",rel:"noopener noreferrer"}},[t._v("“Controlling DNS prefetching” on MDN"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://dev.chromium.org/developers/design-documents/dns-prefetching",target:"_blank",rel:"noopener noreferrer"}},[t._v("“DNS Prefetching” on Chromium docs"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.keycdn.com/support/prefetching/",target:"_blank",rel:"noopener noreferrer"}},[t._v("“Prefetching”"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"header详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#header详解","aria-hidden":"true"}},[t._v("#")]),t._v(" Header详解")]),t._v(" "),s("p",[s("code",[t._v("X-DNS-Prefetch-Control")]),t._v("告诉浏览器是否启用DNS预解析。开启它的时候不一定会起作用——不是所有浏览器都支持它——但是关闭的话则会在所有浏览器禁用DNS预解析。")]),t._v(" "),s("p",[t._v("您可以将"),s("code",[t._v("X-DNS-Prefetch-Control")]),t._v("设置为"),s("code",[t._v("on")]),t._v("/"),s("code",[t._v("off")]),t._v("，来启用/禁用DNS预解析。")]),t._v(" "),s("p",[t._v("大多数的浏览器不做DNS预解析，因此该请求头就被忽略了。")]),t._v(" "),s("p",[t._v("扩展阅读")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Controlling_DNS_prefetching",target:"_blank",rel:"noopener noreferrer"}},[t._v("“Controlling DNS prefetching” on MDN"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://dev.chromium.org/developers/design-documents/dns-prefetching",target:"_blank",rel:"noopener noreferrer"}},[t._v("“DNS Prefetching” on Chromium docs"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),s("p",[t._v("Helmet的DNS Prefetch Control是一个相对简单的中间件，仅仅设置"),s("code",[t._v("X-DNS-Prefetch-Control")]),t._v("响应头而已。")]),t._v(" "),s("p",[t._v("您可以作为Helmet的一部分使用：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Make sure you run "npm install helmet" to get the Helmet package.')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" helmet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'helmet'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Sets "X-DNS-Prefetch-Control: off".')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将X-DNS-Prefetch-Control 设置为 off")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("helmet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dnsPrefetchControl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("也可以单独使用：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Make sure you run "npm install dns-prefetch-control" to get the dns-prefetch-control package.')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dnsPrefetchControl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dns-prefetch-control'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Sets "X-DNS-Prefetch-Control: off".')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将X-DNS-Prefetch-Control 设置为 off")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dnsPrefetchControl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("它很方便，开箱即用：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将X-DNS-Prefetch-Control 设置为 off")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dnsPrefetchControl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将X-DNS-Prefetch-Control 设置为 off")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dnsPrefetchControl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" allow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将X-DNS-Prefetch-Control 设置为 on")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dnsPrefetchControl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" allow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("该模块是Helmet的默认模块。")])])}),[],!1,null,null,null);n.default=a.exports}}]);