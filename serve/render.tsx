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
  // console.log(ctx.originalUrl)
  const routeMatch = ctx.originalUrl.split('/')[1]
  const entrypoints = `pages-${routeMatch}`
  const extractor = new ChunkExtractor({ statsFile, entrypoints: ['main', entrypoints] })
  
  const jsx = extractor.collectChunks(
    <StaticRouter location={ctx.originalUrl} context={context}>
      <App />
    </StaticRouter>
  )
  const scriptTags = extractor.getScriptTags()
  const styleTags = extractor.getStyleTags()
  // 获取当前页面所有css资源列表文件
  const cssFilesArr = [...Array.from(styleTags.matchAll(/href=\"\/css\/([\s\S]+?\.css)\"/g))].map(item => item ? item[1] : '')

  let styleStr = ''

  const styleFiles = fse.readdirSync(path.resolve(process.cwd(), './server-bundle/css'))

  styleFiles.forEach((cssfile, index) => {
    if (cssFilesArr.includes(cssfile)) {
      console.log(cssfile, 9000)
      const style = fse.readFileSync(path.resolve(process.cwd(), './server-bundle/css/' + cssfile))
      styleStr += `<style id='${cssfile}-${index}'>${style}</style>`
    }
  })

  console.log(scriptTags)
  const body = renderToString(jsx)
  // 获取模板
  const template = fse.readFileSync(
    path.join(process.cwd(), '/public/index.html'),
    'utf-8'
    )
  return template
    .replace(/(id=\"root\"\>)/, `$1${body}`)
    .replace(/(\<\/head\>)/, `${styleTags}$1`)
    .replace(/(\<\/head\>)/, `${scriptTags}$1`)
    // .replace(/(\<\/head\>)/, `${styleTags}$1`)
}

export default renderHtml
