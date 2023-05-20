import Theme from 'vitepress/theme'
import { useData, useRoute } from 'vitepress'
import codeblocksFold from 'vitepress-plugin-codeblocks-fold'
import 'vitepress-plugin-codeblocks-fold/style/index.scss'
import './rainbow.css'
import './vars.css'
import './overrides.css'
import "@fontsource/jetbrains-mono"

export default { 
  ...Theme,
  enhanceApp(ctx: any) {
    Theme.enhanceApp(ctx)
  },
  setup() {
    const { frontmatter } = useData()
    const route = useRoute()
    codeblocksFold({ route, frontmatter }, true, 400)
  }
}
