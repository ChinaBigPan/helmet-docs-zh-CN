---
title: Content-Security-Policy
---

# 内容安全策略(Content-Security-Policy)

[原文链接](https://helmetjs.github.io/docs/csp/)

简介：Helmet的CSP模块设置了`Content-Security-Policy`响应头，它可以防止JavaScript、CSS和插件等的恶意注入。

## 攻击方式

如果黑客能够将恶意代码注入到您的网页上，那他们就能为所欲为了。

最坏的情况就是跨站脚本攻击（XSS, Cross-Site Scripting）了，也就是黑客将恶意的JavaScript代码放到嵌入到目标网页中，再进行诸如窃取验证cookie或是记录用户操作等行为。

这还不算完，就算我们禁止JavaScript运行，他们还有其他的攻击渠道。举例来说，如果我可以把一个透明的 1x1 大小的图片放到您的网站上，我就可以知道您的网站有多少流量。如果我能让类似Flash的带有[漏洞的浏览器插件](http://arstechnica.com/security/2015/07/two-new-flash-exploits-surface-from-hacking-team-combine-with-java-0-day/)运行起来，我就可以利用它的缺陷去做很多您想不到的事情！。

CSP模块并不能防止特定类型的攻击。最主要的是：您一定不希望有人在你的页面上放任何没经过您允许的东西。

扩展阅读：

- [Cross-site scripting on Wikipedia](https://en.wikipedia.org/wiki/Cross-site_scripting)
- [Cross-site Scripting on OWASP](https://owasp.org/www-community/attacks/xss/)
- [How does a tracking pixel work?](https://www.quora.com/How-does-a-tracking-pixel-work)

## Header详解

关于这些注入攻击，我们需要面临的一个棘手的问题是浏览器无法区分正常的代码和恶意代码。真实情况是，除非您定义了内容安全策略（Content-Security-Policy），否则浏览器确实是无法区分的。

大多数浏览器都支持一个名为`Content-Security-Policy`的响应头，它实际上是一个允许在页面上显示内容的白名单。您可以将JavaScript、CSS、图片、插件等列入其中，以此来告诉浏览器“这个可以”，而不是“这个不行”。

我们假设你有一个网站，不允许加载任何外部链接——只允许网站内部的资源。您可以向这样设置：

```bash
Content-Security-Policy: default-src 'self'
```

这就告诉浏览器“只加载来自我自己域下的资源”。如果您正在运行`example.com`，然后用户想要加载`https://example.com/my-javascript.js`，这是没问题的。但是，如果用户试图加载`http://evil.com/evil.js`那就不行了！。

接着我们换一种情况，如果希望允许网站运行`BootStrap`CDN的CSS。您应该这么设置CSP：

```bash
Content-Security-Policy: default-src 'self'; style-src 'self' maxcdn.bootstrapcdn.com
```

现在我们已经将`self`和`maxcdn.bootstrapcdn.com`加入白名单。用户能够从那里加载CSS了，但也仅此而已。想要从该URL加载JavaScript或图像还是不可以。

CSP有很多细微的差别：可以和不可以列入白名单的项目、浏览器对各种特性的支持情况，以及替代的响应头等d鞥。更多信息请参考下面的内容：

- [An introduction to Content Security Policy on HTML5 Rocks](http://www.html5rocks.com/en/tutorials/security/content-security-policy/)
- [Content Security Policy Reference](https://content-security-policy.com/)
- [Can I Use Content Security Policy 1.0](http://caniuse.com/#feat=contentsecuritypolicy)
- [Can I Use Content Security Policy 2.0](http://caniuse.com/#feat=contentsecuritypolicy2)

## 代码

您可以像下面这样来设置`Content-Security-Policy`:

```js
// Make sure you run "npm install helmet" to get the Helmet package.
const helmet = require('helmet')

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com']
  }
}))
```

还可以单独引入csp模块来设置：

```js
// Make sure you run "npm install helmet-csp" to get the csp package.
const csp = require('helmet-csp')

app.use(csp({
  directives: {
    defaultSrc: ["'self'"],
    styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com']
  }
}))
```

该设置并未包含在默认的Helmet包当中。

### 指令

所有CSP指令(如`default-src`、`style-src`)都包含在`directive`选项内：

```js
app.use(csp({
  directives: {
    defaultSrc: ["'self'", 'default.com'],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    sandbox: ['allow-forms', 'allow-scripts'],
    reportUri: '/report-violation',
    objectSrc: ["'none'"],
    upgradeInsecureRequests: true,
    workerSrc: false  // This is not set.
  }
}))
```

指令可以采用短横线隔开式写法（如：`script-src`）也可以采用驼峰写法（如：`scriptSrc`）;二者一致。

下面是支持的指令列表：

- `base-uri`或`baseUri`
- `block-all-mixed-content`或`blockAllMixedContent`
- `child-src`或`childSrc`
- `connect-src`或`connectSrc`
- `default-src`或`defaultSrc`
- `font-src`或`fontSrc`
- `form-action`或`formAction`
- `frame-ancestors`或`frameAncestors`
- `frame-src`或`frameSrc`
- `img-src`或`imgSrc`
- `manifest-src`或`manifestSrc`
- `media-src`或`mediaSrc`
- `object-src`或`objectSrc`
- `plugin-types`或`pluginTypes`
- `prefetch-src`或`prefetchSrc`
- `report-to`或`reportTo`
- `report-uri`或`reportUri`
- `require-sri-for`或`requireSriFor`
- `sandbox`
- `script-src`或`scriptSrc`
- `style-src`或`styleSrc`
- `upgrade-insecure-requests`或`upgradeInsecureRequests`
- `worker-src`或`workerSrc`

### CSP违规报告

如果您设置了`reportUri`，那么浏览器将向您的服务器发送违规报告。下面是一个处理这些报告的`Express`路由示例：

```js
// You need a JSON parser first.
// 您需要先解析一下JSON
app.use(bodyParser.json({
  type: ['json', 'application/csp-report']
}))

app.post('/report-violation', (req, res) => {
  if (req.body) {
    console.log('CSP Violation: ', req.body)
  } else {
    console.log('CSP Violation: No data received!')
  }

  res.status(204).end()
})
```

并不是所有的浏览器都以相同的方式发送CSP违规信息，所以可能需要做一些兼容工作。

::: warning 注意
如果您使用了像[csurf](https://github.com/expressjs/csurf)这样的CSRF模块，在尚未拥有有效的CSRF token的情况下，处理违规可能会出现问题。解决方法是将您的CSP报告路由置于csurf中间件之上。
:::

此外，`reportOnly`项会将响应头切换成`Content-Security-Policy-Report-Only`。它表示虽然浏览器会向`reportUri`发送违规报告，但却不会对资源的加载进行阻止。

```js
app.use(csp({
  directives: {
    // ...
  },
  reportOnly: true
})
```

您可以将其设置为一个函数来动态的决定是否使用`reportOnly`模式。这个函数将和请求/响应对象一同调用，并且**必须返回一个布尔值**。

```js
app.use(csp({
  directives: {
    // ...
  },
  reportOnly: (req, res) => req.query.cspmode === 'debug'
})
```

### 浏览器嗅探

默认情况下，该模块会去查看传入的`User-Agent`请求头，然后根据检测到的浏览器来发送不同的响应头。例如，版本25之前的Chrome使用了一个替代响应头`X-WebKit-CSP`，模块会进行处理。如果没有检测到浏览器，那么它会按照2.0的规范来设置所有的响应头。

如果想要禁用浏览器嗅探并假设其为现代浏览器，请将`browserSniff`设置为`false`。

```js
app.use(csp({
  directives: {
    // ...
  },
  browserSniff: false
})
```

若要设置包括历史遗留响应头在内的所有响应头，请将`setAllHeaders`项设置为`true`。请注意，这样会改变根据`User-Agent`而适配的响应头的值。您可以使用上面介绍过的`browserSniff: false`来禁用它。

```js
app.use(csp({
  directives: {
    // ...
  },
  setAllHeaders: true
})
```

旧的Android浏览器可能有点问题。默认值是`false`。

```js
app.use(csp({
  directives: {
    // ...
  },
  disableAndroid: true
})
```

### 生成nonce属性

您可以通过动态生成`nonce`属性来让内联的`<script>`标签安全运行。下面是一个简单示例：

```js
const uuidv4 = require('uuid/v4')

app.use(function (req, res, next) {
  res.locals.nonce = uuidv4()
  next()
})

app.use(csp({
  directives: {
    scriptSrc: [
      "'self'",
      (req, res) => `'nonce-${res.locals.nonce}'`  // 'nonce-614d9122-d5b0-4760-aecf-3a5d17cf0ac9'
    ]
  }
}))

app.use(function (req, res) {
  res.end(`<script nonce="${res.locals.nonce}">alert(1 + 1);</script>`)
})
```

### 在CDN上使用CSP

CSP的默认行为是为请求页面的浏览器生成特定的响应头。如果您的应用前面有一层CDN的话，它可能会缓存错误的响应头从而导致您的CSP无效。请确保在使用此模块时避免使用CDN，或是将`browserSniff`设置为`false`。





