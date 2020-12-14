/* 判断数据类型是否为type */
const isType = (type, val) => {
  // val不为null or undefined 时，通过constructor来判断
  return ![, null].includes(val) && val.constructor === type
}
