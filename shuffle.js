// 取得[min,max]间的随机整体数
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
// 洗牌
const shuffle = ([...arr]) => {
  let m = arr.length
  while (m) {
    const i = Math.floor(Math.random() * m--)
    ;[arr[m], arr[i]] = [arr[i], arr[m]]
  }
  return arr
}
