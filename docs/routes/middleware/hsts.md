---
title: HSTS
---

# HTTP Strict Transport Security <Badge text='默认启用' />

[原文链接](https://helmetjs.github.io/docs/hsts/)

简介：通过设置`Strict-Transport-Security`响应头来强制使用HTTPS。

## 攻击方式

虽然有一些瑕疵，但HTTPS是一种安全的协议。而HTTP就非常糟糕了。“纯”HTTP协议很容易受到中间人攻击，因为所有的发送内容都没有经过加密。我认为HTTP就是一种“裸奔”。

如果您的网站是HTTP而不是HTTPS，那黑客做梦都会笑醒了。

扩展阅读

- ["HTTPS" on Wikipedia](https://en.wikipedia.org/wiki/HTTPS)
- [“Web Security: Why You Should Always Use HTTPS” on Mashable](http://mashable.com/2011/05/31/https-web-security/)

## Header详解

`Strict-Transport-Security`响应头告诉浏览器坚持HTTPS，绝不访问不安全的HTTP。下面的例子表示浏览器检测到该响应头后，在接下来的60天里只通过HTTPS访问网站：

```bash
Strict-Transport-Security: max-age=5184000
```

需要注意的是，响应报头不会告诉用户将HTTP切换到HTTPS，而是告诉使用HTTPS的用户继续保持。若使用`Express`，您可以使用[express-enforces-ssl](https://github.com/aredo/express-enforces-ssl)模块强制使用HTTPS。`Koa`可以使用[koa-sslify](https://github.com/turboMaCk/koa-sslify)。

扩展阅读：

- [规范](https://tools.ietf.org/html/rfc6797)
- [“HTTP Strict Transport Security” on MDN](https://developer.mozilla.org/en-US/docs/Web/Security/HTTP_strict_transport_security)
- [“HTTP Strict Transport Security Cheat Sheet” on OWASP](https://www.owasp.org/index.php/HTTP_Strict_Transport_Security_Cheat_Sheet)
- [“HTTP Strict Transport Security” on Wikpedia](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)

## 代码

Helmet的HSTS中间件并不复杂，它帮助您设置`Strict-Transport-Security`响应报头。

您可以作为Helmet的内部方法使用：

```js
// Make sure you run "npm install helmet" to get the Helmet package.
const helmet = require('helmet')

// Sets "Strict-Transport-Security: max-age=5184000; includeSubDomains".
const sixtyDaysInSeconds = 5184000
app.use(helmet.hsts({
  maxAge: sixtyDaysInSeconds
}))
```

也可以单独使用：

```js
// Make sure you run "npm install hsts" to get the hsts package.
const hsts = require('hsts')

// Sets "Strict-Transport-Security: max-age=5184000; includeSubDomains".
const sixtyDaysInSeconds = 5184000
app.use(hsts({
  maxAge: sixtyDaysInSeconds
}))
```

### 涵盖子域名

默认情况下，`includeSubDomains`值为`ture`。若不想设置它，请将`includeSubDomains`设置为`false`。

```js
// Sets "Strict-Transport-Security: max-age=5184000".
app.use(helmet.hsts({
  maxAge: sixtyDaysInSeconds,
  includeSubDomains: false
}))
```

### 按条件设置

该响应头是默认启用的，因为[在不安全的HTTP协议中它会被忽略](https://tools.ietf.org/html/rfc6797#section-8.1)。您也可以按条件设置：

```js
const hstsMiddleware = helmet.hsts({ /* ... */ })

app.use((req, res, next) {
  if (req.secure) {
    hstsMiddleware(req, res, next)
  } else {
    next()
  }
})
```

### 在Chrome中预加载HSTS

有些浏览器允许您提交站点的HSTS以整合到浏览器中。您可以使用以下代码将`preload`添加到报头中。您可以在[hstspreload.org](https://hstspreload.org/)上提交您的站点并检查您的资格。

```js
app.use(helmet.hsts({
  // Must be at least 1 year to be approved
  // 必须设置为至少1年才能通过审核
  maxAge: 31536000,

  // Must be enabled to be approved
  // 必须启用这一项才能通过审核
  includeSubDomains: true,
  preload: true
}))
```



