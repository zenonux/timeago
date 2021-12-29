import timeago from '../src';

describe('format', () => {
  test('format', () => {
    const now = new Date();
    expect(timeago(+now - 5000)).toBe('刚刚');
    expect(timeago(+now - 1000 * 1000)).toBe('16分钟前');
    expect(timeago(+now - 10000 * 1000)).toBe('2小时前');
    expect(timeago(+now -  10 * 10000 * 1000)).toBe('昨天08:44')
  });
});