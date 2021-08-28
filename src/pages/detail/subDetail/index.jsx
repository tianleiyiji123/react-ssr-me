import React from 'react'
import { useParams } from 'react-router-dom'
import { Button } from 'antd'
import styles from './index.less'

const SubDetail = () => {
  const { imgUrl } = useParams()
  return (
    <div className={styles.detail}>
      <h1>我是子详情</h1>
      <Button type="primary">点击去列表</Button>
      <img src={decodeURIComponent(imgUrl)} alt="图片" />
    </div>
  )
}
export default SubDetail
