# 个人博客

使用VuePress搭建的个人博客demo。

## 文件结构简介

### src文件夹

**源代码**被放置在`src`目录下，在该目录下，所有的**markdown**文件都会被渲染成**HTML**，其中`readme.md`会被渲染成`index.html`。  另外Vuepress的配置文件全部放置在`src/.vuepress`目录下。

### dist文件夹

构建后的代码会被**输出**到`dist`目录，只需将其上传到需要部署的服务器上即可。

如使用了自动化构建工具，开启自动部署后**无需**在本地执行构建。

### package.json

Node.js对整个项目的声明文件，它是Node项目必包含的文件。包含了**项目名称**、**详情**、**许可证**以及使用的**package**等信息。

### readme.md

项目在Github的说明文件。

### 其他

初期无需掌握用途的文件：
| 文件              | 内容                      |
| ----------------- | ------------------------- |
| .eslintignore     | ESLint忽视的文件          |
| .eslintrc.js      | ESLint规则配置文件        |
| .nvmrc            | node版本声明文件          |
| LICENSE           | 项目许可证文件            |
| package-lock.json | 项目实际使用package的输出 |
| node_modules      | 存放了项目使用的package   |

> ESLint是一个JS的代码格式与错误提示器。

### .vuepress

.vuepress文件夹应直接放置在源代码的目录里。里面包含了Vuepress的配置选项。

#### config.js

项目的配置文件。具体的配置说明请打开该文件查看注释。

> 更多详情可以查看[Vuepress配置](https://v1.vuepress.vuejs.org/zh/config/)

#### public文件夹

放置网站的其他文件，在构建时该文件夹内的文件会**直接拷贝**至构建后的目录中。其内部资源通常是不需要使用相对路径引入的资源，比如网站的图标等。

#### style文件夹

放置了整个站点的样式，其中`index.styl`是整个站点额外扩充的样式文件，`palette.styl`是整个站点的配色配置。

> styl是CSS的一个超集，扩充并改变了CSS的写法，在内部可以使用变量。
>
> 初学者可以在学习中结合使用，减少自己的错误并培养规范的代码风格。但无需掌握其具体配置方法与工作原理。****

初期无需掌握用途的文件：

| 文件夹               | 内容                           |
| -------------------- | ------------------------------ |
| compoenents          | 放置了Vuepress站点中的Vue组件  |
| theme                | 放置了Vuepress站点的主题       |
| templates            | 放置了Vuepress站点的模板与布局 |
| public/manifest.json | PWA相关                        |

## 插件

- active-header-links：页面滚动时自动激活侧边栏链接
- back-to-top：添加返回顶部按钮
- google-analytics：添加Google analytics
- last-updated：更新时间
- medium-zoom：图片缩放
- nprogress：进度条
- PWA：支持Progressive Web App
- register-component：注册components
- search：基于标题的搜索插件

具体用法详见：[Vuepress插件](https://v1.vuepress.vuejs.org/zh/plugin/)

## 命令

### 安装项目依赖

```bash
npm install
```

或

```bash
npm i
```

### 升级依赖

```bash
npm update
```

### 调试项目

创建开启一个本地预览，请使用[localhost:8080](http://localhost:8080)访问。

```bash
npm run serve
```

### 构建项目

打包构建项目，生成最终部署到服务器上的文件

```bash
npm run build
```
