/*
 * @Author: Mr.Hope
 * @Date: 2019-09-16 22:17:34
 * @LastEditors: Mr.Hope
 * @LastEditTime: 2019-09-16 22:22:26
 * @Description: 主题配置
 */

/** 对默认主题的配置 */
module.exports = {
  /** 头部导航栏的配置 */
  nav: [
    { text: '主页', link: '/' },
    { text: 'Vuepress介绍', link: '/about.html' },
    { text: 'Markdown介绍', link: '/markdown/' }
  ],

  /** 侧边栏配置 */
  sidebar: 'auto',

  /** 语言设置 */
  locales: {
    /** 默认语言 */
    '/': {
      /** 设置为中文 */
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性

      /** 网站在该语言下的标题 */
      title: '个人博客',

      /** 网站在该语言下的描述 */
      description: '基于Vuepress的博客',

      /** 该语言下头部导航栏的配置 */
      nav: [
        { text: '主页', link: '/' },
        { text: 'Vuepress介绍', link: '/about.html' },
        { text: 'Markdown介绍', link: '/markdown/' }
      ],

      /** 网站在该语言下的侧边栏 */
      sidebar: 'auto',

      /** 多语言下拉菜单的标题 */
      selectText: '选择语言',

      /** 该语言下的更新时间文字 */
      lastUpdated: '上次编辑时间',

      /** 该语言在下拉菜单中的标签 */
      label: '简体中文',

      /** 编辑链接文字 */
      editLinkText: '在 GitHub 上编辑此页',

      // Service Worker 的配置
      serviceWorker: {
        /** 更新弹窗 */
        updatePopup: {
          /** 更新信息 */
          message: "发现新内容可用。",
          /** 按钮文字 */
          buttonText: "刷新"
        }
      }
    },

    /** 英文 */
    '/en/': {
      lang: 'en-US',
      title: 'Personal Blog',
      description: 'Vuepress based blog',
      nav: [
        { text: 'Home', link: '/en/' },
        { text: 'Vuepress', link: '/en/about.html' },
        { text: 'Markdown', link: '/en/markdown/' }
      ],
      sidebar: 'auto',
      selectText: 'Language',
      lastUpdated: 'Last update',
      label: 'English',
      editLinkText: 'Edit on Github',
      serviceWorker: {
        updatePopup: {
          message: "New content found.",
          buttonText: "Refresh"
        }
      }
    }
  },

  /** repo地址 */
  repo: 'https://github.com/nenuyouth/VuepressTemplate',

  /** 自定义仓库链接文字 */
  repoLabel: 'Github',

  /** 开启编辑此页链接 */
  editLinks: true, // 默认是 false, 设置为 true 来启用

  /** 编辑此页链接提示文字 */
  editLinkText: '在 GitHub 上编辑此页' // 默认为 "Edit this page"
};
