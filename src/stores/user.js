import { store as Store } from 'react-easy-state'
import { global } from '/stores'

const token = window.localStorage.getItem("token")

const user = Store({
  FetchData() {
    setTimeout(() => user.data = "HelloWorld", 1000)
  }
})

export default user