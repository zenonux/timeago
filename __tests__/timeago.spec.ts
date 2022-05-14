import { format } from '../src'

describe('format', () => {
  test('format', () => {
    const now = new Date().getTime()
    expect(format(now - 5 * 1000)).toBe('刚刚')
    expect(format(now - 16 * 60 * 1000)).toBe('16分钟前')
    expect(format(now - 10000 * 1000)).toBe('2小时前')
    expect(format("2022-05-14T14:52:54+08:00")).toBe('2小时前')
  })
})
