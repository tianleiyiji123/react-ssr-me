import React from 'react'
import { renderToString } from 'react-dom/server'
import StyleContext from 'isomorphic-style-loader/StyleContext'
import fse from 'fs-extra'
import path from 'path'
import Ssr from '../pages/index/index.jsx'

const renderHtml = ()  => {
  const css = new Set() // CSS for all rendered React components
  const insertCss = (...styles) => {
    styles.forEach(style => {
      console.log(Object.prototype.toString.call(style._getCss()),  123445)
      css.add(style._getCss())
    })
  }
  const body = renderToString(
    <StyleContext.Provider value={{ insertCss }}>
      <Ssr />
    </StyleContext.Provider>
  )
  // 获取模板
  const template = fse.readFileSync(path.join(process.cwd(), '/public/static/index.html'), 'utf-8')
  return template.replace('__app-content__', body).replace('__module-css__', [...css].join(''))
}

export default renderHtml