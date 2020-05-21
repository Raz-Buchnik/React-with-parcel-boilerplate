import React from 'react'
import ReactDOM from 'react-dom'
import App from '/app/App'
import Framework7 from 'framework7/js/framework7-lite.min.js'
import Framework7React from 'framework7-react'
import { language } from '/stores'
import 'framework7-icons'
import 'babel-polyfill'

Framework7.use(Framework7React)

language.SetCurrent(null, () => {
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('app')
  )
})