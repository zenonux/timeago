import timeago from '../src';

describe('format', () => {
  test('format', () => {
    const now = new Date();
    expect(timeago(+now - 5000)).toBe('刚刚');
    expect(timeago(+now - 1000 * 1000)).toBe('16 分钟前');
  });
});