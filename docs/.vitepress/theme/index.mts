import DefaultTheme from 'vitepress/theme'
import 'virtual:group-icons.css'
import './style/index.css'
import { injectSpeedInsights } from '@vercel/speed-insights'

export default {
  extends: DefaultTheme,
  setup() {
    injectSpeedInsights()
  }
}