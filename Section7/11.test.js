const binarySearch = require('./11');

describe('function binarySearch', () => {
  it('M개의 DVD와 리스트가 주어지면 최소 용량의 크기를 반환한다', () => {
    const list = [5, 10, 15, 20, 25, 30, 40, 50, 60];
    const M = 4;

    const result = binarySearch(list, M);

    expect(result).toBe(75);
  })

  it('M개의 DVD와 리스트의 갯수가 동일한 경우 리스트에서 가장 큰 값을 반환한다', () => {
    const list = [3, 4, 5, 6, 7];
    const M = 5;

    const result = binarySearch(list, M);

    expect(result).toBe(7);
  })

  it('1개의 DVD가 주어진 경우 리스트에 있는 모든 값을 합하여 반환한다', () => {
    const list = [1, 2, 3, 4, 5];
    const M = 1;

    const result = binarySearch(list, M);

    expect(result).toBe(15);
  })
})