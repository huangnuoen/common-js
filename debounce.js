export function debounce(func, delay = 500) {
  if (!func) return
  let timer
  return function(...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
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
