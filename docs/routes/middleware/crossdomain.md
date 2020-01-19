---
title: crossdomain
---

# X-Permitted-Cross-Domain-Policies

[原文链接](https://helmetjs.github.io/docs/crossdomain/)

简介：Helmet的`crossdomain`中间件阻止了Adobe Flaseh和Adobe Acrobat加载您网站上的内容。

## “攻击方式”

减少暴露的代码可以减少被攻击的可能。

Adobe Flash和Adobe Acrobat可以从您的域或是其他站点（换句话说，跨域）加载内容。在少数情况下，这可能会导致意外的数据泄露或额外的流量使用。

## Header详解

`X-Permitted-Cross-Domain-Policies`告诉Flash和Acrobat可以使用那些跨域策略。如果不希望它们从您的域中加载数据，请将它的值设置为`none`。请看示例：

```bash
X-Permitted-Cross-Domain-Policies: none
```

如果Flash尝试从你的网站加载一些数据并查看，它会知道不应该从你的域加载数据。

该响应头还有其他值，需要您创建一个定义跨域策略的`crossdomain.xml`文件。您可以阅读下方的链接。

扩展阅读

- [“X-Permitted-Cross-Domain-Policies” section on OWASP](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#xpcdp)
- [Adobe’s spec for cross-domain policies](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/xdomain.html)

## 代码

您可以将其以Helmet一部分的形式使用：

```js
// Make sure you run "npm install helmet" to get the Helmet package.
const helmet = require('helmet')

app.use(helmet.permittedCrossDomainPolicies())
```

也可以单独使用：

```js
// Make sure you run "npm install helmet-crossdomain" to get this package.
const permittedCrossDomainPolicies = require('helmet-crossdomain')

app.use(permittedCrossDomainPolicies())
```

该响应头的值默认为`none`。也可以设置为其他值：

```js
app.use(permittedCrossDomainPolicies({ permittedPolicies: 'master-only' }))
app.use(permittedCrossDomainPolicies({ permittedPolicies: 'by-content-type' }))
app.use(permittedCrossDomainPolicies({ permittedPolicies: 'all' }))
```




