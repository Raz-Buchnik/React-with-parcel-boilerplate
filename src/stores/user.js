import { store as Store } from 'react-easy-state'
import { global } from '/stores'

const token = window.localStorage.getItem("token")

const user = Store({
  inited: false,
  data: {},
  async Init() {
    await user.GetFreshData()
    user.inited = true
  },
  GetFreshData() {
    return new Promise(resolve => {
      setTimeout(() => {
        user.data = "Hello World"
        return resolve()
      })
    })
  }
})

export default user