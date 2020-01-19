---
title: 隐藏X-Powered-By
---

# 隐藏X-Powered-By <Badge text='默认启用' />

[原文链接](https://helmetjs.github.io/docs/hide-powered-by/)

简介：本中间件移除了`X-Powered-By`响应头，让攻击者更难以看到您的站点可能支持哪些潜在的易受攻击技术点。

## “恶意攻击”

如果黑客知道你在使用`Express`和`Node`，那么它们就可能会利用已知的漏洞。`Express`(以及一些其他web框架，如PHP)会为每个请求设置`X-Powered-By`响应头以表示服务器的技术栈。

如果他们知道`Express`或`Node`的漏洞，并且看到您的网站用的是`Express`，那可真是太方便了。

## 修复方法

很简单，移除这个响应头即可。

诚然，黑客不会因为有没有这个响应头来放弃入侵行为。他们仍旧回去寻找其他方法来判断您的服务器使用了哪种语言，比方说尝试多种攻击方式来看看是否有任何一个有效。移除它并不意味着没有人可以利用漏洞；仅仅是稍微减缓一下它们的速度或是阻止一个稍微懒一点的黑客罢了。

哦对了，因为发送的字节更少了，所以性能也算提升了-_-||

扩展阅读：

- [“Removing the header provides no security benefits”](https://github.com/expressjs/express/pull/2813#issuecomment-159270428)

## 代码

该中间件用处很大，因此在默认情况下就是启用的：

```js
const helmet = require('helmet')

app.use(helmet())
```

如果是逐个设置Helmet的响应头，这里有一个更好的方式将该功能设置到`Express`:

```js
app.disable('x-powered-by')
```

如果想以内部模块形式应用，也是可以的：

```js
app.use(helmet.hidePoweredBy())
```

若想以单独模块形式，则这样使用：

```js
const hidePoweredBy = require('hide-powered-by')

app.use(hidePoweredBy())
```

**您还设置一些假的响应头来迷惑黑客，比方说下面这样让它们以为您的网站是由PHP开发的**

```js
app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }))
```











