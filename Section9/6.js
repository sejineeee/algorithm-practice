// 섬나라 아일랜드(DFS 활용)
// N * N의 섬나라 아일랜드의 지도가 격자판의 정보로 주어짐
// 각 섬은 1로 표시되어 상하좌우와 대각선으로 연결되어 있으며 0은 바다임

function getCountOfIsland(gridList) {
  const N = gridList.length;
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];

  let result = 0;

  function exploreIsland(cx, cy) {
    gridList[cx][cy] = 0;
    for (let i = 0; i < 8; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < N && gridList[nx][ny] === 1) {
        exploreIsland(nx, ny);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (gridList[i][j] === 1) {
        exploreIsland(i, j);

        result += 1;
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
