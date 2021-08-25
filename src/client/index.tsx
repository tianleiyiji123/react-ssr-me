import react from 'react'
import ReactDom from 'react-dom'
import StyleContext from 'isomorphic-style-loader/StyleContext'
import Ssr from '../pages/index/index'

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss())
  return () => removeCss.forEach(dispose => dispose())
}

ReactDom.hydrate(<StyleContext.Provider value={{ insertCss }}>
  <Ssr />
</StyleContext.Provider>, document.getElementById('root'))