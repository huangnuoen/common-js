/* 深度克隆
 * 对象深度克隆，包括基本类型，数组，对象，循环引用，不包括自定义类
 */
function deepClone(object) {
  let map = new Map()
  function clone(object) {
    // 用map缓存是否遍历过
    if (map.has(object)) {
      return map.get(object)
    }
    if (object === null) {
      return null
    }
    let res = Object.create(null)
    map.set(object, res)
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        res[key] =
          typeof object[key] == 'object' ? clone(object[key]) : object[key]
      }
    }
    if (Array.isArray(object)) {
      res.length = object.length
      return Array.from(res)
    }
    return res
  }
  return clone(object)
}
