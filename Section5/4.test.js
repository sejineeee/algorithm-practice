const getMOrLess = require("./4");

describe("function getMOrLess", () => {
  context("동일한 수 1로 N개 이루어진 수열이 주어졌을 때", () => {
    const arr = [1, 1, 1, 1, 1, 1, 1];

    it("연속부분수열의 합이 1인 경우에는 각 수열의 갯수만 반환한다", () => {
      const log = jest.spyOn(global.console, "log");
      const result = getMOrLess(1, arr);

      expect(log).toHaveBeenCalledWith([[1], [1], [1], [1], [1], [1], [1]]);

      expect(result).toBe(7);

      log.mockRestore();
    });

    it("연속부분수열의 합이 1보다 큰 경우 M이하가 되는 경우의 수를 반환한다", () => {
      const log = jest.spyOn(global.console, "log");
      const result = getMOrLess(3, arr);

      expect(log).toHaveBeenCalledWith([
        [1],
        [1],
        [1],
        [1],
        [1],
        [1],
        [1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ]);

      expect(result).toBe(18);

      log.mockRestore();
    });
  });

  it("연속부분수열의 합이 M이하인 경우의 수를 반환한다", () => {
    const log = jest.spyOn(global.console, "log");
    const arr = [1, 3, 4, 2, 5, 1, 1, 2, 3, 2, 1];

    const result = getMOrLess(5, arr);

    expect(log).toHaveBeenCalledWith([
      [1],
      [3],
      [1, 3],
      [4],
      [2],
      [5],
      [1],
      [1],
      [1, 1],
      [1, 1, 2],
      [1, 2],
      [2],
      [2, 3],
      [3],
      [3, 2],
      [2],
      [2, 1],
      [1],
    ]);

    expect(result).toBe(18);

    log.mockRestore();
  });
});
