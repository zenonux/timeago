import { formatDate, formatTime, isYesterday, toDate } from "./utils"

export default function format(time: string | number | Date) {
  let date = toDate(time)
  let second = (new Date().getTime() - date.getTime()) / 1000,
    minute = second / 60,
    hour = minute / 60,
    day = hour / 24,
    result = ''

  if (isYesterday(date)) {
    return '昨天' + formatTime(date)
  } else if (day >= 1) {
    result = formatDate(date)
  } else if (hour >= 1) {
    result = Math.floor(hour) + '小时前'
  } else if (minute >= 1) {
    result = Math.floor(minute) + '分钟前'
  } else if (second >= 9) {
    result = Math.floor(second) + '秒前'
  } else {
    result = '刚刚'
  }
  return result
}

