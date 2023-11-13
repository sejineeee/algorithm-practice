const insertionSort = require('./4');

describe('function insertionSort', () => {
  it('N개의 숫자가 전달되면 오름차순으로 정렬하여 반환한다', () => {
    const list = [7, 1, 6, 4, 3, 9, 15, 13];
    const result = insertionSort(list);

    expect(result).toStrictEqual([1, 3, 4, 6, 7, 9, 13, 15]);

  })
})