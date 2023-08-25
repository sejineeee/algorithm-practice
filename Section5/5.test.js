const getConsecutiveMaxSales = require("./5");

describe("function getConsecutiveMaxSales", () => {
  it("N일 동안의 매출기록에서 연속된 K일 동안의 최대 매출액을 반환한다", () => {
    const list = [18, 49, 32, 11, 54, 9, 28];
    const K = 3;

    const result = getConsecutiveMaxSales(K, list);
    expect(result).toBe(99);
  });

  it("N일 동안의 매출기록이 모두 동일한 경우 연속된 K일 동안의 최대 매출액을 반환한다", () => {
    const list = [10, 10, 10, 10, 10, 10];
    const K = 2;

    const result = getConsecutiveMaxSales(K, list);
    expect(result).toBe(20);
  });
});
