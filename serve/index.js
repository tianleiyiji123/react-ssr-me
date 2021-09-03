const Koa = require('koa')
import path from 'path'
import React from 'react'

import { renderToString } from 'react-dom/server'
import { ChunkExtractor } from '@loadable/server'

// import renderJsxHtml from './render'

const app = new Koa()

app.use(
  require('koa-static-cache')(path.join(process.cwd(), './client-bundle'), {
    maxAge: 60,
    gzip: true
  })
)
app.use(
  require('koa-static-cache')(path.join(process.cwd(), './server-bundle'), {
    maxAge: 60,
    gzip: true
  })
)

if (process.env.NODE_ENV === 'production') {
  const clientConfig = require(path.join(
    process.cwd(),
    './config/webpack.client.config.js'
  ))
  const serveConfig = require(path.join(
    process.cwd(),
    './config/webpack.serve.config.js'
  ))
  const webpack = require('webpack')
  const compiler = webpack([clientConfig, serveConfig])
  console.log('开始编译webpack')
  compiler.run(function (err, res) {
    if (err) {
      throw new Error(err)
      return
    }
    console.log(res)
    bootstrap()
  })
  // const koaWebpack = require('koa-webpack')
  // koaWebpack({
  //   compiler,
  //   devMiddleware: {
  //     // logLevel: 'silent',
  //     publicPath: '/client-bundle',
  //     writeToDisk(filePath) {
  //       // return /server-bundle\/node\//.test(filePath) || /loadable-stats/.test(filePath)
  //       return true
  //     }
  //   },
  //   hotClient: false
  // }).then((webpackMiddle) => {
  //   app.use(webpackMiddle)
  //   bootstrap()
  // })
}

function bootstrap() {
  const nodeStats = path.join(
    process.cwd(),
    './server-bundle/loadable-stats.json'
  )

  const webStats = path.resolve(
    process.cwd(),
    './client-bundle/loadable-stats.json'
  )

  app.use(ctx => {
    console.log(ctx.originalUrl)
    // if (ctx.originalUrl.match(/(list|detail|subDetail)/)) {
    //   ctx.body = renderJsxHtml(ctx)
    // }
    const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats })

    const {default: App} = nodeExtractor.requireEntrypoint()

    const webExtractor = new ChunkExtractor({ statsFile: webStats })

    const jsx = nodeExtractor.collectChunks(
      <App url={ctx.originalUrl} context={{}} />
    )
    const html = renderToString(jsx)
    console.log(jsx, 333)
    console.log(html, 333)

    // ctx.set('content-type', 'text/html')
    ctx.body = `
        <!DOCTYPE html>
        <html>
          <head>        
          ${webExtractor.getLinkTags()}
          ${webExtractor.getStyleTags()}
          </head>
          <body>
            <div id="root">${html}</div>
            <script>console.log('html is loaded')</script>          
            ${webExtractor.getScriptTags()}
            <script>console.log('html is ready')</script>
          </body>
        </html>
      `
  })

  const server = app.listen(3000, () => {
    console.log('服务启动成功，端口3000...')
  })
  // console.log(server)

  server.on('error', err => {
    console.log('服务错误:', err)
  })

  server.on('connection', () => {
    console.log('链接成功，端口为：3000')
  })

  server.on('close', () => {
    console.log('服务关闭...')
  })
}
