const getAscendingOrder = require("./1");

describe("function getAscendingOrder", () => {
  it("오름차순으로 정렬된 두 배열을 합쳐 오름차순으로 정렬된 배열이 반환된다", () => {
    const arr1 = [2, 4, 6, 9, 10, 29];
    const arr2 = [1, 7, 15, 33];

    const result = getAscendingOrder(6, arr1, 4, arr2);

    expect(result).toStrictEqual([1, 2, 4, 6, 7, 9, 10, 15, 29, 33]);
  });

  it("음수로 이루어진 두 배열을 합쳐 오름차순으로 정렬된 배열이 반환한다", () => {
    const arr1 = [-29, -10, -9, -6, -4, -2];
    const arr2 = [-33, -15, -6, -1];

    const result = getAscendingOrder(6, arr1, 4, arr2);

    expect(result).toStrictEqual([-33, -29, -15, -10, -9, -6, -6, -4, -2, -1]);
  });
});
