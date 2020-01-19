---
title: dns-prefetch-control
---

# DNS Prefetch Control <Badge text="默认启用"/>

[原文链接](https://helmetjs.github.io/docs/dns-prefetch-control/)

简介：该中间件允许您通过设置`X-DNS-Prefetch-Control`响应头来禁用浏览器的DNS预解析。

## 攻击方式

当您访问一个URL时，您的浏览器会去查找域的IP地址。举个例子，它必须将`example.com`解析为`93.184.216.34`。这个过程就叫做DNS解析。

浏览器可以在用户单击链接或是从某处加载资源之前启动这些DNS请求。这样就提高了用户点击链接时的性能，但也影响了用户的隐私。因为它可以理解为替用户访问了他们并未访问的链接。

扩展阅读

- [“Controlling DNS prefetching” on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Controlling_DNS_prefetching)
- [“DNS Prefetching” on Chromium docs](https://dev.chromium.org/developers/design-documents/dns-prefetching)
- [“Prefetching”](https://www.keycdn.com/support/prefetching/)

## Header详解

`X-DNS-Prefetch-Control`告诉浏览器是否启用DNS预解析。开启它的时候不一定会起作用——不是所有浏览器都支持它——但是关闭的话则会在所有浏览器禁用DNS预解析。

您可以将`X-DNS-Prefetch-Control`设置为`on`/`off`，来启用/禁用DNS预解析。

大多数的浏览器不做DNS预解析，因此该请求头就被忽略了。

扩展阅读

- [“Controlling DNS prefetching” on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Controlling_DNS_prefetching)
- [“DNS Prefetching” on Chromium docs](https://dev.chromium.org/developers/design-documents/dns-prefetching)

## 代码

Helmet的DNS Prefetch Control是一个相对简单的中间件，仅仅设置`X-DNS-Prefetch-Control`响应头而已。

您可以作为Helmet的一部分使用：

```js
// Make sure you run "npm install helmet" to get the Helmet package.
const helmet = require('helmet')

// Sets "X-DNS-Prefetch-Control: off".
// 将X-DNS-Prefetch-Control 设置为 off
app.use(helmet.dnsPrefetchControl())
```

也可以单独使用：

```js
// Make sure you run "npm install dns-prefetch-control" to get the dns-prefetch-control package.
const dnsPrefetchControl = require('dns-prefetch-control')

// Sets "X-DNS-Prefetch-Control: off".
// 将X-DNS-Prefetch-Control 设置为 off
app.use(dnsPrefetchControl())
```

它很方便，开箱即用：

```js
// 将X-DNS-Prefetch-Control 设置为 off
app.use(dnsPrefetchControl())

// 将X-DNS-Prefetch-Control 设置为 off
app.use(dnsPrefetchControl({ allow: false }))

// 将X-DNS-Prefetch-Control 设置为 on
app.use(dnsPrefetchControl({ allow: true }))
```

该模块是Helmet的默认模块。



