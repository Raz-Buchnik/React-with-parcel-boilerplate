import React, { useEffect } from 'react'
import { App, View, f7ready, Preloader } from 'framework7-react'
import AppParams from '/app/params'
import AppRouter from '/app/router'
import { view as State } from 'react-easy-state'
import { theme, language, global, user } from '/stores'

const AppMain = () => {

  useEffect(() => {
    f7ready(f7App => {
      global.app = f7App
      user.Init()
    })
  }, [])

  return (
    <App 
      params={AppParams(language)} 
      routes={AppRouter} 
      className={`${theme.current}`}>
        { 
          (global.app && user.inited) 
            ? <View main pushState />
            : <Preloader />
        }
    </App>
  )
}

export default State(AppMain)