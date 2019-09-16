/*
 * @Author: Mr.Hope
 * @Date: 2019-07-05 00:14:26
 * @LastEditors: Mr.Hope
 * @LastEditTime: 2019-09-16 17:47:00
 * @Description: Vuepress配置
 */

module.exports = {
  /** 部署目录 */
  base: '/',

  /** 网站标题 */
  title: '个人博客',

  /** 网站描述 */
  description: 'Vuepress based blog',

  /** 生成网站头部的标签 */
  head: [
    // 设置网站图标
    ['link', { rel: 'icon', href: '/favicon.ico' }],

    // 设置网站作者
    ['meta', { name: 'author', content: 'Mr.Hope' }],

    // pwa相关
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#5c92d1' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/icon/appleIcon152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#5c92d1' }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/icon/msIcon144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }]
  ],

  /** 主题配置 */
  themeConfig: {
    /** 头部导航栏的配置 */
    nav: [
      { text: '主页', link: '/' },
      { text: '介绍', link: '/about/' },
      { text: 'Github', link: 'https://github.com/nenuyouth/vuepressTemplate' },
    ],

    /** 侧边栏配置 */
    sidebar: 'auto',
  },

  /** 构建文件输出目录 */
  dest: 'dist',

  /** 是否只支持常青树浏览器 */
  evergreen: true, // 设置为true后将不会兼容IE等老旧浏览器

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
      updatePopup: true
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
