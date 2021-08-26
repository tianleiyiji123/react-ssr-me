import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { imgUrl } = useParams()
  return (
    <div>
      <img src={decodeURIComponent(imgUrl)} alt="图片" />
    </div>
  )
}
export default Detail
