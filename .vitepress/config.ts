/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
import { defineConfig } from 'vitepress'
import { navbar } from './navbar'
import { dailySidebar, hbsSidebar, interviewSidebar, juejinTsSidebar, juejinTschSidebar, patternsSidebar, sidebar, xSidebar } from './sidebar'

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
      '/x/': xSidebar,
      '/py/': xSidebar,
      '/patterns/': patternsSidebar,
      '/daily': dailySidebar,
      '/hbs/': hbsSidebar,
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
