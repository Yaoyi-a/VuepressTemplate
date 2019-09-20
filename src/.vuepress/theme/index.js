/*
 * @Author: Mr.Hope
 * @Date: 2019-09-19 11:01:50
 * @LastEditors: Mr.Hope
 * @LastEditTime: 2019-09-20 19:26:10
 * @Description: 主题配置
 */
const path = require('path')

// Theme API.
module.exports = (options, ctx) => ({
  alias() {
    const { themeConfig, siteConfig } = ctx
    // resolve algolia
    const isAlgoliaSearch = (
      themeConfig.algolia
      || Object.keys(siteConfig.locales && themeConfig.locales || {})
        .some(base => themeConfig.locales[base].algolia)
    )
    return {
      '@AlgoliaSearchBox': isAlgoliaSearch
        ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
        : path.resolve(__dirname, 'noopModule.js')
    }
  },
  /** 继承默认主题 */
  extend: '@vuepress/theme-default',

  /** 插件选项 */
  plugins: []
});
