import { defineConfig } from 'vitepress'
import container from 'markdown-it-container'
import { renderSandbox } from 'vitepress-plugin-sandpack'
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
      // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
      md.use(require('markdown-it-imsize'))
        .use(container, 'sandbox', {
          render(tokens: any[], idx: number) {
            return renderSandbox(tokens, idx, 'sandbox')
          },
        })
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
