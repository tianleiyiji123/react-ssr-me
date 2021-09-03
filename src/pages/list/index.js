import React from 'react'
// import withStyles from 'isomorphic-style-loader/withStyles'
import { Button } from 'antd'
import { useHistory, Link } from 'react-router-dom'
import Hello from './components/Hello'
import styles from './index.less'

const List = () => {
  // const history = useHistory()
  // const [state, setState] = React.useState(1)
  // const increase = React.useCallback(() => {
  //   setState(t => t + 1)
  // }, [])
  // const jumpToDetail = (imgUrl: string) => {
  //   history.push(`/detail/${encodeURIComponent(imgUrl)}`)
  // }
  const img = `https://unsplash.it/50/50?a=${Date.now()}`
  console.log(img)
  return (
    <div className={styles.list}>
      {/* <ul>
        {Array.from(new Array(20), () => null).map((item, index) => {
          const img = `https://unsplash.it/50/50?a=${Date.now() + index}`
          return (
            <li key={item + '-' + index}>
              <Link to={`/detail/${encodeURIComponent(img)}`}>
                <img src={img} alt="图片" />
              </Link>
            </li>
          )
        })}
      </ul> */}
      <Button type="primary">我是一个按钮</Button>
      <h1 className={styles.list}>我是一个列表页</h1>
      <Link to={`/detail/${encodeURIComponent(img)}`}>
        <p className={styles.xxx}>点击跳转详情页</p>
      </Link>
      <Hello />
    </div>
  )
}

export default List
