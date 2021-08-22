import React from 'react'
import { renderToString } from 'react-dom/server'
import fse from 'fs-extra'
import path from 'path'
import Ssr from '../pages/ssr'

const renderHtml = ()  => {
  const template = fse.readFileSync(path.join(process.cwd(), '/public/index.html'), 'utf-8')
  const content = renderToString(
    <Ssr />
  )
  return template.replace('app-content', content)
}

export default renderHtml