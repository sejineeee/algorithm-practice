// 경로 탐색(인접리스트)
// 방향 그래프
// 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프로그램
// 인접행렬로 문제를 풀 경우에 노드 개수가 많은 경우에는 메모리 낭비, 시간 복잡도 높음

function getAmountOfCourse(number, list) {
  let result = 0;
  const resultedList = [];

  const graph = Array.from({ length: number + 1 }, () => Array());
  const visitedCheckList = Array(number + 1).fill(0);

  for (const [a, b] of list) {
    graph[a].push(b);
  }

  const recursiveFunc = (vertex, path) => {
    if (vertex === number) {
      result += 1;
      resultedList.push([...path]);
    } else {
      visitedCheckList[1] = 1;

      for (let i = 0; i < graph[vertex].length; i++) {
        if (visitedCheckList[graph[vertex][i]] === 0) {
          visitedCheckList[graph[vertex][i]] = 1;
          path.push(graph[vertex][i]);
          recursiveFunc(graph[vertex][i], path);
          visitedCheckList[graph[vertex][i]] = 0;
          path.pop();
        }
      }
    }
  };

  recursiveFunc(1, [1]);

  console.log(resultedList);
  return result;
}

const N = 5;
const inputList = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];

console.log(getAmountOfCourse(N, inputList));
