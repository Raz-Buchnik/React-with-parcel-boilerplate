import { store as Store } from 'react-easy-state'

const theme = Store({
  theme: "theme-light",
  status: "light",
  SetTheme(theme) {
    theme.theme = theme
  },
  ToggleTheme() {
    theme.theme = theme.theme == "theme-dark" ? "theme-light" : "theme-dark"
    theme.status = theme.status == "light" ? "dark" : "light"
  },
  Black() {
    return theme.status == "light" ? 'black' : 'gray'
  }
})

export default theme