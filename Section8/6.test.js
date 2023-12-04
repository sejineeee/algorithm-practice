const getMaxWeight = require('./6');

describe('function getMaxWeight', () => {
  it('N마리의 무게와 실을 수 있는 무게가 주어지면 실을 수 있는 가장 무거운 무게를 반환한다', () => {
    const logSpy = jest.spyOn(global.console, 'log');

    const list = [81, 50, 44, 64, 32, 58];
    const result = getMaxWeight(200, list);

    expect(logSpy).toHaveBeenCalledWith([44, 64, 32, 58]);
    expect(result).toBe(198);

    logSpy.mockRestore();
  })

  it('1마리의 무게와 실을 수 있는 무게가 주어지면 실을 수 있는 가장 무거운 무게를 반환한다', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    
    const list = [50];
    const result = getMaxWeight(30, list);

    expect(logSpy).toHaveBeenCalledWith([]);
    expect(result).toBe(0);

    logSpy.mockRestore();
  })
})