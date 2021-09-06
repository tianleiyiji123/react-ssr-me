import React from 'react'
import { StaticRouter, Switch } from 'react-router-dom'
import App from './pages/index/index'

// 为全局设置window
global = require('global')
global.window = require('global/window')
global.document = require('global/document')

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
