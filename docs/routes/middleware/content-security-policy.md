---
title: Content-Security-Policy
---

# 内容安全策略(Content-Security-Policy)

简而言之：CSP模块设置了`Content-Security-Policy`响应头，它可以防止JavaScript、CSS和插件等的恶意注入。

## 恶意攻击

如果黑客能够将恶意代码注入到您的网页上，那他们就能为所欲为了。

最坏的情况就是跨站脚本攻击（XSS, Cross-Site Scripting）了，也就是黑客将恶意的JavaScript代码放到嵌入到目标网页中，再进行诸如窃取验证cookie或是记录用户操作等行为。

这还不算完，就算我们禁止JavaScript运行，他们还有其他的攻击渠道。举例来说，如果我可以把一个透明的 1x1 大小的图片放到您的网站上，我就可以知道您的网站有多少流量。如果我能让类似Flash的带有[漏洞的浏览器插件](http://arstechnica.com/security/2015/07/two-new-flash-exploits-surface-from-hacking-team-combine-with-java-0-day/)运行起来，我就可以利用它的缺陷去做很多您想不到的事情！。

CSP模块并不能防止特定类型的攻击。最主要的是：您一定不希望有人在你的页面上放任何没经过您允许的东西。

扩展阅读：

- [Cross-site scripting on Wikipedia](https://en.wikipedia.org/wiki/Cross-site_scripting)
- [Cross-site Scripting on OWASP](https://owasp.org/www-community/attacks/xss/)
- [How does a tracking pixel work?](https://www.quora.com/How-does-a-tracking-pixel-work)

## Header

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




