import { store as Store } from 'react-easy-state'
import { global } from '/stores'

const token = window.localStorage.getItem("token")

const user = Store({
  inited: false,
  data: {},
  async Init() {
    try {
      await user.GetFreshData()
      // move to home page
    } catch (error) {
      // move to login page
    }
    user.inited = true
  },
  GetFreshData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // if user, resolve
        user.data = "Hello World"
        return resolve()
        // else, reject
      })
    })
  }
})

export default user