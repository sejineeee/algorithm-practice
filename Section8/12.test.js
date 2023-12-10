const getCombination = require('./12');

describe('function getCombination', () => {
  it('n과 r이 같은 값이 전달될 경우 1을 반환한다', () => {
    const result = getCombination(5, 5);

    expect(result).toBe(1);
  });

  it('n과 r이 전달될 경우 경우의 수를 반환한다', () => {
    const result = getCombination(10, 5);

    expect(result).toBe(252);
  });
});
