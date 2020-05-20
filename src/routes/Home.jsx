import React from 'react'
import { Link } from 'react-router-dom'
import { view } from 'react-easy-state'
import GlobalStore from '../app/store'

const UpdateUserWrapper = SetType => {
  const date = + new Date()
  SetType(date)
}

const Handler = () => {
  const { user } = GlobalStore
  return (
    <div>
      <h1>Homepage</h1>
      <h2>user.type: {user.type}</h2>
      <button onClick={() => UpdateUserWrapper(user.SetType)}>
        Update user type
      </button>
      <Link to="/about">
        <h1>Go to about</h1>
      </Link>
      <Link to={`/page/my-page-id-here`}>
        <h1>Go to some page</h1>
      </Link>
    </div>
  )
}

export default view(Handler)