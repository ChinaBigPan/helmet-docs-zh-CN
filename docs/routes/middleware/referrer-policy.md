---
title: Referrer Policy
---

# Referrer Policy

[原文链接](https://helmetjs.github.io/docs/referrer-policy)

简介：Referrer Policy模块可以通过设置`Referrer-Policy`报头的方式控制`Referrer`报头的行为。

## 攻击方式

[Referer](https://en.wikipedia.org/wiki/HTTP_referer)报头通常由浏览器设置，用以告诉服务器它的出处。举个例子，如果您在`example.com/index.html`上点击一个带你去`wikipedia.org`的链接，那么维基百科的服务器就会看到`Referer: example.com`。

这可能涉及到隐私问题——网站可以看到用户来自哪里。

扩展阅读：

- [Referrer Header 规范](https://tools.ietf.org/html/rfc7231#section-5.5.2)
- [维基百科解释](https://en.wikipedia.org/wiki/HTTP_referer)

## 报头详解

`Referrer-Policy`报头可以让开发者控制浏览器如何设置`Referrer`报头。

举个例子，当支持`Referrer-Policy`的浏览器看到下面这个报头的时候，它们将不设置`Referrer`:

```bash
Referrer-Policy: no-referrer
```

还有其他指令。比如`same-origin`。它的作用是告诉浏览器只发送同源页面的`Referrer`报头。

[W3C规范中的Referrer-Policy](https://www.w3.org/TR/referrer-policy/#referrer-policies)列出了所有指令。

|指令|作用|
|---|---|
| no-referrer | 整个 `Referer` 报头会被移除。访问来源信息不随着请求一起发送。 |
| no-referrer-when-downgrade <Badge vertical='middle' text='默认值' /> | 在没有指定任何策略的情况下用户代理的默认行为。在同等安全级别的情况下，引用页面的地址会被发送(HTTPS->HTTPS)，但是在降级的情况下不会被发送 (HTTPS->HTTP)。|
| origin |在任何情况下，仅发送文件的源作为引用地址。例如  https://example.com/page.html 会将 https://example.com/ 作为引用地址。|
| origin-when-cross-origin | 对于同源的请求，会发送完整的URL作为引用地址，但是对于非同源请求仅发送文件的源。|
| same-origin | 对于同源的请求会发送引用地址，但是对于非同源请求则不发送引用地址信息。 |
| strict-origin | 在同等安全级别的情况下，发送文件的源作为引用地址(HTTPS->HTTPS)，但是在降级的情况下不会发送 (HTTPS->HTTP)。|
| strict-origin-when-cross-origin | 于同源的请求，会发送完整的URL作为引用地址；在同等安全级别的情况下，发送文件的源作为引用地址(HTTPS->HTTPS)；在降级的情况下不发送此报头 (HTTPS->HTTP)。|
| unsafe-url | 无论是同源请求还是非同源请求，都发送完整的 URL（移除参数信息之后）作为引用地址。|

::: warning unsafe-url
这项设置会将受 TLS 安全协议保护的资源的源和路径信息泄露给非安全的源服务器。进行此项设置的时候要慎重考虑。
:::

扩展阅读：

- [Referrer-Policy specification](https://www.w3.org/TR/referrer-policy/#referrer-policy-header)
- [Can I Use Referrer Policy](http://caniuse.com/#feat=referrer-policy)

## 代码

Helmet的Referrer Policy模块用以设置`Referrer-Policy`报头。

可以作为Helmet的内部方法使用：

```js
// Make sure you run "npm install helmet" to get the Helmet package.
const helmet = require('helmet')

// Sets "Referrer-Policy: same-origin".
app.use(helmet.referrerPolicy({ policy: 'same-origin' }))
```

也可以单独使用：

```js
// Make sure you run "npm install referrer-policy" to get the referrer-policy package.
const referrerPolicy = require('referrer-policy')

// Sets "Referrer-Policy: no-referrer".
app.use(referrerPolicy({ policy: 'no-referrer' }))
```

引入后，您可以这样使用：

```js
// Sets "Referrer-Policy: same-origin".
app.use(helmet.referrerPolicy({ policy: 'same-origin' }))

// Sets "Referrer-Policy: unsafe-url".
app.use(helmet.referrerPolicy({ policy: 'unsafe-url' }))

// Sets "Referrer-Policy: no-referrer,unsafe-url"
app.use(helmet.referrerPolicy({
  policy: ['no-referrer', 'unsafe-url']
}))

// Sets "Referrer-Policy: no-referrer".
app.use(helmet.referrerPolicy())
```






