// 섬나라 아일랜드(BFS 활용)
// N * N의 섬나라 아일랜드의 지도가 격자판의 정보로 주어짐
// 각 섬은 1로 표시되어 상하좌우와 대각선으로 연결되어 있으며 0은 바다임

function getCountOfIsland(gridList) {
  const N = gridList.length;
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];
  const queue = [];

  let result = 0;

  function findNextIsland(x, y) {
    if (x >= 0 && x < N && y >= 0 && x < N && gridList[x][y] === 1) {
      gridList[x][y] = 0;
      queue.push([x, y]);
    }
  }

  function findIsland(x, y) {
    findNextIsland(x, y);
    gridList[x][y] = 0;
    queue.push([x, y]);

    while (queue.length) {
      let [cx, cy] = queue.shift();

      for (let k = 0; k < dx.length; k++) {
        const nx = cx + dx[k];
        const ny = cy + dy[k];

        findNextIsland(nx, ny);
      }
    }
    result += 1;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (gridList[i][j] === 1) {
        findIsland(i, j);
      }
    }
  }

  return result;
}

const list = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(getCountOfIsland(list));
