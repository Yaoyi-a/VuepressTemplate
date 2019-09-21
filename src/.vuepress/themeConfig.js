/*
 * @Author: Mr.Hope
 * @Date: 2019-09-20 19:39:33
 * @LastEditors: Mr.Hope
 * @LastEditTime: 2019-09-21 08:18:22
 * @Description: 主题配置文件
 */

module.exports = {
  /** 头部导航栏的配置 */
  nav: [
    { text: '主页', link: '/', icon: 'homefill' },
    { text: 'Vuepress介绍', link: '/vuepress/', icon: 'infofill' },
    { text: 'Markdown介绍', link: '/markdown/', icon: 'markdown' }
  ],

  /** 侧边栏配置 */
  sidebar: {
    '/vuepress/': ['', 'file'],

    '/markdown/': ['', 'demo', 'emoji'],

    // fallback
    '/': [
      '',            /* / */
      'vuepress/',   /* /vuepress/ */
      'markdown/',   /* /markdown/ */
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
        { text: 'Home', link: '/en/', icon: 'homefill' },
        { text: 'Vuepress', link: '/en/vuepress/', icon: 'infofill' },
        { text: 'Markdown', link: '/en/markdown/', icon: 'markdown' }
      ],

      /** 网站在该语言下的侧边栏 */
      sidebar: {
        '/en/vuepress/': ['', 'file'],
        '/en/markdown/': ['', 'demo', 'emoji'],
        '/en/': ['', 'vuepress/', 'markdown/']
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
};
