const getAscendingOfCommon = require("./2");

describe("function getAscendingOfCommon", () => {
  it("두 배열의 공통원소를 추출하여 오름차순으로 정렬된 배열을 반환한다", () => {
    const arr1 = [5, 4, 9, 10, 15, 28];
    const arr2 = [9, 16, 18, 29, 37, 28, 5];

    const result = getAscendingOfCommon(arr1, arr2);

    expect(result).toStrictEqual([5, 9, 28]);
  });

  it("두 배열의 공통원소가 존재하지 않는 경우 빈 배열을 반환한다", () => {
    const arr1 = [1, 3, 5, 7, 9];
    const arr2 = [2, 4, 6, 8, 10];

    const result = getAscendingOfCommon(arr1, arr2);

    expect(result).toStrictEqual([]);
  });
});
