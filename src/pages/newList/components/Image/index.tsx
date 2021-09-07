import React from 'react'

type imgObjType = {
  dataSrc: string
  width: number
  height: number
  srcImg: string | undefined
  scrollTop: number
}

const Image: React.FC<imgObjType> = (props) => {
  const defaultImg = 'https://hzwimspic-1251601690.image.myqcloud.com/bbb40360-5a12-11eb-b48d-39db5b96993b_size_160x160'
  const imgRef = React.useRef<any>(null)
  const [srcImg, setSrcImg] = React.useState<string | undefined>(defaultImg)
  React.useEffect(() => {
    if (imgRef?.current?.getAttribute('src') === defaultImg) {
      if ((props.scrollTop + window.document.documentElement.clientHeight) >= Math.abs(imgRef?.current?.getBoundingClientRect().top)) {
        setSrcImg(props.dataSrc)
      } 
    }
  }, [props.scrollTop, props.dataSrc])
  return (
    <img style={{ height: props.height, width: props.width }} ref={imgRef} data-src={props.dataSrc} src={srcImg} alt="图片" />
  )
}
export default Image