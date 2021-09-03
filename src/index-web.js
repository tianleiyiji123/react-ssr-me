import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './pages/index'
import { loadableReady } from '@loadable/component'

loadableReady(() =>
  ReactDom.hydrate(
    <Router>
      <Switch>
        <App />
      </Switch>
    </Router>,
    document.getElementById('root')
  )
)
