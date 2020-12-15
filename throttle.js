// 节流
export function throttle(fn, delay = 500) {
  let running
  return (...args) => {
    if (running) return
    running = true
    setTimeout(() => {
      running = false
      fn.apply(this, args)
    }, delay)
  }
}
// 升级版节流
export function throttleV2(
  fn,
  delay = 500,
  { leading = false, trailing = false }
) {
  let running
  let lastArgs
  return (...args) => {
    if (running) {
      // 当节流函数正在运行时，保存最新的传入的参数，但不执行fn
      lastArgs = [].slice.call(args)
      return
    } else {
      lastArgs = ''
    }
    running = true
    leading && fn.apply(this, args)
    setTimeout(() => {
      // args不是最新的args，是delay秒前的参数
      !leading && fn.apply(this, args)
      // 尾部调用，传入最新的参数
      trailing && lastArgs && fn.apply(this, lastArgs)
      running = false
    }, delay)
  }
}
