import Theme from 'vitepress/theme'
import { useData, useRoute } from 'vitepress'
import codeblocksFold from 'vitepress-plugin-codeblocks-fold'
import 'vitepress-plugin-codeblocks-fold/style/index.scss'
import { Sandbox } from 'vitepress-plugin-sandpack'
import './rainbow.css'
import './vars.css'
import './overrides.css'
import '@fontsource/jetbrains-mono'

export default {
  ...Theme,
  enhanceApp(ctx: any) {
    Theme.enhanceApp(ctx)
    ctx.app.component('Sandbox', Sandbox)
  },
  setup() {
    const { frontmatter } = useData()
    const route = useRoute()
    codeblocksFold({ route, frontmatter }, true, 400)
  },
}
