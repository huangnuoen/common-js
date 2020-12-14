/* 检查值是否为空对象/集合，没有可枚举的属性或任何不视为集合的类型。 */
const isEmpty = val => val == null || !(Object.keys(val) || val).length
