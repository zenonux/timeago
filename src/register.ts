import { FormatTypeBreak } from "./type"

const AllFormatTypes = {}
export const register = (type: string, breaks: FormatTypeBreak[]) => {
  AllFormatTypes[type] = breaks
}
export const getFormatType = (type: string) => {
  return AllFormatTypes[type]
}
