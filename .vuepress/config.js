module.exports = {
  title: 'skill-tree',
  description: '个人技能树，期一日，汝参天',
  base: '/skill-tree/',
  plugins: [
    ["vuepress-plugin-auto-sidebar", {}]
  ],
  themeConfig: {
    nav: [
      { text: '基础知识', '/basis/'},
      { text: 'Android', link: '/android/'}
    ]
  }
}
