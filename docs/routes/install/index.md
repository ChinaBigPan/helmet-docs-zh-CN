---
title: 安装
---

## 快速开始

如果您用的是**Express**运行`npm install helmet --save`，接下来，在您的文件中：

```js
const express = require('express')
const helmet = require('helmet'); 

const app = express()

app.use(helmet())

// ...
```

如果您用的是**Koa**那么运行`npm install koa-helmet --save`，接下来，在您的文件中：

[koa-helmet](https://github.com/venables/koa-helmet);
```js
"use strict";

const Koa = require("koa");
const helmet = require("koa-helmet");
const app = new Koa();

app.use(helmet());

app.use((ctx) => {
  ctx.body = "Hello World"
});

app.listen(4000);
```

很简单，Helmet会设置一些响应头来保护您的App。

## 文档

最好将`app.use(helmet())`放在众多中间件的前面以保证响应头能够正确设置。

当然，您还可以像下面这样分别设置：

```js
app.use(helmet.noCache())
app.use(helmet.frameguard())
```

您也可以通过传入对象的方式禁用一些默认开启的项目，比方说下面就是禁用了`frameguard`：

```js
app.use(helmet({
  frameguard: false
}))
```

为中间件设置配置项也是可以的，有一些配置项不论是否是默认值都可以用下面的方式设置：

```ts
app.use(helmet({
  frameguard: {
    action: 'deny'
  }
}))
```

::: tip Express
如果您使用的是 Express 3, 请将中间件放在`app.router`之前。
:::

::: tip Koa
为了让helmet的HSTS模块能正常工作，koa-helmet向`this.request`中增加了`secure`配置项（布尔值）以判断是否为HTTP请求。
:::

## 工作原理

Helmet是14个设置HTTP响应头的小型中间件的集合。在默认情况下，`app.use(helmet())`并不会应用其中的所有中间件。

它所涵盖的中间件如下：

| 模块(Module) | 默认启用 |
|-----------|---------|
| [contentSecurityPolicy](/routes/middleware/content-security-policy.html)用于设置内容安全策略 ||  
| [crossdomain](/routes/middleware/crossdomain.html)用于处理Adobe产品的跨域请求 ||
| [dnsPrefetchControl](/routes/middleware/dns-prefetch-control.html)用于控制浏览器的DNS预解析 |✅|
| [expectCt](/routes/middleware/expect-ct.html)用于处理证书的透明度 ||
| [featurePolicy](/routes/middleware/feature-policy.html)用于限制浏览器可用的功能 ||
| [frameguard](/routes/middleware/frameguard.html)用于阻止点击劫持 |✅|
| [hidePoweredBy](/routes/middleware/hide-powered-by.html)移除`X-Powered-By`响应头 |✅|
| [hsts](/routes/middleware/hsts.html)用于设置`HTTP Strict Transport Security` |✅|
| [ieNoOpen](/routes/middleware/ie-no-open.html)为IE8以上浏览器设置`X-Download-Options` |✅|
| [noCache](/routes/middleware/no-cache.html) ||