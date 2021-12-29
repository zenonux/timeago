import { format } from '../src';

describe('format', () => {
  test('format', () => {
    const now = new Date();
    expect(format(+now - 5000,'zh_CN')).toBe('刚刚');

    expect(format(+now - 1000 * 1000, 'zh_CN')).toBe('16 分钟前');
    expect(format(+now - 1000 * 1000, 'zh_CN', { relativeDate: now })).toBe('16 分钟前');

  });
});