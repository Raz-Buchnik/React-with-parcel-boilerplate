import React from 'react'
import { view as View } from 'react-easy-state'
import { Page, Navbar, Block, Button } from 'framework7-react'
import { user } from '/stores'

const Handler = ({_id}) => {
  return (
    <Page>
      <Navbar title={`Page with id: ${_id}`} />
      <Block>
        Page with props, user.type: { user.type }
      </Block>
      <Block>
        <Button fill color="blue" onClick={() => user.SetType(+ new Date())}>
          Update user type
        </Button>
      </Block>
      <Block>
        <Button fill color="red" href="/">
          Go to homepage
        </Button>
      </Block>
    </Page>
  )
}

export default View(Handler)