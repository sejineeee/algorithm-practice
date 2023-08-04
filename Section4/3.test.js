const getMentoring = require("./3");

describe("function getMentoring", () => {
  it("멘토, 멘티가 될 수 있는 경우의 수를 반환한다", () => {
    const rankList = [
      [3, 4, 1, 2, 5],
      [1, 3, 4, 5, 2],
      [2, 3, 5, 4, 1],
      [3, 1, 4, 5, 2],
      [5, 2, 3, 1, 4],
    ];

    const result = getMentoring(rankList);
    expect(result).toStrictEqual(1);
  });

  it("아무도 멘토가 될 수 없는 경우 0을 반환한다", () => {
    const rankList = [
      [3, 4, 1, 2, 5],
      [1, 3, 4, 5, 2],
      [2, 3, 5, 4, 1],
      [3, 1, 4, 5, 2],
      [5, 2, 4, 1, 3],
    ];

    const result = getMentoring(rankList);
    expect(result).toStrictEqual(0);
  });

  it("중복된 학생이 있는 경우 '중복된 학생이 있으니 확인해주세요' 메시지를 반환한다", () => {
    const rankList = [
      [3, 4, 1, 3, 2, 5],
      [1, 3, 4, 5, 2],
      [2, 3, 5, 4, 1],
      [3, 1, 4, 5, 2],
      [5, 2, 3, 1, 4],
    ];

    const result = getMentoring(rankList);
    expect(() => {
      getMentoring(rankList);
    }).toThrow("중복된 학생이 있으니 확인해주세요");
  });
});
