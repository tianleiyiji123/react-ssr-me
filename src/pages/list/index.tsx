import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { Button } from 'antd'
import { useHistory, Link } from 'react-router-dom'
import styles from './index.less'

const List = () => {
  const history = useHistory()
  const [state, setState] = React.useState(1)
  const increase = React.useCallback(() => {
    setState(t => t + 1)
  }, [])
  // const jumpToDetail = (imgUrl: string) => {
  //   history.push(`/detail/${encodeURIComponent(imgUrl)}`)
  // }
  return (
    <div className={styles.list}>
      <ul>
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
      </ul>
    </div>
  )
}

export default withStyles(styles)(List)
