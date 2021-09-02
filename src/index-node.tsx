import React from 'react'
import { StaticRouter } from 'react-router-dom'
import loadable from '@loadable/component'
// import App from '@/pages/index'
const A = loadable(() => import('./A'))

// export { default } from '@/pages/index'

const Test = () => {
  return (
    <div><A />44444</div>
    // <div>2222</div>
  )
}

export default Test