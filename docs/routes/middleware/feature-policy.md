---
title: FeaturePolicy
---

# Feature-Policy

[原文链接](https://helmetjs.github.io/docs/feature-policy/)

简介：Helmet的`featurePolicy`中间件让您能够限制浏览器可以使用的特性。比方说，您可以禁用全屏(fullscreen)或震动(vibration)API。

## “攻击方式”

Web浏览器的特性五花八门，从罗盘到震动再到麦克风接入应有尽有。虽然其中一些可能很有用，但您可能不想使用也不希望任何第三方脚本来使用这些功能。

## 响应头

`Feature-Policy`响应头告诉浏览器可以使用的功能。举个例子，如果您想要禁用通知(notications)功能并允许`example.com`网站的支付(payments)功能的话，您可以这样设置：

```bash
Feature-Policy: notifications 'none'; payments example.com
```

延伸阅读：

- [“A new security header: Feature-Policy”](https://scotthelme.co.uk/a-new-security-header-feature-policy/)
- [Feature Policy](https://developers.google.com/web/updates/2018/06/feature-policy)

## 代码

您可以作为Helmet内部方法来使用：

```js
// Make sure you run "npm install helmet" to get the Helmet package.
const helmet = require('helmet')

app.use(helmet.featurePolicy({
  features: {
    fullscreen: ["'self'"],
    vibrate: ["'none'"],
    payment: ['example.com'],
    syncXhr: ["'none'"]
  }
}))
```

也可以单独使用：

```js
// Make sure you run "npm install feature-policy" to get this package.
const featurePolicy = require('feature-policy')

app.use(featurePolicy({
  features: {
    vibrate: ["'self'"],
    syncXhr: ["'none'"]
  }
}))
```

下面是支持的功能列表：

- accelerometer
- ambientLightSensor
- autoplay
- camera
- documentDomain
- documentWrite
- encryptedMedia
- fontDisplayLateSwap
- fullscreen
- geolocation
- gyroscope
- layoutAnimations
- legacyImageFormats
- loadingFrameDefaultEager
- magnetometer
- microphone
- midi
- oversizedImages
- payment
- pictureInPicture
- serial
- speaker
- syncScript
- syncXhr
- unoptimizedImages
- unoptimizedLosslessImages
- unoptimizedLossyImages
- unsizedMedia
- usb
- verticalScroll
- vibrate
- vr
- wakeLock
- xr


