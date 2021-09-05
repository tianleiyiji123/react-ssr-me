import React from 'react'
import { StaticRouter, Switch } from 'react-router-dom'
import App from './pages/index/index'

const WrapApp = (props: any) => {
  console.log(props.url, 899)
  return (
    <StaticRouter location={props.url} context={props.context}>
      <Switch>
        <App />
      </Switch>
    </StaticRouter>
  )
}

export default WrapApp
