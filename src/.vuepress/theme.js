/*
 * @Author: Mr.Hope
 * @Date: 2019-09-16 22:17:34
 * @LastEditors: Mr.Hope
 * @LastEditTime: 2019-09-17 12:53:03
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
  sidebar: {
    '/markdown/': [
      '',     /* /foo/ */
      'demo',  /* /foo/one.html */
      'emoji'   /* /foo/two.html */
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
      /** 设置为中文 */
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性

      /** 网站在该语言下的标题 */
      title: '博客示例',

      /** 网站在该语言下的描述 */
      description: '基于Vuepress的博客',

      /** 该语言下头部导航栏的配置 */
      nav: [
        { text: '主页', link: '/' },
        { text: 'Vuepress介绍', link: '/about.html' },
        { text: 'Markdown介绍', link: '/markdown/' }
      ],

      /** 网站在该语言下的侧边栏 */
      sidebar: {
        '/markdown/': [
          '',
          'demo',
          'emoji'
        ],

        // fallback
        '/': [
          '',      /* / */
          'about'  /* /about.html */
        ]
      },

      /** 多语言下拉菜单的标题 */
      selectText: '选择语言',

      /** 该语言下的更新时间文字 */
      lastUpdated: '上次编辑时间',

      /** 该语言在下拉菜单中的标签 */
      label: '简体中文',

      /** 编辑链接文字 */
      editLinkText: '在 GitHub 上编辑此页'
    },

    /** 英文 */
    '/en/': {
      lang: 'en-US',
      title: 'Blog DEMO',
      description: 'Vuepress based blog',
      nav: [
        { text: 'Home', link: '/en/' },
        { text: 'Vuepress', link: '/en/about.html' },
        { text: 'Markdown', link: '/en/markdown/' }
      ],
      sidebar: {
        '/en/markdown/': ['', 'demo', 'emoji'],
        '/en/': ['', 'about']
      },
      selectText: 'Language',
      /** 辅助标签 */
      ariaLabel: 'Select language',
      lastUpdated: 'Last update',
      label: 'English',
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
