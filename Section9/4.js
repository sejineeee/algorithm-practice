// 송아지 찾기(BFS: 상대 트리 탐색)
// 현수는 송아지를 잃어버렸고, 송아지에는 위치추적기가 달려 있음.
// 현수의 위치와 송아지의 위치가 수직선상의 좌표 점으로 주어지면
// 송아지는 움직이지 않고 현수는 한 번의 점프로 앞으로 1. 뒤로 1, 앞으로 5 이동 가능
// 최소 몇 번의 점프로 현수가 송아지의 위치까지 갈 수 있는지 구하라.
// 현수의 위치 S, 송아지의 위치 E, 직선 좌표 점은 1 ~ 10,000
// 점프의 최소 횟수를 구한다. 최소 횟수는 1 이상임.

function getMinJumpingCount(s, e) {
  const visited = new Array(10001).fill(false);

  const queue = [];
  queue.push({ position: s, jump: 0 });

  while (queue.length) {
    const { position, jump } = queue.shift();

    if (position === e) {
      return jump;
    }

    const nextPositionList = [position + 1, position - 1, position + 5];

    for (const nextPosition of nextPositionList) {
      if (
        !visited[nextPosition] &&
        nextPosition >= 1 &&
        nextPosition <= 10000
      ) {
        visited[nextPosition] = true;
        queue.push({ position: nextPosition, jump: jump + 1 });
      }
    }
  }
}

console.log(getMinJumpingCount(5, 14));

// 레벨 탐색이면서 최단거리를 구하는 방법에서 BFS를 사용한다.
