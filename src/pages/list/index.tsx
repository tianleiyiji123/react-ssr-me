import React from 'react'
// import withStyles from 'isomorphic-style-loader/withStyles'
// import { Button } from 'antd'
import { useHistory, Link } from 'react-router-dom'
// import Hello from './components/Hello'
import styles from './index.less'

const List = () => {
  const liWidth = window.innerWidth / 8
  // TODO 未完成图片懒加载
  return (
    <div className={styles.list}>
      <ul>
        {Array.from(new Array(100), () => null).map((item, index) => {
          const random = Math.ceil(Math.random() * 10)
          const imgHeight = random <= 3 ? 40 : random <= 6 ? 70 : 100
          const img = `https://unsplash.it/50/${
            imgHeight
          }?a=${Date.now() + index}`
          const liHeight = liWidth / 50 * imgHeight
          return (
            <li
              className={styles.item}
              key={item + '-' + index}
              style={{ gridRowEnd: `span ${Math.round(liHeight / 10)}` }}
            >
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

export default List
