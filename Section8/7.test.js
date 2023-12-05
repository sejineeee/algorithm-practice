const getMaxScore = require('./7');

describe('function getMaxScore', () => {
  let logSpy;
  
  beforeEach(() => {
    logSpy = jest.spyOn(global.console, 'log');
  });

  afterEach(() => {
    logSpy.mockRestore();
  })

  it('제한시간 안에 N개의 문제를 풀었을 때 얻을 수 있는 최대점수를 반환한다', () => {
    const scoreList = [15, 20, 8, 10, 25, 12, 5, 3];
    const requiredTimeList = [8, 10, 5, 5, 14, 6, 3, 2];

    const result = getMaxScore(30, scoreList, requiredTimeList);

    expect(logSpy).toHaveBeenCalledWith([15, 20, 10, 12]);
    expect(result).toBe(57);
  });

  it('제한시간 안에 1개의 문제를 풀지 못했을 때 얻을 수 있는 점수 0점을 반환한다', () => {
    const scoreList = [20];
    const requiredTimeList = [15];

    const result = getMaxScore(10, scoreList, requiredTimeList);

    expect(logSpy).toHaveBeenCalledWith([]);
    expect(result).toBe(0);
  });
});