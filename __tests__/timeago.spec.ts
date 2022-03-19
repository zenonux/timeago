import timeago from '../src';

describe('format', () => {
  test('format', () => {
    const now = new Date().getTime();
    expect(timeago(now - 5 * 1000)).toBe('刚刚');
    expect(timeago(now -  16 * 60 * 1000)).toBe('16分钟前');
    expect(timeago(now - 10000 * 1000)).toBe('2小时前');
  });
});