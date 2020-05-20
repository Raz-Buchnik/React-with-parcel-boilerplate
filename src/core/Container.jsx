import React from 'react'
import { view as View } from 'react-easy-state'

const Handler = ({children}) => {
  return (
    <div className="container">
      {children}
    </div>
  )
}

export default View(Handler)