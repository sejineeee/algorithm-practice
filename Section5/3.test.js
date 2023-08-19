const getContinuePartSeq = require("./3");

describe("function getContinuePartSeq", () => {
  it("N개의 수로 이루어진 수열의 연속부분수열의 합이 M인 경우의 수를 반환한다", () => {
    const logSpy = jest.spyOn(global.console, "log");
    const sequence = [1, 2, 3, 2, 3, 1, 1, 2, 1, 1, 1, 3];
    const result = getContinuePartSeq(12, 6, sequence);

    expect(logSpy).toHaveBeenCalledWith([
      [1, 2, 3],
      [2, 3, 1],
      [1, 1, 2, 1, 1],
      [1, 2, 1, 1, 1],
      [1, 1, 1, 3],
    ]);

    expect(result).toBe(5);

    logSpy.mockRestore();
  });

  it("1로만 이루어진 수열의 연속부분수열의 합이 M인 경우의 수를 반환한다", () => {
    const logSpy = jest.spyOn(global.console, "log");
    const sequence = [1, 1, 1, 1, 1, 1];
    const result = getContinuePartSeq(6, 3, sequence);

    expect(logSpy).toHaveBeenCalledWith([
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ]);

    expect(result).toBe(4);

    logSpy.mockRestore();
  });
});
