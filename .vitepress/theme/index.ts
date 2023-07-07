import Theme from 'vitepress/theme'
import './rainbow.css'
import './vars.css'
import './overrides.css'
import '@fontsource/jetbrains-mono'
import '@fontsource/merriweather/400.css'
import '@fontsource/merriweather/700.css'
import '@fontsource/ibm-plex-mono'
import '@fontsource-variable/lexend'
import 'lxgw-wenkai-screen-webfont/style.css'
import '@chinese-fonts/jxzk/dist/江西拙楷/result.css'

export default {
  ...Theme,
  enhanceApp(ctx) {
    Theme.enhanceApp(ctx)
  },
}
