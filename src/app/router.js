import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Routes from '/app/routes'

const WithSuspense = Component => {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props.match.params} />
    </Suspense>
  )
}

const RoutesRender = () => {
  return Routes.map(({
    path,
    MyComponent
  }, index) => {
    return (
      <Route 
        key={index}
        path={path}
        component={WithSuspense(MyComponent)}
      />
    )
  })
}

export default () => {
  return (
    <Router>
      <Switch>
        { RoutesRender() }
      </Switch>
    </Router>
  )
}