import { store as Store } from 'react-easy-state'

const store = Store({
  user: {
    type: "guest",
    SetType(type) {
      store.user.type = type
    }
  }
})

export default store