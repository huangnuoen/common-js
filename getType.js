/* 获取数据类型 */
function getType(data) {
  let type
  if (data === undefined) {
    type = 'undefined'
  } else if (data === null) {
    type = 'null'
  } else {
    type = data.constructor.name
    // Object.prototype.toString.call(data)
  }
  return type
}