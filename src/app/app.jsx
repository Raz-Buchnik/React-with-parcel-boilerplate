import React from 'react'
import { App, View } from 'framework7-react'
import AppParams from '/app/params'
import AppRouter from '/app/router'
import { view as State } from 'react-easy-state'
import { theme } from '/stores'

const Handler = () => {
  return (
    <App params={AppParams} routes={AppRouter} className={`${theme.theme}`}>
      <View main pushState url="/" />
    </App>
  )
}

export default State(Handler)
