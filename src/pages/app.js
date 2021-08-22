import React from 'react'
import ReactDom from 'react-dom'

import SsrDom from './ssr'

const root = window.document.getElementById('root')

ReactDom.hydrate(<SsrDom />, root)