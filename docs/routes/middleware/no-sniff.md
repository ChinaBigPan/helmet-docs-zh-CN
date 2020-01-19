---
title: no-sniff
---

# 停止嗅探MIME Type <Badge text='默认启用' />

[原文链接](https://helmetjs.github.io/docs/dont-sniff-mimetype/)

简介：`noSniff`中间件阻止浏览器猜测（嗅探）MIME Type，以排除安全隐患。它的工作原理是将`X-Content-Type-Options`报头设置为`nosniff`。

## 攻击方式

MIME Type 用于确定您正在查看的文件类型的方法。PNG图像是`image/png`; JSON文件是`application/json`;JavaScript文件是`text/javascript`。当浏览器加载文件时。它通过读取服务端的`Content-Type`报头来决定文件的类型。

当你的浏览器看到下面这段代码时：

```html
<script src="https://example.com/my-javascript"></script>
```

它会从`example.com`加载`my-javascript`。如果`example.com`带有了值为`text/javascript`的`Content-Type`报头，那么你的浏览器会按照JavaScript来执行`my-javascript`的内容。

那么如果设置`Content-Type: text/heml`会怎么样？如果您的浏览器执行了所谓的“MIME Type 嗅探”策略(有些人是这么做的)，它将查看文件的内容，判断它是否是JavaScript，如果是，则执行它。这意味着服务器可以发送错误的`Content-Type`，但JavaScript仍然可以执行。

那么MIME Type嗅探就成了一个攻击维度。用户可以上传扩展名为.jpg的图片，但其实际内容是HTML。查看该图像可能导致浏览器“运行”HTML页面，这可能会包含恶意的JavaScirpt代码。最糟糕的要数[Rosetta Flash](https://miki.it/blog/2014/7/8/abusing-jsonp-with-rosetta-flash/)攻击了，它是让您的页面加载恶意Flash插件而不是数据。

扩展阅读：

- [“MIME type” on Wikipedia](https://en.wikipedia.org/wiki/Media_type)
- [“MIME Sniffing: feature or vulnerability?”](https://blog.fox-it.com/2012/05/08/mime-sniffing-feature-or-vulnerability/)
- [“MIME sniffing in Internet Explorer enables cross-site scripting attacks”](http://www.h-online.com/security/features/Risky-MIME-sniffing-in-Internet-Explorer-746229.html)
- [“Abusing JSONP with Rosetta Flash”](https://blog.miki.it/2014/7/8/abusing-jsonp-with-rosetta-flash/)
- [MIME Sniffing live standard](https://mimesniff.spec.whatwg.org/)
- [Cross Origin Resource Blocking in Chrome](https://developers.google.com/web/updates/2018/07/site-isolation)

## 报头详解

`X-Content-Type-Options`报头告诉浏览器是否嗅探MIME Types。当其被设置为`nosniff`时，浏览器将不会进行嗅探——它们会相信服务器所说并在资源出错时进行阻止。

扩展阅读:

- [“X-Content-Type-Options” on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options)
- [“What is ‘X-Content-Type-Options=nosniff’?” on Stack Overflow](https://stackoverflow.com/questions/18337630/)
- [“Reducing MIME type security risks” on MSDN](https://msdn.microsoft.com/en-us/library/gg622941\(v=vs.85\).aspx)
- [“IE8 Security Part V: Comprehensive Protection” on MSDN](https://blogs.msdn.microsoft.com/ie/2008/07/02/ie8-security-part-v-comprehensive-protection/)

## 代码

`noSniff`中间件将把每个请求的`X-Content-Type-Options`报头的值设置为`nosniff`。

您可以作为Helmet的内部模块来使用：

```js
// Make sure you run "npm install helmet" to get the Helmet package.
const helmet = require('helmet')

// Sets "X-Content-Type-Options: nosniff".
app.use(helmet.noSniff())
```

也可单独使用：

```js
// Make sure you run "npm install dont-sniff-mimetype" to get this package.
const noSniff = require('dont-sniff-mimetype')

// Sets "X-Content-Type-Options: nosniff".
app.use(noSniff())
```


