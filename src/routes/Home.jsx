import React from 'react'
import { view as State } from 'react-easy-state'
import { Page, Navbar, Block, Button, List, ListItem } from 'framework7-react'
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
        <List>
          {
            theme.current == "theme-light" && (
              <ListItem onClick={() => theme.SetDark()}>
                Go dark
              </ListItem>
            )
          }
          {
            theme.current == "theme-dark" && (
              <ListItem onClick={() => theme.SetLight()}>
                Go light
              </ListItem>
            )
          }
          <ListItem onClick={() => theme.SetAuto()}>
            Auto detect
          </ListItem>
        </List>
      </Block>
    </Page>
  )
}

export default State(Handler)