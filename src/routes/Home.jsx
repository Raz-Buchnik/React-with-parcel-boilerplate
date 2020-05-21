import React from 'react'
import { view as View } from 'react-easy-state'
import { Page, Navbar, Block, Button } from 'framework7-react'
import { user } from '/stores'

const Handler = () => {
  return (
    <Page>
      <Navbar title="Homepage" />
      <Block>
        Home page, user.type: { user.type }
      </Block>
      <Block>
        <Button fill href="/about">
          Go to about
        </Button>
      </Block>
      <Block>
        <Button fill href="/page/some-id-here">
          Go to page
        </Button>
      </Block>
    </Page>
  )
}

export default View(Handler)