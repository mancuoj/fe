import Theme from 'vitepress/theme'
import { useData, useRoute } from 'vitepress'
import codeblocksFold from 'vitepress-plugin-codeblocks-fold'
import 'vitepress-plugin-codeblocks-fold/style/index.scss'
import './rainbow.css'
import './vars.css'
import './overrides.css'
import '@fontsource/jetbrains-mono'
import '@fontsource/merriweather/400.css'
import '@fontsource/merriweather/700.css'

export default {
  ...Theme,
  enhanceApp(ctx) {
    Theme.enhanceApp(ctx)
  },
  setup() {
    const { frontmatter } = useData()
    const route = useRoute()
    codeblocksFold({ route, frontmatter }, true, 500)
  },
}
