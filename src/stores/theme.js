import { store as Store } from 'react-easy-state'

const theme = Store({
  auto: true,
  current: "theme-light",
  SetDark() {
    theme.current = "theme-dark"
    theme.StopWatchDayAndNight()
  },
  SetLight() {
    theme.current = "theme-light"
    theme.StopWatchDayAndNight()
  },
  SetAuto() {
    theme.WatchDayAndNight()
  },
  GetDarkColor() {
    return theme.current == "theme-light" ? 'black' : 'gray'
  },
  WatchDayAndNight() {
    if (theme.watch_day_and_night_already_inited) return
    theme.watch_day_and_night_already_inited = true 
    theme.auto = true
    const Handler = () => {
      if (!theme.auto) {
        return theme.StopWatchDayAndNight()
      }
      const current_hour = new Date().getHours()
      theme.current = current_hour >= 20 ? "theme-dark" : "theme-light"
    }
    Handler()
    theme.WatchDayAndNightInterval = setInterval(Handler, 1000)
  },
  StopWatchDayAndNight() {
    theme.auto = false
    clearInterval(theme.WatchDayAndNightInterval)
    theme.watch_day_and_night_already_inited = false
  }
})

theme.WatchDayAndNight()

export default theme