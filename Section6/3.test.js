const solution = require("./3");

describe("function solution", () => {
  it("board와 moves 데이터가 전달되어 바구니에 연속으로 같은 인형이 들어가 터진 인형의 개수를 반환한다", () => {
    const board = [
      [0, 0, 0, 0, 0],
      [1, 2, 0, 0, 5],
      [3, 4, 0, 1, 2],
      [2, 1, 3, 4, 3],
      [4, 3, 1, 2, 4],
    ];

    const moves = [3, 5, 1, 3, 2, 4, 5];

    3, 5, 1, 1, 2, 1, 2;

    const result = solution(board, moves);

    expect(result).toBe(2);
  });

  it("값이 전부 0인 board와 moves 데이터가 전달되어 바구니에서 터진 인형의 개수를 0으로 반환한다", () => {
    const board = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];

    const moves = [3, 4, 2, 1, 5, 3, 2];

    const result = solution(board, moves);

    expect(result).toBe(0);
  });
});
