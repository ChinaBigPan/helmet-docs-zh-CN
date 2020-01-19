---
title: 中间件总览
---

# 总览

| 模块(链接指向原地址) | 默认启用 |
|-----------|---------|
| [contentSecurityPolicy](https://helmetjs.github.io/docs/csp/)用于设置内容安全策略 ||
| [crossdomain](https://helmetjs.github.io/docs/crossdomain/)用于处理Adobe产品的跨域请求 ||
| [dnsPrefetchControl](https://helmetjs.github.io/docs/dns-prefetch-control)用于控制浏览器的DNS预解析 |✅|
| [expectCt](https://helmetjs.github.io/docs/expect-ct/)用于处理证书的透明度 ||
| [featurePolicy](https://helmetjs.github.io/docs/feature-policy/)用于限制浏览器可用的功能 ||
| [frameguard](https://helmetjs.github.io/docs/frameguard/)用于阻止点击劫持 |✅|
| [hidePoweredBy](https://helmetjs.github.io/docs/hide-powered-by/) |✅|
| <Badge text='已废弃' vertical='middle' type='error' /> [hpkp](https://helmetjs.github.io/docs/hpkp/)  文档就不做翻译了  |  |
| [hsts](https://helmetjs.github.io/docs/hsts/)用于设置`HTTP Strict Transport Security` |✅|
| [ieNoOpen](https://helmetjs.github.io/docs/ienoopen/)为IE8以上浏览器设置`X-Download-Options` |✅|
| [noCache](https://helmetjs.github.io/docs/nocache/)用于禁用客户端缓存 ||
| [noSniff](https://helmetjs.github.io/docs/dont-sniff-mimetype/)用于禁用浏览器嗅探 |✅|
| [referrerPolicy](https://helmetjs.github.io/docs/referrer-policy)用于隐藏`Referrer`报头 | |