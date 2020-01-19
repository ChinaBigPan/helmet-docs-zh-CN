---
title: noCache
---

# noCache

[原文链接](https://helmetjs.github.io/docs/nocache/)

简介：`nocache`中间件通过设置多个报头的方法禁用浏览器缓存。

## “攻击方式”

这个模块并不能防止特定的攻击。它的作用是防止用户获得缓存的文件版本（比如旧的JavaScript）。

举例来说，假设有一天您突然发现页面的JavaScript代码中存在漏洞，所以您希望升级您的网站。不过在某些情况下，用户可能还是会收到经过缓存的旧代码，漏洞就是这么产生的。

缓存的好处多多，但是它会导致用户获得旧版本的代码。

## 报头详解

该模块处理了4中缓存相关报头：

1. `Cache-Control`报头可以配置多种指令。举个例子，`Cache-Control：max-age=864000`将告诉浏览器将响应缓存10天。在这10天里，浏览器会从缓存中拉取数据。将它设置为`Cache-Control: no-store, no-cache, must-revalidate, proxy-revalidate`可消除缓存。
2. `Surrogate-Control`是和CDN相关的报头。您可以通过他来告诉中间层停止缓存。注：[ESI注入](http://www.52bug.cn/hkjs/4738.html)
3. `Pragma`是较旧的HTTP报头。设置`Pragma: no-cache`会告诉支持该报头的浏览器停止缓存响应。它支持的功能不如`Cache-Control`但对旧浏览器的支持性更好。
4. `Expires`用于指定内容过期的时间。将其设置为`0`就是告诉浏览器内容立即过期。也就是不应该进行缓存。

还有个没有包含在内的[E-tag](https://en.wikipedia.org/wiki/HTTP_ETag)报头，它是一个非常安全的缓存机制。

扩展阅读：

- [Cache-Control RFC](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9)
- [Pragma RFC](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.32)
- [“Cache control tutorial” on Fastly’s documentation](https://docs.fastly.com/guides/tutorials/cache-control-tutorial)
- [“HTTP Caching” on Google Developers](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching)

## 代码

`noCache`中间件将设置上面提到过的4个HTTP报头：`Cache-Control`、`Surrogate-Control`、`Pragma`和`Expires`。

您可以作为内部方法来使用：

```js
// Make sure you run "npm install helmet" to get the Helmet package.
const helmet = require('helmet')

app.use(helmet.noCache())
```

也可单独使用：

```js
// Make sure you run "npm install nocache" to get the nocache package.
const noCache = require('nocache')

app.use(noCache())
```

它*并未*包含在默认的Helmet包当中。


