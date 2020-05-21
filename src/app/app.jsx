import React from 'react'
import { App, View } from 'framework7-react'
import AppParams from '/app/params'
import AppRouter from '/app/router'
import { view as State } from 'react-easy-state'
import { theme, language, global } from '/stores'

class AppMain extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    this.$f7ready(f7App => {
      global.app = f7App
      global.app.dialog.alert('Hello World')
    })
  }
  render() {
    return (
      <App params={AppParams(language)} routes={AppRouter} className={`${theme.current}`}>
        { 
          global.app && <View main pushState url="/" />
        }
      </App>
    )
  }
}

export default State(AppMain)