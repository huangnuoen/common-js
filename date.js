/* 按格式输出日期
 * formatDate("yyyy年MM月dd日 hh:mm", new Date())
 */
export function formatDate(fmt, date) {
  var o = {
    'y+': date.getFullYear(),
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }
  // 年份格式
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      // fmt = fmt.replace(RegExp.$1, o[k])
      // 根据要求补0
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return fmt
}

const SECOND = 1
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR
/**
 *
 * @param {时间} time 传入剩余秒数时间
 * @returns {解析好的时间对象} {天，小时，分，秒}
 */
export function parseTimeData(time) {
  let days = Math.floor(time / DAY)
  let hours = Math.floor((time % DAY) / HOUR)
  let mins = Math.floor((time % HOUR) / MINUTE)
  let seconds = time % MINUTE
  return {
    days,
    hours,
    mins,
    seconds
  }
}