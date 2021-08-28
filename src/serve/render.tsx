import React from 'react'
import { ChunkExtractor } from '@loadable/server'
import { renderToString } from 'react-dom/server'
// import StyleContext from 'isomorphic-style-loader/StyleContext'
import fse from 'fs-extra'
import path from 'path'

import App from '@/pages/index'
import { StaticRouter } from 'react-router-dom'

const renderHtml = (ctx: any) => {
  // const css: any = new Set() // CSS for all rendered React components
  const context = {}
  const statsFile = path.join(
    process.cwd(),
    './server-bundle/loadable-stats.json'
  )
  console.log(ctx.originalUrl)
  const routeMatch = ctx.originalUrl.split('/')[1]
  const entrypoints = `pages-${routeMatch}`
  console.log(entrypoints)
  const extractor = new ChunkExtractor({ statsFile, entrypoints: [entrypoints] })
  
  // const insertCss = (...styles: any[]) => {
  //   styles.forEach(style => {
  //     css.add(style._getCss())
  //   })
  // }
  const jsx = extractor.collectChunks(
    // <StyleContext.Provider value={{ insertCss }}>
      <StaticRouter location={ctx.originalUrl} context={context}>
        <App />
      </StaticRouter>
    // </StyleContext.Provider>
  )
  // const scriptTags = extractor.getScriptTags()
  const styleTags = extractor.getStyleTags()

  console.log(styleTags, 111)

  const body = renderToString(jsx)
  // 获取模板
  const template = fse.readFileSync(
    path.join(process.cwd(), '/client-bundle/static/index.html'),
    'utf-8'
    )
  return template
    .replace(/(id=\"root\"\>)/, `$1${body}`)
    .replace(/(\<\/head\>)/, `${styleTags}$1`)
    // .replace(/(\<\/head\>)/, `${styleTags}$1`)
}

export default renderHtml
