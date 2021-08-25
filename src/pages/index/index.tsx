import React from 'react'
import { Spin } from 'antd'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import routes from '@/routes'
const App = () => {
  return (
    <Router>
      <React.Suspense fallback={<Spin size="large" />}>
        <Switch>
          {
            routes.map((route, index) => <Route key={`${route.path}-${index}`}
            exact={true} path={route.path} component={React.lazy(route.component)} />)
          }
        </Switch>
      </React.Suspense>
    </Router>
  )
}

export default App