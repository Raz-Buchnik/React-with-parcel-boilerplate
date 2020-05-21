import React, { useEffect } from 'react'
import { view as State } from 'react-easy-state'
import { Page, Navbar, Block, Button, List, ListItem } from 'framework7-react'
import { user, theme, language, global } from '/stores'

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
        { language.t['Test'] }
      </Block>
      <Block>
        <List>
          {
            theme.current == "theme-light" && (
              <ListItem onClick={() => theme.SetDark()} link>
                Go dark
              </ListItem>
            )
          }
          {
            theme.current == "theme-dark" && (
              <ListItem onClick={() => theme.SetLight()} link>
                Go light
              </ListItem>
            )
          }
          <ListItem onClick={() => theme.SetAuto()} link>
            Auto detect
          </ListItem>
        </List>
      </Block>
      <Block>
        <List>
          <ListItem onClick={() => language.SetCurrent('he-IL')} link>
            Set Hebrew
          </ListItem>
          <ListItem onClick={() => language.SetCurrent('en-US')} link>
            Set English
          </ListItem>
        </List>
      </Block>
    </Page>
  )
}

export default State(Handler)