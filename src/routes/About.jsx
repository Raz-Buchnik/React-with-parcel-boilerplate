import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">
        <h1>Go home</h1>
      </Link>
    </div>
  )
}