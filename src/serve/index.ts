import Koa from 'koa'
import path from 'path'

import renderJsxHtml from './render.jsx'

const app = new Koa()

app.use(require('koa-static')(path.join(process.cwd(), './public')))

app.use(async ctx => {
  ctx.body = renderJsxHtml()
})

const server = app.listen(3000, (err) => {
  console.log('服务启动成功，端口3000...')
})
// console.log(server)

server.on('error', (err) => {
  console.log('服务错误:', err)
})

server.on('connection', () => {
  console.log('链接成功，端口为：3000')
})

server.on('close', () => {
  console.log('服务关闭...')
})