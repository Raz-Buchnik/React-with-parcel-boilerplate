import { store as Store } from 'react-easy-state'

const user = Store({
  type: "guest",
  SetType(type) {
    user.type = type
  }
})

export default user