import React from 'react'
import { Link } from 'react-router-dom'
import { view } from 'react-easy-state'
import GlobalStore from '../app/store'

const Handler = ({
  _id
}) => {
  const { user } = GlobalStore
  return (
    <div>
      <h1>Page {_id}</h1>
      <Link to="/">
        <h1>
          Go to home page
        </h1>
      </Link>
      <p>
        Also from here, lets get the user type: &nbsp;
        { user.type }
      </p>
      <button onClick={() => user.SetType(_id)}>
        Update!
      </button>
    </div>
  )
}

export default view(Handler)