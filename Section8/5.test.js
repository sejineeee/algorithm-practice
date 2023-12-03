const getEqualSumSubsetNumber = require('./5');

describe('function getEqualSumSubsetNumber', () => {
  it('두 부분집합의 합이 같은 경우 "YES"를 출력한다', () => {
    const logSpy = jest.spyOn(global.console, 'log');
    const list = [1, 2, 3, 4, 5, 7];
    const result = getEqualSumSubsetNumber(list);
   
    expect(logSpy).toHaveBeenCalledWith([[1, 2, 3, 5], [4, 7]]);
    expect(result).toBe("YES");
    
    logSpy.mockRestore();
  })

  it('두 부분집합의 합이 같지 않은 경우 "NO"를 출력한다', () => {
    const list = [1, 2, 3, 4, 5, 6];
    const result = getEqualSumSubsetNumber(list);

    expect(result).toBe("NO");
  })
})