const getNthSumOfCard = require("./5");

describe("function getNthSumOfCard", () => {
  it("N장의 카드 중 3장을 뽑아 K번째로 큰 수를 반환한다", () => {
    const cards = [20, 33, 48, 20, 11, 68, 79];

    const result = getNthSumOfCard(7, 4, cards);
    expect(result).toBe(160);
  });

  it("N장의 카드가 모두 같은 경우 K번째로 큰 수를 반환한다", () => {
    const cards = [10, 10, 10, 10, 10, 10, 10];

    const result = getNthSumOfCard(7, 1, cards);
    expect(result).toBe(30);
  });

  it("경우의 수가 K번째 수보다 작은 경우 에러 메시지를 출력한다", () => {
    const cards = [10, 10, 10, 10, 10, 10, 10];

    expect(() => {
      getNthSumOfCard(7, 3, cards);
    }).toThrow("k번째만큼 경우의 수가 존재하는지 확인해주세요");
  });
});
