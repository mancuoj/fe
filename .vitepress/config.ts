import { defineConfig } from 'vitepress'
import { algoSidebar, hbsSidebar, interviewSidebar, juejinTsSidebar, juejinTschSidebar, sidebar, tschSidebar, xnsSidebar } from './sidebar'
import { navbar } from './navbar'

export default defineConfig({
  title: "FE",
  description: "Records about my front-end learning",
  cleanUrls: true,
  srcDir: 'src',
  head: [
    ['link', { rel: 'icon', href: '/chick.svg' }]
  ],
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    config: (md) => {
      md.use(require('markdown-it-imsize'))
    }
  },
  themeConfig: {
    nav: navbar,
    sidebar: {
      '/': sidebar,
      '/algo/': algoSidebar,
      '/tsch/': tschSidebar,
      '/hbs/': hbsSidebar,
      '/xns/': xnsSidebar,
      '/juejin/tsch/': juejinTschSidebar,
      '/juejin/ts/': juejinTsSidebar,
      '/interview/': interviewSidebar,
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mancuoj/fe' },
    ]
  },
})
