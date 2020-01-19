---
title: X-Download-Options
---

# X-Download-Options <Badge text='默认启用' />

[原文链接](https://helmetjs.github.io/docs/ienoopen/)

简介：该中间件设置`X-Download-Options`报头以阻止IE浏览器下载您网站中的内容。

## 攻击方式

这种攻击只会影响老版本的IE浏览器。

有一些web应用让用户下载不受信任的HTML。比方说，您可以设置成允许用户上传和下载HTML文件。

默认情况下，老版本的IE浏览器允许您在网站环境下打开这些HTML文件，这就意味着一个不受信任的HTML页面可能据此搞事情。更多信息请参阅[这篇MSDN博客文章](https://blogs.msdn.microsoft.com/ie/2008/07/02/ie8-security-part-v-comprehensive-protection/)


## 响应头详解

`X-Download-Options`报头可以设置成`noopen`。这将防止旧版本的IE浏览器允许在您网站环境中执行恶意HTML下载。

扩展阅读

- [“IE8 Security Part V: Comprehensive Protection” on MSDN](https://blogs.msdn.microsoft.com/ie/2008/07/02/ie8-security-part-v-comprehensive-protection/)

## 代码

Helmet的`isNoOpen`中间件并不复杂，它仅仅将您的`X-Download-Options`报头可以设置成`noopen`。

您可以作为Helmet的内部方法使用：

```js
// Make sure you run "npm install helmet" to get the Helmet package.
const helmet = require('helmet')

// Sets "X-Download-Options: noopen".
app.use(helmet.ieNoOpen())
```

还可以作为单独的模块使用：

```js
// Make sure you run "npm install ienoopen" to get the ienoopen package.
const ieNoOpen = require('ienoopen')

// Sets "X-Download-Options: noopen".
app.use(ieNoOpen())
```

