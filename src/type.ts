export type FormatTypeBreak = {
  label: string
  parse: (diffSeconds: number, date: Date, locale: string) => string
}
