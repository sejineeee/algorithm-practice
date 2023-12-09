const factorial = require('./11');

describe('function factorial', () => {
  it('자연수 N을 입력하면 N!값을 출력한다', () => {
    const number = 10;
    const result = factorial(number);

    expect(result).toBe(3628800);
  });
});
