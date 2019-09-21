(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{65:function(t,s,a){t.exports=a.p+"assets/img/architecture.9a93cf6c.png"},80:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),e("p",[t._v("插件通常会为 VuePress 添加全局功能。")]),t._v(" "),e("p",[t._v("整个插件系统的架构如下:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(65),alt:"architecture"}})]),t._v(" "),e("h2",{attrs:{id:"使用插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用插件","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用插件")]),t._v(" "),e("p",[t._v("你可以通过在 "),e("code",[t._v(".vuepress/config.js")]),t._v(" 中做一些配置来使用插件：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./my-plugin.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"使用来自依赖的插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用来自依赖的插件","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用来自依赖的插件")]),t._v(" "),e("p",[t._v("一个插件可以在以 "),e("code",[t._v("vuepress-plugin-xxx")]),t._v(" 的形式发布到 npm，你可以这样使用它：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-xx'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("同时，如果你的插件名以 "),e("code",[t._v("vuepress-plugin-")]),t._v(" 开头，你可以使用缩写来省略这个前缀：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("和下面等价：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-xxx'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("这也适用于 "),e("a",{attrs:{href:"https://docs.npmjs.com/misc/scope",target:"_blank",rel:"noopener noreferrer"}},[t._v("Scoped Packages"),e("OutboundLink")],1),t._v(":")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@org/vuepress-plugin-xxx'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/plugin-xxx'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("等价于:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@org/xxx'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/xxx'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("以 "),e("code",[t._v("@vuepress/plugin-")]),t._v(" 开头的插件是官方维护的插件。")])]),t._v(" "),e("h2",{attrs:{id:"插件的配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件的配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 插件的配置")]),t._v(" "),e("p",[t._v("通过"),e("code",[t._v("config.js")]),t._v("的"),e("code",[t._v("plugin")]),t._v("字段配置。")]),t._v(" "),e("h3",{attrs:{id:"babel-式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#babel-式","aria-hidden":"true"}},[t._v("#")]),t._v(" Babel 式")]),t._v(" "),e("p",[t._v("插件可以通过在配置内的数组中封装名称和选项对象来指定选项：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-xxx'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* options */")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("由于这种风格和 "),e("a",{attrs:{href:"https://babeljs.io/docs/en/plugins#plugin-preset-options",target:"_blank",rel:"noopener noreferrer"}},[t._v("babeld Plugin/Preset Options"),e("OutboundLink")],1),t._v(' 一致，我们称之为"Babel 风格"。')]),t._v(" "),e("h3",{attrs:{id:"对象式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对象式","aria-hidden":"true"}},[t._v("#")]),t._v(" 对象式")]),t._v(" "),e("p",[t._v("VuePress 也提供了一种更简单的方式来使用来自依赖的插件：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* options */")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("由于某些插件可能存在多个实例，强烈推荐使用"),e("strong",[t._v("babel 风格")]),t._v("写法。")])]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("可以通过显示地将选项设置成 "),e("code",[t._v("false")]),t._v(" 来禁用一个插件：")]),t._v(" "),e("ul",[e("li",[t._v("Babel 风格")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// disabled.")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ul",[e("li",[t._v("对象风格")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// disabled.")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),e("h2",{attrs:{id:"官方插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#官方插件","aria-hidden":"true"}},[t._v("#")]),t._v(" 官方插件")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-active-header-links.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("active-header-links"),e("OutboundLink")],1),t._v("：页面滚动时自动激活侧边栏链接")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-back-to-top.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("back-to-top"),e("OutboundLink")],1),t._v("：添加返回顶部按钮")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-google-analytics.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("google-analytics"),e("OutboundLink")],1),t._v("：添加Google analytics")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-last-updated.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("last-updated"),e("OutboundLink")],1),t._v("：更新时间")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-medium-zoom.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("medium-zoom"),e("OutboundLink")],1),t._v("：图片缩放")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-nprogress.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("nprogress"),e("OutboundLink")],1),t._v("：进度条")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-pwa.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PWA"),e("OutboundLink")],1),t._v("：支持Progressive Web App")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-register-components.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("register-component"),e("OutboundLink")],1),t._v("：注册components")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-search.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("search"),e("OutboundLink")],1),t._v("：基于标题的搜索插件")])]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("具体用法详见："),e("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/plugin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuepress插件"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"社区插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#社区插件","aria-hidden":"true"}},[t._v("#")]),t._v(" 社区插件")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://vuepress.github.io/zh/plugins/clean-urls.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("clean-urls"),e("OutboundLink")],1),t._v(": 在 VuePress 中使用简洁链接")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://vuepress.github.io/zh/plugins/container.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("container"),e("OutboundLink")],1),t._v(": 在 VuePress 中使用 markdown 容器")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://vuepress.github.io/zh/plugins/copyright.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("copyright"),e("OutboundLink")],1),t._v(": 在 VuePress 中处理复制行为")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://vuepress.github.io/zh/plugins/dehydrate.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("dehydrate"),e("OutboundLink")],1),t._v(": 修改 VuePress 生成的 HTML 文件")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://vuepress.github.io/zh/plugins/git-log.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("git-log"),e("OutboundLink")],1),t._v(": 在 VuePress 中整合 git 日志")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://vuepress.github.io/zh/plugins/mathjax.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("mathjax"),e("OutboundLink")],1),t._v(": 在 VuePress 中使用 TeX 语法")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://vuepress.github.io/zh/plugins/migrate.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("migrate"),e("OutboundLink")],1),t._v(": 从其他网站迁移到 VuePress")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://vuepress.github.io/zh/plugins/named-chunks.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("named-chunks"),e("OutboundLink")],1),t._v(": 在 VuePress 中使用命名模块")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://vuepress.github.io/zh/plugins/redirect.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("redirect"),e("OutboundLink")],1),t._v(": 在 VuePress 中处理重定向")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://vuepress.github.io/zh/plugins/serve.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("serve"),e("OutboundLink")],1),t._v(": 在本地构建静态 VuePress 服务器")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://vuepress.github.io/zh/plugins/zooming.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("zooming"),e("OutboundLink")],1),t._v(": 使 VuePress 中的图片支持缩放（使用 zooming）")])]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("文档详见："),e("a",{attrs:{href:"https://vuepress.github.io/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuepress社区"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);