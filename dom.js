/* 动态拼接浏览器前缀 */
export function prefixStyle(style) {
  let elementStyle = document.createElement('div').style
  let vandor = (() => {
    let transformNames = {
      webkit: 'webkitTransform',
      Moz: 'MozTransform',
      O: 'OTransform',
      ms: 'msTransform',
      standard: 'transform'
    }
    for (const key in transformNames) {
      if (transformNames.hasOwnProperty(key)) {
        if (elementStyle[transformNames[key]] !== undefined) {
          return key
        }
      }
    }
    return false
  })()
  if (vandor === false) {
    return false
  }
  if (vandor === 'standard') {
    return style
  }
  return vandor + style.charAt(0).toUpperCase() + style.substring(1)
}
/* 解决弹出层滚动穿透
 * 引入该方法并调用，只需调用一次
 * 缓存返回值到变量a
 * 在弹出层需要禁止穿透时传a(true)
 * 恢复传a(false)
 */
export function fixedRollThrough() {
  let bodyEl = document.body
  let top = window.scrollY
  return function (forbidScroll) {
    // 禁止穿透
    if (forbidScroll) {
      top = window.scrollY
      bodyEl.style.position = 'fixed'
      bodyEl.style.top = -top + 'px'
      bodyEl.style.left = '0'
      bodyEl.style.right = '0'
    } else {
      bodyEl.style.position = ''
      bodyEl.style.top = ''
      bodyEl.style.left = ''
      bodyEl.style.right = ''
      window.scrollTo(0, top)
    }
  }
}