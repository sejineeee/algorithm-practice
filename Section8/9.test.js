const getMinCoins = require('./9');

describe('function getMinCoins', () => {
  let logSpy;
  beforeEach(() => {
    logSpy = jest.spyOn(global.console, 'log');
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it('동전의 종류와 거슬러줄 금액이 주어질 때 거슬러 줄 동전의 최소개수를 반환한다', () => {
    const coins = [10, 20, 30, 40, 50];
    const changeMoney = 110;

    const result = getMinCoins(coins, changeMoney);

    expect(logSpy).toHaveBeenCalledWith([50, 50, 10]);
    expect(result).toBe(3);
  })
});