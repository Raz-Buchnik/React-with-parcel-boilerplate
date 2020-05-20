import React from 'react'
import { view as View } from 'react-easy-state'

const Handler = ({title}) => {
  return (
    <div>
      { title }
    </div>
  )
}

export default View(Handler)