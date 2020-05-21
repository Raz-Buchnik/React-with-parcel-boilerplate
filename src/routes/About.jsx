import React from 'react'
import { view as State } from 'react-easy-state'
import { Page, Navbar, Block, Button } from 'framework7-react'
import { user } from '/stores'

const Handler = () => {
  return (
    <Page>
      <Navbar title="About" />
      <Block>
        About page, user.type: { user.type }
      </Block>
      <Block>
        <Button fill color="green" href="/">
          Go to homepage
        </Button>
      </Block>
    </Page>
  )
}

export default State(Handler)