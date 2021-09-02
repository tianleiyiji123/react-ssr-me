import React from 'react'
import { StaticRouter } from 'react-router-dom'
import loadable from '@loadable/component'
import App from '@/pages/index'
const A = loadable(() => import('./A'))

export default App
