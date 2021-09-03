import React from 'react'
import { StaticRouter, Switch } from 'react-router-dom'
import loadable from '@loadable/component'
import App from './pages/index'

const WrapApp = props => {
  return (
    <StaticRouter location={props.url} context={props.context}>
      <Switch>
        <App />
      </Switch>
    </StaticRouter>
  )
}

export default WrapApp
