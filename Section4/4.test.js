const getNumberOfGifts = require("./4");

describe("function getNumberOfGifts", () => {
  it("최대 몇 개를 구매할 수 있는지 수를 반환한다", () => {
    const logSpy = jest.spyOn(global.console, "log");

    const studentCount = 6;
    const budget = 35;
    const shopList = [
      [2, 5],
      [4, 9],
      [6, 3],
      [8, 5],
      [10, 4],
      [4, 6],
    ];

    const result = getNumberOfGifts(studentCount, budget, shopList);

    const purchaseList = [
      [8, 5],
      [2, 5],
      [6, 3],
      [4, 6],
    ];

    expect(result).toBe(4);
    expect(logSpy).toHaveBeenCalledWith("구매목록", purchaseList);

    logSpy.mockRestore();
  });

  it("상품가격과 배송비를 더한 값이 같은 경우 최대 몇 개를 구매할 수 있는지 수를 반환한다", () => {
    const logSpy = jest.spyOn(global.console, "log");

    const studentCount = 5;
    const budget = 31;
    const shopList = [
      [8, 4],
      [6, 6],
      [10, 2],
      [4, 8],
      [2, 10],
    ];

    const purchaseList = [
      [10, 2],
      [2, 10],
      [4, 8],
    ];

    const result = getNumberOfGifts(studentCount, budget, shopList);
    expect(result).toBe(3);
    expect(logSpy).toHaveBeenCalledWith("구매목록", purchaseList);

    logSpy.mockRestore();
  });
});
