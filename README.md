# common-js
常用js方法
## sleep 
- 等待ms后执行
1. `sleepAsync` 异步调用
2. `sleepSync` 同步调用
## date
- Date相关方法
1. `formatDate` 格式话Date
2. `parseTimeData` 把秒数解析成{天，小时，分，秒}

## dom
1. `prefixStyle` 动态拼接浏览器前缀
2. `fixedRollThrough` 解决弹出层滚动穿透

## deepClone
1. `deepClone`  对象深度克隆，包括基本类型，数组，对象，循环引用，不包括自定义类


## axios
- 对axios的二次封装
## getType
获取数据类型
## isType
判断数据类型是否为type
## isEmpty
检查值是否为空对象/集合，没有可枚举的属性或任何不视为集合的类型。
## debounce  throttle 防抖节流
1. `debounce`
2. `throttle`

## scroll
1. `scrollToTop` 平滑滚动到顶部
2. `getScrollPosition` 当前页面滚动的位置

## shuffle 洗牌、随机数
1. `getRandomInt` 取得[min,max]间的随机整体数

## bind实现
1. 简易版
2. 完整版

## toQueryString
从给定对象的键值对生成查询字符串。

## regExp
正则匹配式