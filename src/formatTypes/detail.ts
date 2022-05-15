import { formatDate, formatDateShort } from "../utils"

export default  [
  {
    label: 'IN_1_YEAR',
    parse: (diffSeconds: number, date: Date, locale: string) => {
      return formatDateShort(date)
    },
  },
  {
    label: 'IN_YEARS',
    parse: (diffSeconds: number, date: Date, locale: string) => {
      return formatDate(date)
    },
  },
]
