import { lazy } from 'react'

const routes = [
  {
    path: "/about",
    MyComponent: lazy(() => import('/routes/About'))
  },
  {
    path: "/page/:_id",
    MyComponent: lazy(() => import('/routes/Page'))
  },
  {
    path: "/",
    MyComponent: lazy(() => import('/routes/Home'))
  }
]

export default routes