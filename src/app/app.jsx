import React from 'react'
import { App, View } from 'framework7-react'
import AppParams from '/app/params'
import AppRouter from '/app/router'

export default () => {
  return (
    <App params={AppParams} routes={AppRouter}>
      <View main pushState url="/" />
    </App>
  )
}
