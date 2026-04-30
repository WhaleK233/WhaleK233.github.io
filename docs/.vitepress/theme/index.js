import DefaultTheme from 'vitepress/theme'
import Calculator from './components/Calculator.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Calculator', Calculator)
  }
}
