import React from 'react'
import { renderRoutes } from 'react-router-config'
// import { Spin } from 'antd'
import { Switch, Route } from 'react-router-dom'
import routes from '@/routes'
// import '@/styles/common.css'
const App = () => {
  return (
    <Switch>
      { renderRoutes(routes) }
    </Switch>
  )
}

export default App
