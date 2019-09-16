# Markdown介绍

Markdown是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。

Markdown具有一系列衍生版本，用于扩展Markdown的功能（如表格、脚注、内嵌HTML等等），这些功能原初的Markdown尚不具备，它们能让Markdown转换成更多的格式，例如LaTeX，Docbook。Markdown增强版中比较有名的有Markdown Extra、MultiMarkdown、 Maruku等。这些衍生版本要么基于工具，如Pandoc；要么基于网站，如GitHub和Wikipedia，在语法上基本兼容，但在一些语法和渲染效果上有改动。

## 用途

Markdown的语法简洁明了、学习容易，而且功能比纯文本更强，因此有很多人用它写博客。世界上最流行的博客平台WordPress和大型CMS如Joomla、Drupal都能很好的支持Markdown。完全采用Markdown编辑器的博客平台有Ghost和Typecho。

用于编写说明文档，并且以“README.md”的文件名保存在软件的目录下面。
除此之外，由于我们有了RStudio这样的神级编辑器，我们还可以快速将Markdown转化为演讲PPT、Word产品文档、LaTex论文甚至是用非常少量的代码完成最小可用原型。在数据科学领域，Markdown已经广泛使用，极大地推进了动态可重复性研究的历史进程。

## 快捷键

| 输出后的效果  | Markdown   | 快捷键     |
| ------------- | ---------- | ---------- |
| **Bold**      | `**text**` | Ctrl/⌘ + B |
| *Emphasize*   | `*text*`   | Ctrl/⌘ + I |
| `Inline Code` | \`code\`   | 选中后"\`" |

## 标题

标题能显示出文章的结构。行首插入1-6个 # ，每增加一个 # 表示更深入层次的内容，对应到标题的深度由 1-6 阶。

- H1 :`# Header 1`
- H2 :`## Header 2`
- H3 :`### Header 3`
- H4 :`#### Header 4`
- H5 :`##### Header 5`
- H6 :`###### Header 6`

## 文本样式

- 链接 :`[Title](URL)`
- 加粗 :`**Bold**`
- 斜体:`*Italics*`
- 删除:`~~Italics~~`
- 段落 : 段落之间空一行
- 换行符 : 一行结束时输入两个空格
- 列表 : 添加`-`成为一个新的列表项。
- 引用 : `> 引用内容`
- 画水平线 (HR) : 单独一行输入`---`

## 链接

`[Title](URL)`

e.g:`[Baidu](https://baidu.com)`

## 图片

`![图片的被用文字](图片链接)` 。

e.g:`![This is a title](/img/title.jpg)`.

## Emoji

`:emoji名称:`

eg:`:smile:`

## Markdown效果演示

- [查看详情](demo.md)
