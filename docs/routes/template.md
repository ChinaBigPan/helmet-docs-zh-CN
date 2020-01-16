---
sidebar: "auto"
sidebarDepth: 2

title: 自定义的title
lang: zh-CN

testInnerVar: 我是内部Var
---

# 测试模板 <Badge text="模板主题"/>

<img :src="$withBase('/images/testImg_1.jpg')" class='zoom-custom-imgs' alt="foo">

:tada: :100:

[全部的emoji](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::


<p v-html="$page.title"></p>

<p>{{ $frontmatter.testInnerVar }}</p>