---
nav:
  title: 快速上手
  order: 1
toc: content
---

# 快速上手

# moderate webComponent

一个简单到半小时就能入门的**web component**组件库。

使用的 web 组件打包器：[stenciljs](https://stenciljs.com/docs/introduction)

## 安装

在项目中安装

```
yarn add moderate-webcomp-starter
```

## 引入即可使用，无需手动 define

```
import "moderate-webcomp-starter"
```

## 使用

### 组件 moderate-info

```
<moderate-info first="首部字符" middle="中部字符" last="尾部字符"></moderate-info>
```

### 组件 moderate-slot

```
<moderate-slot>
    <div slot="start">开始节点</div>
    <div slot="end">结束节点</div>
</moderate-slot>
```
