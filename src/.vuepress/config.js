/*
 * @Author: Mr.Hope
 * @Date: 2019-07-05 00:14:26
 * @LastEditors: Mr.Hope
 * @LastEditTime: 2019-09-17 12:58:58
 * @Description: Vuepress配置
 */
const themeConfig = require('./theme');

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

  /** 主题配置 */
  themeConfig,

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

  /** 是否只支持常青树浏览器 */
  evergreen: true, // 设置为true后将不会兼容IE等老旧浏览器

  /** 插件选项 */
  plugins: {
    /** 更新时间插件 */
    '@vuepress/last-updated': {
      /** 转换时间戳 */
      transformer: (timestamp, lang) => {
        const moment = require('moment');

        moment.locale(lang);
        return moment(timestamp).fromNow();
      }
    },

    /** PWA 插件 */
    '@vuepress/pwa': {
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
    },

    /** 搜索插件 */
    '@vuepress/search': {
      /** 搜索展示数量 */
      searchMaxSuggestions: 10
    },

    /** 进度条插件 */
    '@vuepress/nprogress': true,

    /** 返回顶部 */
    '@vuepress/back-to-top': true,

    /** 页面滚动时自动激活侧边栏链接的插件 */
    '@vuepress/active-header-links': true,

    /** 图片缩放插件 */
    '@vuepress/medium-zoom': {
      // selector: 'img.zoom-custom-imgs',

      // medium-zoom options here
      // See: https://github.com/francoischalifour/medium-zoom#options
      options: {
        margin: 16
      }
    }
  }
};
