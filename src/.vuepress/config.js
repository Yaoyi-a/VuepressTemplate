/*
 * @Author: Mr.Hope
 * @Date: 2019-07-05 00:14:26
 * @LastEditors: Mr.Hope
 * @LastEditTime: 2019-09-20 19:15:24
 * @Description: Vuepress配置
 */

module.exports = {
  /** 部署目录 */
  base: process.env.VuePress_BASE || '/',

  /** 网站标题 */
  title: '博客示例',

  /** 网站描述 */
  description: '基于Vuepress的博客',

  /** 生成网站头部的标签 */
  head: [
    // 设置网站图标
    ['link', { rel: 'icon', href: '/favicon.ico' }],

    // 设置网站作者
    ['meta', { name: 'author', content: 'Mr.Hope' }],

    // 移动端App体验
    ['meta', {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
    }],

    // pwa相关
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#46bd87' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/icon/appleIcon152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#46bd87' }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/icon/msIcon144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }]
  ],

  // host: '0.0.0.0',
  // port:8080,
  // temp: './dist/temp',

  /** 构建文件输出目录 */
  dest: 'dist',

  /** 多语言配置选项
   * 
   * 键名是该语言所属的子路径
   * 作为特例，默认语言可以使用 '/' 作为其路径。
   */
  locales: {
    /** 默认语言 */
    '/': {
      /** 设置为中文 */
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性

      /** 网站在该语言下的标题 */
      title: '博客示例',

      /** 网站在该语言下的描述 */
      description: '基于Vuepress的博客',
    },
    /** 英文设置 */
    '/en/': {
      lang: 'en-US',
      title: 'Blog DEMO',
      description: 'Vuepress based blog',
    }
  },

  /** 使用的主题 */
  // theme: '@vuepress/theme-default',

  /** 主题配置 */
  themeConfig: {
    /** 头部导航栏的配置 */
    nav: [
      { text: '主页', link: '/' },
      { text: 'Vuepress介绍', link: '/about.html' },
      { text: 'Markdown介绍', link: '/markdown/' }
    ],

    /** 侧边栏配置 */
    sidebar: {
      '/markdown/': [
        '',
        'demo',
        'emoji'
      ],

      // fallback
      '/': [
        '',        /* / */
        'about'    /* /about.html */
      ]
    },

    /** 侧边栏标题显示深度，0-2 */
    sidebarDepth: 2,

    /** 语言设置 */
    locales: {
      /** 默认语言 */
      '/': {
        lang: 'zh-CN',
        selectText: '选择语言',
        lastUpdated: '上次编辑时间',
        label: '简体中文'
      },

      /** 英文设置 */
      '/en/': {
        /** 设置该语言的代码 */
        lang: 'en-US', // 将会被设置为 <html> 的 lang 属性

        /** 网站在该语言下的标题 */
        title: 'Blog DEMO',

        /** 网站在该语言下的描述 */
        description: 'Vuepress based blog',

        /** 该语言下头部导航栏的配置 */
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Vuepress', link: '/en/about.html' },
          { text: 'Markdown', link: '/en/markdown/' }
        ],

        /** 网站在该语言下的侧边栏 */
        sidebar: {
          '/en/markdown/': ['', 'demo', 'emoji'],
          '/en/': ['', 'about']
        },

        /** 多语言下拉菜单的标题 */
        selectText: 'Language',

        /** 辅助标签 */
        ariaLabel: 'Select language',

        /** 该语言下的更新时间文字 */
        lastUpdated: 'Last update',

        /** 该语言在下拉菜单中的标签 */
        label: 'English',

        /** 编辑链接文字 */
        editLinkText: 'Edit on Github'
      }
    },

    /** repo地址 */
    repo: 'https://github.com/nenuyouth/VuepressTemplate',

    /** 文档目录 */
    docsDir: 'src',

    /** 自定义仓库链接文字 */
    repoLabel: 'Github',

    /** 开启编辑此页链接 */
    editLinks: true, // 默认是 false, 设置为 true 来启用

    /** 编辑此页链接提示文字 */
    editLinkText: '在 GitHub 上编辑此页' // 默认为 "Edit this page"
  },

  /** markdown-it的配置 */
  markdown: {
    linenumber: true
  },

  /** 是否只支持常青树浏览器 */
  evergreen: true, // 设置为true后将不会兼容IE等老旧浏览器

  /** 插件选项 */
  plugins: [
    /** 自定义容器配置 */
    ['container', {
      type: 'warning',
      defaultTitle: {
        '/': '注意',
        '/en/': 'Caution'
      }
    }],
    ['container', {
      type: 'danger',
      defaultTitle: {
        '/': '警告',
        '/en/': 'Warning'
      }
    }],

    /** 更新时间插件 */
    ['@vuepress/last-updated', {
      /** 转换时间戳 */
      transformer: (timestamp, lang) => {
        const moment = require('moment');

        moment.locale(lang);
        return moment(timestamp).fromNow();
      }
    }],

    /** PWA 插件 */
    ['@vuepress/pwa', {
      /** 是否注册Service Worker */
      serviceWorker: true,
      /** 是否弹出页面更新提示 */
      updatePopup: {
        '/': {
          message: "发现新内容可用",
          buttonText: "刷新"
        },
        '/en/': {
          message: "New content is available.",
          buttonText: "Refresh"
        }
      }
    }],

    /** 搜索插件 */
    ['@vuepress/search', {
      /** 搜索展示数量 */
      searchMaxSuggestions: 10
    }],

    /** 进度条插件 */
    ['@vuepress/nprogress'],

    /** 页面滚动时自动激活侧边栏链接的插件 */
    ['@vuepress/active-header-links'],

    /** 图片缩放插件 */
    ['@vuepress/medium-zoom', {
      /** 图片选择器 */
      // selector: 'img.zoom-custom-imgs',

      /** 设置选项 */
      options: {
        /** 缩放后图片的外间距 */
        margin: 16,
        /** 缩放背景 */
        background: '#fff',
        /** 关闭缩放需要滚动的像素数 */
        scrollOffset: 40
      }
    }],

    /** chunk命名 */
    ['named-chunks']
  ]
};
