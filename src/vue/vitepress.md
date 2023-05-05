# 速搭一个 VitePress 文档

## Install

创建一个新文件夹，输入

```sh
pnpm add -D vitepress
pnpm exec vitepress init
```

交互式 cli，填写后选择 Default Theme

## Config

::: code-group

```ts [config.ts]
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Mancuoj",
  description: "Records about my front-end learning",
  cleanUrls: true,
  // head 可以加一些 SEO 信息
  head: [
    ['link', { rel: 'icon', href: '/panda.svg' }]  
    // 创建一个 public 文件夹，静态文件可以直接用 `/` 路径引入
  ],
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    }
  },
  themeConfig: {
    sidebar: [
      '/': {
        items: [
          { text: '开始', link: '/' },  // index.md
          { text: '1', link: '/a' },    // a.md
          { text: '2', link: '/b' },    // b.md
        ],
      }
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mancuoj/fe' },
    ]
  },
})
```

``` [.gitignore]
dist
node_modules
cache
```

``` [.npmrc]
auto-install-peers=true
```
:::


## Styles

照抄 [UnoCSS](https://github.com/unocss/unocss/tree/main/docs/.vitepress/theme) 即可


## Docs

其他直接看 [官方文档](https://vitepress.dev/reference/site-config)