import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { throttle } from 'src/utils'
import Image from './components/Image'
import styles from './index.less'

type imgObjType = {
  dataSrc: string
  width: number
  height: number
  srcImg: string | undefined
}

const liWidth = window.innerWidth / 8 // 每个li的宽度

const originImgList: imgObjType[] = (function () {
  return Array.from(new Array(100), () => null).map((item, index) => {
    const random = Math.ceil(Math.random() * 10)
    const imgHeight = random <= 3 ? 40 : random <= 6 ? 70 : 100
    const genImg = `https://unsplash.it/50/${imgHeight}?a=${Date.now() + index}`

    const liHeight = (liWidth / 50) * imgHeight

    return {
      dataSrc: genImg,
      width: liWidth,
      height: liHeight,
      srcImg: genImg
    }
  })
})()

const List = () => {
  const [scrollY, setScrollY] = React.useState(0)
  const flexImgList = React.useMemo(() => {
    let imglist: imgObjType[][] = Array.from(new Array(8), () => [])
    let i = 0
    while (i < originImgList.length) {
      imglist[i % 8].push(originImgList[i])
      i++
    }
    return imglist
  }, [originImgList])

  const setVisibleImg = () => {
    const scrollY = window.scrollY
    setScrollY(scrollY)
  }

  React.useEffect(() => {
    const throttleTest = throttle(setVisibleImg, 100)
    const scrollFn = function(e: Event) {
      throttleTest()
    }
    window.addEventListener('scroll', scrollFn, false)
    return () => {
      window.removeEventListener('scroll', scrollFn)
    }
  }, [])
  console.log(scrollY)
  // TODO 未完成图片懒加载
  return (
    <div className={styles.list}>
      {flexImgList.map((outList: imgObjType[], index: number) => {
        return (
          <ul style={{ width: liWidth }} key={index + '~'}>
            {outList.map((item, jndex) => {
              return (
                <li className={styles.item} key={item + '-' + jndex}>
                  <Link to={`/detail/${encodeURIComponent(item.srcImg ?? '')}`}>
                    <Image dataSrc={item.dataSrc} srcImg={item.srcImg} scrollTop={scrollY} height={item.height} width={item.width} />
                  </Link>
                </li>
              )
            })}
          </ul>
        )
      })}
    </div>
  )
}

export default List
