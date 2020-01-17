---
title: Expect-CT
---

# Expect-CT

[原文链接](https://helmetjs.github.io/docs/expect-ct/)

简介：`Expect-CT`响应头告诉浏览器证书的透明度（Certificate Transparency）。更多信息请参阅[这篇博客](https://scotthelme.co.uk/a-new-security-header-expect-ct/)和[这篇规范](https://datatracker.ietf.org/doc/draft-stark-expect-ct)。

::: tip
`Expect-CT` 头允许站点选择性报告和/或执行证书透明度 (Certificate Transparency) 要求，来防止错误签发的网站证书的使用不被察觉。当站点启用 `Expect-CT` 头，就是在请求浏览器检查该网站的任何证书是否出现在公共证书透明度日志之中。

—— from [MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Expect-CT)
:::

使用方法：

```js
const expectCt = require('expect-ct')

// Sets Expect-CT: max-age=123
app.use(expectCt({ maxAge: 123 }))

// Sets Expect-CT: enforce; max-age=123
app.use(expectCt({
  enforce: true,
  maxAge: 123
}))

// Sets Expect-CT: enforce; max-age=30; report-uri="http://example.com/report"
app.use(expectCt({
  enforce: true,
  maxAge: 30,
  reportUri: 'http://example.com/report'
}))
```

