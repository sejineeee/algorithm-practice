const getMultipleCombination = require('./15');

describe('function getMultipleCombination', () => {
  it('전달된 숫자 중 주어진 수대로 뽑아 합한 값이 전달된 배수에 맞는 조합을 반환한다', () => {
    const inputList = [3, 6, 9, 12, 15, 18, 20];
    const count = 2;
    const multipleNumber = 4;

    const result = getMultipleCombination(inputList, count, multipleNumber);

    expect(result).toStrictEqual([
      [3, 9],
      [6, 18],
      [9, 15],
      [12, 20],
    ]);
  });

  it('전달된 숫자 중 주어진 수대로 뽑아 합한 값이 전달된 배수에 맞는 조합이 없는 경우 빈 배열을 반환한다', () => {
    const inputList = [1, 2, 3, 4, 5];
    const count = 4;
    const multipleNumber = 8;

    const result = getMultipleCombination(inputList, count, multipleNumber);

    expect(result).toStrictEqual([]);
  });
});
