import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { Button } from 'antd'
import styles from './index.less'

const List = () => {
  const [state, setState] = React.useState(1)
  const increase = React.useCallback(() => {
    setState(t => t + 1)
  }, [])
  return (
    <div className={styles.list}>
      <ul>
        {
          Array.from(new Array(20), () => null).map((item, index) => (
            <li key={item + '-' + index}>
              <img src={`https://unsplash.it/1600/900?a=${Date.now() + index}`} alt="图片" />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default withStyles(styles)(List)