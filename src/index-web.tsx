import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { Spin } from 'antd'
// import { Provider } from 'isomorphic-style-loader/StyleContext'
import App from '@/pages/index'
import { loadableReady } from '@loadable/component'

loadableReady(() =>
  ReactDom.hydrate(
    // <Provider value={{ insertCss }}>
    <Router>
      <App />
    </Router>,
    // </Provider>,
    document.getElementById('root')
  )
)
