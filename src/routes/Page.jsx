import React from 'react'
import { Link } from 'react-router-dom'
import { view as View } from 'react-easy-state'
import { Page, Header, Container } from '../core'

const Handler = ({_id}) => {
  return (
    <Page>
      <Header title={`Page ${_id}`} />
      <Container>
        <p>
          This have dynamic props
        </p>
        <Link to="/">
          <button>
            Go to home page
          </button>
        </Link>
      </Container>
    </Page>
  )
}

export default View(Handler)