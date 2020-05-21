import { store as Store } from 'react-easy-state'

const current = window.localStorage.getItem("theme")

const theme = Store({
  auto: true,
  current,
  SetDark() {
    theme.current = "theme-dark"
    theme.StopAuto()
    window.localStorage.setItem("theme", "theme-dark")
  },
  SetLight() {
    theme.current = "theme-light"
    theme.StopAuto()
    window.localStorage.setItem("theme", "theme-light")
  },
  GetDarkColor() {
    return theme.current == "theme-light" ? 'black' : 'gray'
  },
  SetAuto() {
    if (theme.watch_day_and_night_already_inited) return
    theme.watch_day_and_night_already_inited = true 
    theme.auto = true
    window.localStorage.removeItem("theme")
    const Handler = () => {
      if (!theme.auto) return theme.StopAuto()
      theme.current = theme.IsNight() ? "theme-dark" : "theme-light"
    }
    Handler()
    theme.WatchDayAndNightInterval = setInterval(Handler, 1000)
  },
  StopAuto() {
    theme.auto = false
    clearInterval(theme.WatchDayAndNightInterval)
    theme.watch_day_and_night_already_inited = false
  },
  IsNight() {
    const d = new Date()
    const hour = d.getHours()
    const month = d.getMonth()+1
    const min_hour = month>=11 || month<=3 ? 16 : 20
    return hour>=min_hour
  }
})

if (!current) {
  theme.SetAuto()
}

export default theme