const getDuplicationPermutation = require('./8');

describe('function getDuplicationPermutation', () => {
  let logSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(global.console, 'log');
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it('1부터 N까지 번호 중 M번을 뽑아 나열할 수 있는 경우의 수를 출력한다', () => {
    const N = 5;
    const M = 3;
    const result = getDuplicationPermutation(N, M);

    expect(logSpy).toHaveBeenCalledWith(125);
  });
});