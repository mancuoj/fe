import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Mancuoj",
  description: "Records about my front-end learning",
  cleanUrls: true,
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    }
  },
  themeConfig: {
    nav: [
      { text: '记录', link: '/' },
      { text: 'ES6 入门', link: '/es6' },
      { text: '红宝书', link: '/js' },
    ],
    sidebar: [
      {
        items: [
          { text: '开始', link: '/' },
        ]
      }
    ],
    search: {
      provider: 'local'
    }
  },
})
