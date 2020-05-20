import React from 'react'
import { view as View } from 'react-easy-state'

const Handler = ({children}) => {
  return (
    <div>
      { children }
    </div>
  )
}

export default View(Handler)