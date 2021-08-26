import React from 'react'
import { ChunkExtractor } from '@loadable/server'
import { renderToString } from 'react-dom/server'
import StyleContext from 'isomorphic-style-loader/StyleContext'
import fse from 'fs-extra'
import path from 'path'

import App from '@/pages/index'
import { StaticRouter } from 'react-router-dom'

const renderHtml = (ctx: any) => {
  const css: any = new Set() // CSS for all rendered React components
  const context = {}
  const statsFile = path.join(
    process.cwd(),
    './server-bundle/loadable-stats.json'
  )
  const extractor = new ChunkExtractor({ statsFile })
  const insertCss = (...styles: any[]) => {
    styles.forEach(style => {
      css.add(style._getCss())
    })
  }
  const jsx = extractor.collectChunks(
    <StyleContext.Provider value={{ insertCss }}>
      <StaticRouter location={ctx.originalUrl} context={context}>
        <App />
      </StaticRouter>
    </StyleContext.Provider>
  )
  const scriptTags = extractor.getScriptTags()

  const body = renderToString(jsx)
  console.log(body, 900000)
  // 获取模板
  const template = fse.readFileSync(
    path.join(process.cwd(), '/public/static/index.html'),
    'utf-8'
  )
  return template
    .replace('__app-content__', body)
    .replace('__module-css__', [...css].join(''))
}

export default renderHtml
