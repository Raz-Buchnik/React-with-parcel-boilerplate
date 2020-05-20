import React from 'react'

const routes = [
  {
    path: "/about",
    MyComponent: React.lazy(() => import('/routes/About'))
  },
  {
    path: "/page/:_id",
    MyComponent: React.lazy(() => import('/routes/Page'))
  },
  {
    path: "/",
    MyComponent: React.lazy(() => import('/routes/Home'))
  }
]

export default routes