import { store as Store } from 'react-easy-state'

const theme = Store({
  theme: "theme-light",
  SetTheme(theme) {
    theme.theme = theme
  },
  ToggleTheme() {
    theme.theme = theme.theme == "theme-dark" ? "theme-light" : "theme-dark"
  }
})

export default theme