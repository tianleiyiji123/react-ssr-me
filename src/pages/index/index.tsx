import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Spin } from 'antd'
import { Switch, Route } from 'react-router-dom'
import routes from '@/routes'
const App = () => {
  return (
    // <React.Suspense fallback={<Spin size="large" />}>
      <Switch>
        {/* {routes.map((route, index) => (
          <Route
            key={`${route.path}-${index}`}
            exact={true}
            path={route.path}
            component={React.lazy(route.component)}
          />
        ))} */}
        { renderRoutes(routes) }
      </Switch>
    // </React.Suspense>
  )
}

export default App
