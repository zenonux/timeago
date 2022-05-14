import { formatDate, formatDateShort, formatTime } from "../utils"

export const worksDetailType = [
  {
    label: 'IN_YEAR',
    parse: (diffSeconds: number, date: Date, locale: string) => {
      const locales = {
        zh_CN: '%s',
        en_US: '%s',
      }
      return locales[locale].replace(/%s/gi, formatDateShort(date))
    },
  },
  {
    label: 'IN_YEARS',
    parse: (diffSeconds: number, date: Date, locale: string) => {
      const locales = {
        zh_CN: '%s',
        en_US: '%s',
      }
      return locales[locale].replace(/%s/gi, formatDate(date))
    },
  },
]
