// 미로탐색(DFS)
// 7 * 7 격자판 미로를 탈출하는 경로의 가지수를 출력하는 프로그램
// 출발점은 격자의 (1, 1)좌표
// 탈출 도착점은 (7, 7) 좌표
// 격자판의 1은 벽, 0은 통로
// 격자판의 움직임은 상하좌우로만 움직임

// d(0, 0) -> d(-1, 0), d(0, 1), d(1, 0), d(0, -1)

function getExploringMaze(list) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let result = 0;

  const exploreMaze = (x, y) => {
    if (x === 6 && y === 6) {
      result += 1;
    }

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || nx > 6 || ny < 0 || ny > 6) {
        continue;
      }

      if (list[nx][ny] === 0) {
        list[nx][ny] = 1;
        exploreMaze(nx, ny);
        list[nx][ny] = 0;
      }
    }
  };

  list[0][0] = 1;

  exploreMaze(0, 0);

  return result;
}

const list = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(getExploringMaze(list));
