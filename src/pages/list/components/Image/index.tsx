import React from 'react'

type imgObjType = {
  dataSrc: string
  width: number
  height: number
  srcImg: string | undefined
  isUpdate: boolean
}

const Image: React.FC<imgObjType> = (props) => {
  const [srcImg, setSrcImg] = React.useState<string | undefined>()
  React.useEffect(() => {
    if (props.isUpdate) {
      setSrcImg(props.dataSrc)
    }
  }, [props.isUpdate])
  return (
    <img data-src={props.dataSrc} src={srcImg} alt="图片" />
  )
}