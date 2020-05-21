import React from 'react'
import { view as State } from 'react-easy-state'
import { Page, Navbar, Block, Button } from 'framework7-react'
import { user, theme } from '/stores'

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
      <Block>
        <Button fill color={theme.Black()} onClick={() => theme.ToggleTheme()}>
          { theme.status == "light" ? 'Go dark' : 'Go light' }
        </Button>
      </Block>
    </Page>
  )
}

export default State(Handler)