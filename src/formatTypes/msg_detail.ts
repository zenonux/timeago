import { formatDate, formatDateShort, formatDateShortTime, formatDateTime, formatTime } from '../utils'

export const msgDetailType = [
  {
    label: 'IN_5_MIN',
    parse: (diffSeconds: number, date: Date, locale: string) => {
      const locales = {
        zh_CN: '刚刚',
        en_US: 'now',
      }
      return locales[locale]
    },
  },
  {
    label: 'IN_TODAY',
    parse: (diffSeconds: number, date: Date, locale: string) => {
      return formatTime(date)
    },
  },
  {
    label: 'IN_YESTERDAY',
    parse: (diffSeconds: number, date: Date, locale: string) => {
      const locales = {
        zh_CN: '昨天 %s',
        en_US: 'yday %s',
      }
      return locales[locale].replace(/%s/gi, formatTime(date))
    },
  },
  {
    label: 'IN_YEAR',
    parse: (diffSeconds: number, date: Date, locale: string) => {
      return formatDateShortTime(date)
    },
  },
  {
    label: 'IN_YEARS',
    parse: (diffSeconds: number, date: Date, locale: string) => {
      return formatDateTime(date)
    },
  },
]
