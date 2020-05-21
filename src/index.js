import React from 'react'
import ReactDOM from 'react-dom'
import App from '/app/App'
import Framework7 from 'framework7/js/framework7-lite.min.js'
import Framework7React from 'framework7-react'
import 'framework7/css/framework7.min.css'
import 'framework7-icons'
import './style.css'

Framework7.use(Framework7React)

ReactDOM.render(
  React.createElement(App),
  document.getElementById('app')
)