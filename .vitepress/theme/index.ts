import Theme from 'vitepress/theme'
import './rainbow.css'
import './vars.css'
import './overrides.css'
import '@fontsource/jetbrains-mono'
import '@fontsource/merriweather/400.css'
import '@fontsource/merriweather/700.css'
import 'lxgw-wenkai-screen-webfont/style.css'

export default {
  ...Theme,
  enhanceApp(ctx) {
    Theme.enhanceApp(ctx)
  },
}
