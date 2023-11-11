const specialSort = require('./3');

describe('function specialSort', () => {
  it('N개의 정수가 입력되면 정수의 순서에는 변함없이 음의 정수는 앞쪽에 양의 정수는 뒤쪽에 정렬되어 반환된다.', () => {
    const list = [1, 2, 5, -3, -1, 4, 3, -2];

    const result = specialSort(list);

    expect(result).toStrictEqual([-3, -1, -2, 1, 2, 5, 4, 3]);
  });

  it('숫자 0이 입력되면 예외를 발생시킨다.', () => {
    const list = [1, 2, 0, -3, -1, 4, 3, -2];

    expect(() => {
      specialSort(list);
    }).toThrowError('숫자 0을 제외하고 입력해주세요.');
  });
});
