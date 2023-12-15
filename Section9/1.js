// 경로 탐색(인접행렬)
// 방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프로그램

function getAmountOfCourse(number, list) {
  let result = 0;
  const resultedList = [];

  const graph = Array.from({ length: number + 1 }, () =>
    Array(number + 1).fill(0)
  );
  const visitedCheckList = Array(number + 1).fill(0);

  for (const [a, b] of list) {
    graph[a][b] = 1;
  }
  const recursiveFunc = (vertex, path) => {
    if (vertex === number) {
      resultedList.push([...path]);
      result += 1;
      return;
    } else {
      visitedCheckList[1] = 1;

      for (let i = 1; i <= number; i++) {
        if (graph[vertex][i] === 1 && visitedCheckList[i] === 0) {
          visitedCheckList[i] = 1;
          path.push(i);
          recursiveFunc(i, path);
          visitedCheckList[i] = 0;
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
