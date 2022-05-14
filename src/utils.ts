export const isYesterday = (date: Date) => {
  let yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return (
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()
  )
}

export const isToday = (date: Date) => {
  return new Date().getTime() - date.getTime() < 86400000
}

export const isThisYear = (date: Date) => {
  return date.getFullYear() === new Date().getFullYear()
}

export const toDate = (input?: Date | string | number): Date => {
  if (input instanceof Date) return input
  // @ts-ignore
  if (!isNaN(input) || /^\d+$/.test(input)) return new Date(parseInt(input))
  input = (input || '')
    // @ts-ignore
    .trim()
    .replace(/\.\d+/, '') // remove milliseconds
    .replace(/-/, '/')
    .replace(/-/, '/')
    .replace(/(\d)T(\d)/, '$1 $2')
    .replace(/Z/, ' UTC') // 2017-2-5T3:57:52Z -> 2017-2-5 3:57:52UTC
    .replace(/([+-]\d\d):?(\d\d)/, ' $1$2') // -04:00 -> -0400
  return new Date(input)
}

const formatNumber = (n: any) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}
export const formatDate = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [year, month, day].map(formatNumber).join('-')
}
export const formatDateShort = (date: Date) => {
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [ month, day].map(formatNumber).join('-')
}
export const formatTime = (date: Date) => {
  const hour = date.getHours()
  const minute = date.getMinutes()
  return [hour, minute].map(formatNumber).join(':')
}
export const formatDateTime=(date:Date)=>{
  return formatDate(date) + ' '+formatTime(date)
}
export const formatDateShortTime=(date:Date)=>{
  return formatDateShort(date) + ' '+formatTime(date)
}
