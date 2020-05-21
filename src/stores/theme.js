import { store as Store } from 'react-easy-state'

const theme = Store({
  theme: "theme-light",
  status: "light",
  Toggle() {
    theme.theme = theme.theme == "theme-dark" ? "theme-light" : "theme-dark"
    theme.status = theme.status == "light" ? "dark" : "light"
  },
  DarkColor() {
    return theme.status == "light" ? 'black' : 'gray'
  }
})

export default theme