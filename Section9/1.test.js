const getAmountOfCourse = require('./1');

describe('function getAmountOfCourse', () => {
  let logSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(global.console, 'log');
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it('정점의 수와 간선의 수가 주어지면 N번 정점으로 가는 총 가지수를 반환한다', () => {
    const inputList = [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 1],
      [1, 4],
      [3, 6],
    ];

    const result = getAmountOfCourse(6, inputList);

    expect(result).toBe(3);
    expect(logSpy).toHaveBeenCalledWith([
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 6],
      [1, 4, 5, 6],
    ]);
  });

  it('정점의 수와 간선의 수가 주어져 N번 정점으로 가는 경로가 없는 경우 0을 반환한다', () => {
    const inputList = [
      [1, 2],
      [2, 3],
      [3, 1],
      [4, 3],
    ];

    const result = getAmountOfCourse(4, inputList);

    expect(result).toBe(0);
    expect(logSpy).toHaveBeenCalledWith([]);
  });
});
