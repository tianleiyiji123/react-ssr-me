import React from 'react'
import { useHistory, Link } from 'react-router-dom'
// import myWin from 'global/window'
import styles from './index.less'

type imgObjType = {
  dataSrc: string
  width: number
  height: number
  srcImg: string | undefined
}

const liWidth = window ? window.innerWidth / 8 : 0 // 每个li的宽度

const originImgList: imgObjType[] = function() {
  return Array.from(new Array(100), () => null).map((item, index) => {
    const random = Math.ceil(Math.random() * 10)
    const imgHeight = random <= 3 ? 40 : random <= 6 ? 70 : 100
    const genImg = `https://unsplash.it/50/${
      imgHeight
    }?a=${Date.now() + index}`

    const liHeight = liWidth / 50 * imgHeight

    return {
      dataSrc: genImg,
      width: liWidth,
      height: liHeight,
      srcImg: undefined
    }
  })
}()

const List = () => {

  const [imgList, setImgList] = React.useState<imgObjType[]>([])

  const setVisibleImg = React.useCallback((i = 1) => {
    let totalImgColumnHeight = 0
    const offsetHeight = document.documentElement.clientHeight
    const scrollTop = document.documentElement.getBoundingClientRect().top
    while (totalImgColumnHeight < (offsetHeight + scrollTop) && i > 0) {
      totalImgColumnHeight += +originImgList[i - 1].height
      originImgList[i - 1].srcImg = originImgList[i - 1].dataSrc
      i += 8
    }
  }, [originImgList])

  React.useEffect(() => {
    if (originImgList.length > 0) {
      let j = 1
      while (j < 9) {
        console.log(j)
        setVisibleImg(j)
        j++
      }
      setImgList([...originImgList])
    }
  }, [originImgList])
  
  // TODO 未完成图片懒加载
  return (
    <div className={styles.list}>
      <ul>
        {
          imgList.map((item, index) => {
            return (
            <li
              className={styles.item}
              key={item + '-' + index}
              style={{ gridRowEnd: `span ${Math.round(item.height / 10)}` }}
            >
              <Link to={`/detail/${encodeURIComponent(item.srcImg ?? '')}`}>
                {/* <LazyImage isUpdate={item.isUpdate} src={item.srcImg} dataSrc={item.dataSrc} /> */}
                <img src={item.srcImg} alt="" />
              </Link>
            </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default List
