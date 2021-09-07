// 防抖
export const debounce = (fn: () => void, delay: number) => {
  let timer = 0
  return function () {
    const arg: any = arguments
    const that = this
    if (timer) {
      window.clearTimeout(timer)
    }
    timer = window.setTimeout(() => {
      fn.apply(that, arg)
    }, delay)
  }
}

// 节流
export const throttle = (fn: () => void, delay: number) => {
  let isEnd = true
  return function () {
    const arg = arguments
    const that = this
    if (isEnd) {
      isEnd = false
      setTimeout(() => {
        isEnd = true
        fn.apply(that, arg)
      }, delay)
    }
  }
}