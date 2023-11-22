const binarySearch = require('./10');

describe('function binarySearch', () => {
  it('N개의 수를 오름차순으로 정렬하여 M이 정렬된 상태에서 몇 번째인지 반환한다', () => {
    const list = [22, 38, 17, 29, 50, 41, 60, 77, 65];
    const M = 41;

    const result = binarySearch(list, M);

    expect(result).toBe(4);
  })

  it('N개의 수 중 중복되는 값이 존재하는 경우 예외를 발생시킨다.', () => {
    const list = [22, 38, 17, 29, 50, 41, 29];
    const M = 41;

    expect(() => {
      binarySearch(list, M);
    }).toThrowError('[ERROR] 중복된 값이 존재합니다.');
  })
})