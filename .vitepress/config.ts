import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'

export default defineConfig({
  title: "FE",
  description: "Records about my front-end learning",
  cleanUrls: true,
  srcDir: 'src',
  head: [
    ['link', { rel: 'icon', href: '/panda.svg' }]
  ],
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    }
  },
  themeConfig: {
    sidebar: {
      '/': sidebar
    },
    search: {
      provider: 'local'
    }
  },
})
