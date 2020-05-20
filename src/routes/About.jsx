import React from 'react'
import { Link } from 'react-router-dom'
import { view as View } from 'react-easy-state'
import { Page, Header, Container } from '../core'

const Handler = () => {
  return (
    <Page>
      <Header title="About" />
      <Container>
        <p>
          This is the About
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