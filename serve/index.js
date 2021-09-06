const Koa = require('koa')
import path from 'path'

import { renderToString } from 'react-dom/server'
import { ChunkExtractor } from '@loadable/server'

// var global = require("global")
// var document = require("global/document")
// var window = require("global/window")

// import renderJsxHtml from './render'

const app = new Koa()

app.use(
  require('koa-static')(path.join(process.cwd(), './client-bundle'), {
    maxage: 60,
    gzip: true,
    // preload: false
  })
)
app.use(
  require('koa-static')(path.join(process.cwd(), './server-bundle'), {
    maxage: 60,
    gzip: true,
    // preload: false
  })
)

// TODO webpack开发环境配置no done
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
  console.log('开始编译webpack')
  const compiler = webpack([clientConfig, serveConfig], function(err, stats) {
    if (err || stats.hasErrors()) {
      console.log(err)
      return
    }
    console.log(stats.toString({
      chunks: false,  // 使构建过程更静默无输出
      colors: true    // 在控制台展示颜色
    }))
    bootstrap()
  })
  // compiler.run(function (err, stats) {
  //   if (err || stats.hasErrors()) {
  //     console.log(err)
  //     return
  //   }
  //   console.log(res)
    
  // })
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

// 启动
function bootstrap() {
  // node 端map
  const nodeStats = path.join(
    process.cwd(),
    './server-bundle/loadable-stats.json'
  )

  // web端 map
  const webStats = path.resolve(
    process.cwd(),
    './client-bundle/loadable-stats.json'
  )
  
  app.use(ctx => {
    // 
    const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats })

    const {default: App} = nodeExtractor.requireEntrypoint()

    const webExtractor = new ChunkExtractor({ statsFile: webStats })

    const jsx = webExtractor.collectChunks(
      <App url={ctx.originalUrl} context={{}} />
    )
    const html = renderToString(jsx)
    
    // ctx.set('content-type', 'text/html')
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
