/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
import { defineConfig } from 'vitepress'
import { navbar } from './navbar'
import { algoSidebar, hbsSidebar, interviewSidebar, jsdpSidebar, juejinTsSidebar, juejinTschSidebar, sidebar, tschSidebar, xnsSidebar } from './sidebar'

export default defineConfig({
  title: 'FE',
  description: 'Records about my front-end learning',
  cleanUrls: true,
  srcDir: 'src',
  head: [
    ['link', { rel: 'icon', href: '/chick.svg' }],
  ],
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    config: (md) => {
      md.use(require('markdown-it-imsize'))
        .use(require('markdown-it-footnote'))
    },
  },
  themeConfig: {
    nav: navbar,
    sidebar: {
      '/': sidebar,
      '/algo/': algoSidebar,
      '/tsch/': tschSidebar,
      '/hbs/': hbsSidebar,
      '/xns/': xnsSidebar,
      '/jsdp/': jsdpSidebar,
      '/juejin/tsch/': juejinTschSidebar,
      '/juejin/ts/': juejinTsSidebar,
      '/interview/': interviewSidebar,
    },
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mancuoj/fe' },
    ],
  },
})
