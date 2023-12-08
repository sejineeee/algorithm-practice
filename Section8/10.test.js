const getPermutation = require('./10');

describe('function getPermutation', () => {
  let logSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(global.console, 'log');
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it('자연수 N 중 M개를 뽑아 일렬로 나열하는 방법을 출력하고 개수를 반환한다', () => {
    const list = [1, 2, 4];
    const count = 3;

    const result = getPermutation(list, count);

    expect(logSpy).toHaveBeenCalledWith([
      [1, 2, 4],
      [1, 4, 2],
      [2, 1, 4],
      [2, 4, 1],
      [4, 1, 2],
      [4, 2, 1],
    ]);
    expect(result).toBe(6);
  });
});
