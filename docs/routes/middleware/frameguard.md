---
title: Frameguard
---

# Frameguard <Badge text='默认启用' />

[原文链接](https://helmetjs.github.io/docs/frameguard/)

简介：Frameguard中间件通过设置`X-Frame-Options`响应头来减少点击劫持攻击。

## 攻击方式

[点击劫持](https://en.wikipedia.org/wiki/Clickjacking)是一种很骚的操作。

攻击者希望你点击那些您实际并不想点击的东西。它们会将链接/按钮隐藏到一个可以点击的链接/按钮后面，再想方设法诱导你去点击。

假设我有一个名叫Facepamphlet的社交网站。我想让你点击下面这个<button>I Love this</button>按钮。

![image](/helmet-docs-zh-CN/images/frameguard-target-page-01.png)

很显然，我作为一个受过教育的人，你让我点哪个我就点哪个那不是很没有面子？

那我换一种方式，我给你发一个页面里面有一个按钮，“有帅哥/美女在线视频，要来看看么？”

差不多像这样的页面：

![image](/helmet-docs-zh-CN/images/frameguard-malicious-hidden-02.png)

于是你点击了这个链接，但是你不知道的是，同时被点击的还有一个被隐藏起来的`iframe`。

![image](/helmet-docs-zh-CN/images/frameguard-malicious-shown-03.png)

这就是点击劫持。

点击劫持除了用来诱导你点击并不想点的东西外，还包括社交网络上无意地背书、点赞、点击广告等等，如果它再聪明一些，会诱骗你去做更复杂的事情。

扩展阅读

- [Clickjacking article on Wikipedia](https://en.wikipedia.org/wiki/Clickjacking)
- [Clickjacking Defense Cheat Sheet](https://www.owasp.org/index.php/Clickjacking_Defense_Cheat_Sheet)
- [iframe元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe)

## Header详解

`X-Frame-Options`响应头用来告诉浏览器阻止将您的网页放入`iframe`中。当浏览器加载`iframe`时，会首先检查`X-Frame-Options`响应头的值，如果不被允许则中止加载。

它有三个值：

1. `X-Frame-Options: DENY`表示该页面不允许在 `iframe` 中展示，即便是在相同域名的页面中嵌套也不允许。
2. `X-Frame-Options: SAMEORIGIN`表示该页面可以在相同域名页面的 `iframe` 中展示。您可以将自己的页面放到 `iframe` 中，其他人不行。
3. `X-Frame-Options: ALLOW-FROM http://example.com`表示允许`http://example.com`将您的页面放在`iframe`中，但不允许其他任何人这样做。(不幸的是，浏览器支持很差，只能允许一个。)

在上面的示例中，Face可以通过设置`X-Frame-Options: DENY`来阻止页面被`iframe`引用从而防止点击劫持。许多网站都这样做。

如果您不希望您的页面被放到`iframe`中，将其设置为`DENY`或`SAMEORIGIN`也不错，因为它限制了页面的被攻击面。

这个响应头在浏览器的支持情况不错：IE8+， Opera 10.50+， Safari 4+， Chrome 4.1+，和Firefox 3.6.9+。不过`ALLOW-FROM`在[许多浏览器](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/X-Frame-Options#Browser_compatibility)中并不支持。这时候浏览器会将整个响应头忽略从而[使设置失效](https://www.owasp.org/index.php/Clickjacking_Defense_Cheat_Sheet#Limitations_2)，因此我们最好还是不要使用这个值。

扩展连接：

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/X-Frame-Options)
- [Can I Use X-Frame-Options](http://caniuse.com/#feat=x-frame-options)
- ['Google YOLO'](https://blog.innerht.ml/google-yolo/)


## 代码

Frameguard是一个相对简单的中间件，可以将`X-Frame-Options`设置为您指定的值。

您可以作为Helmet的内部方法使用：

```js
// Make sure you run "npm install helmet" to get the Helmet package.
const helmet = require('helmet')

app.use(helmet.frameguard({ action: 'sameorigin' }))
```

也可以单独使用：

```js
// Make sure you run "npm install frameguard" to get the Frameguard package.
const frameguard = require('frameguard')

app.use(frameguard({ action: 'deny' }))
```

常规用法如下：

```js
// Don't allow me to be in ANY frames.
// Sets "X-Frame-Options: DENY".
app.use(frameguard({ action: 'deny' }))

// Only let me be framed by people of the same origin.
// Sets "X-Frame-Options: SAMEORIGIN".
app.use(frameguard({ action: 'sameorigin' }))
app.use(frameguard())  // defaults to sameorigin

// Allow from a specific host.
// Sets "X-Frame-Options: ALLOW-FROM http://example.com".
// 请注意浏览器对allow-from的支持性并不高
app.use(frameguard({
  action: 'allow-from',
  domain: 'http://example.com'
}))
```

Helmet自带本中间件，默认值为`SAMEORIGIN`。