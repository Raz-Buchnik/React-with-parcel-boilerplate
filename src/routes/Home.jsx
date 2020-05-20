import React from 'react'
import { Link } from 'react-router-dom'
import { view as View } from 'react-easy-state'
import { Page, Header, Container } from '../core'
import { user } from '../stores'

const Handler = () => {
  console.log(user.type)
  return (
    <Page>
      <Header title="Homepage" />
      <Container>
        <p>
          This is the homepage
        </p>
        <Link to="/about">
          <button>
            Go to about
          </button>
        </Link>
        <Link to="/page/some-id-here">
          <button>
            Go to page
          </button>
        </Link>
      </Container>
    </Page>
  )
}

export default View(Handler)