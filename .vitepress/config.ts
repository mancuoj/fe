import { defineConfig } from 'vitepress'
import { algoSidebar, es6Sidebar, hbsSidebar, juejinTsSidebar, juejinTschSidebar, patternsSidebar, sidebar, tschSidebar } from './sidebar'
import { navbar } from './navbar'

export default defineConfig({
  title: "FE",
  description: "Records about my front-end learning",
  cleanUrls: true,
  srcDir: 'src',
  head: [
    ['link', { rel: 'icon', href: '/bear.svg' }]
  ],
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    }
  },
  themeConfig: {
    nav: navbar,
    sidebar: {
      '/': sidebar,
      '/algo/': algoSidebar,
      '/tsch/': tschSidebar,
      '/hbs/': hbsSidebar,
      '/es6/': es6Sidebar,
      '/juejin/tsch/': juejinTschSidebar,
      '/juejin/ts/': juejinTsSidebar,
      '/patterns/': patternsSidebar,
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mancuoj/fe' },
    ]
  },
})
