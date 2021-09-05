import React from 'react'
import { Card } from 'antd'
import styles from './index.less'

const Hello = () => {
  return (
    <div className={styles.hello}>
      我是一个hello组件
      <Card
        title="Default size card"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  )
}

export default Hello
