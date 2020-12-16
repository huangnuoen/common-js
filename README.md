# common-js
常用js方法
## [sleep](sleep.js) 
- 等待ms后执行
1. `sleepAsync` 异步调用
2. `sleepSync` 同步调用
## [date](date.js)
- Date相关方法
1. `formatDate` 格式话Date
2. `parseTimeData` 把秒数解析成{天，小时，分，秒}

## [dom](dom.js)
1. `prefixStyle` 动态拼接浏览器前缀
2. `fixedRollThrough` 解决弹出层滚动穿透

## [deepClone](deepClone.js)
1. `deepClone`  对象深度克隆，包括基本类型，数组，对象，循环引用，不包括自定义类


## [axios](axios.js)
- 对axios的二次封装
## [getType](getType.js)
获取数据类型
## [isType](isType.js)
判断数据类型是否为type
## [isEmpty](isEmpty.js)
检查值是否为空对象/集合，没有可枚举的属性或任何不视为集合的类型。
## debounce  防抖
1. [debounce](debounce.js)
## [throttle](throttle.js) 节流
1. `throttle`
2. `throttleV2`

## [scroll](scroll.js)
1. `scrollToTop` 平滑滚动到顶部
2. `getScrollPosition` 当前页面滚动的位置

## [isWechat](isWechat.js) 
判断是否微信环境

## [shuffle](shuffle.js) 洗牌、随机数
1. `getRandomInt` 取得[min,max]间的随机整体数

## [bind](bind.s) 实现
1. 简易版
2. 完整版

## [toQueryString](toQueryString.js)
从给定对象的键值对生成查询字符串。

## [regExp](regExp.js)
正则匹配式
1. `checkPhone`
2. `checkEmail`
3. `checkIdcard`