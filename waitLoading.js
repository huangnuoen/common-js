/* 当请求过程小于delay时，会继续loading,直到delay结束 */
export function waitLoading(http, delay = 1000) {
  const countdown = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, delay)
  })
  return Promise.all([http, countdown]).then(res => {
    return Promise.resolve(res[0])
  })
}
// waitLoading(this.$api.user(), 500).then(res=>{}).catch()
//  loading显示时间 >= 500ms
