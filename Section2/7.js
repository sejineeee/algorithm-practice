// N * N 격자판에 지도 정보가 주어짐
// 각 격자에 지역의 높이가 쓰여있음
// 격자의 가장자리는 0으로 초기화 되었다고 가정
// 봉우리 지역은 상하좌우 숫자보다 큰 숫자임
// 봉우리 지역이 몇 개 있는지 알아내는 프로그램 작성

function solution(arr) {
  let answer = 0;
  let top,
    bottom,
    left,
    right = 0;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === 0 && j === 0) {
        bottom = arr[i + 1][j];
        right = arr[i][j + 1];
        max = Math.max(bottom, right);
        if (max < arr[i][j]) {
          answer += 1;
        }
      } else if (i === 0 && j === 4) {
        left = arr[i][j - 1];
        bottom = arr[i + 1][j];
        max = Math.max(bottom, left);
        if (max < arr[i][j]) {
          answer += 1;
        }
      } else if (i === 0) {
        bottom = arr[i + 1][j];
        left = arr[i][j - 1];
        right = arr[i][j + 1];
        max = Math.max(bottom, left, right);
        if (max < arr[i][j]) {
          answer += 1;
        }
      } else if (i === 4 && j === 0) {
        top = arr[i - 1][j];
        right = arr[i][j + 1];
        max = Math.max(top, right);
        if (max < arr[i][j]) {
          answer += 1;
        }
      } else if (j === 0) {
        top = arr[i - 1][j];
        bottom = arr[i + 1][j];
        right = arr[i][j + 1];
        max = Math.max(top, bottom, right);
        if (max < arr[i][j]) {
          answer += 1;
        }
      } else if (i === 4) {
        top = arr[i - 1][j];
        left = arr[i][j - 1];
        right = arr[i][j + 1];
        max = Math.max(top, left, right);
        if (max < arr[i][j]) {
          answer += 1;
        }
      } else if (j === 4) {
        top = arr[i - 1][j];
        bottom = arr[i + 1][j];
        left = arr[i][i - 1];
        max = Math.max(top, bottom, left);
        if (max < arr[i][j]) {
          answer += 1;
        }
      } else if (i === 4 && j === 4) {
        top = arr[i - 1][j];
        left = arr[i][i - 1];
        max = Math.max(top, left);
        if (max < arr[i][j]) {
          answer += 1;
        }
      } else {
        top = arr[i - 1][j];
        bottom = arr[i + 1][j];
        left = arr[i][j - 1];
        right = arr[i][j + 1];
        max = Math.max(top, bottom, left, right);
        if (max < arr[i][j]) {
          answer += 1;
        }
      }
    }
  }
  return answer;
}

const arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

console.log(solution(arr));

// 풀이 방법
function otherSolution(arr) {
  let answer = 0;
  let n = arr.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k]; // 방향 탐색하는 행 좌표
        let ny = j + dy[k]; // 방향 탐색하는 열 좌표
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] > arr[i][j]) {
          flag = 0;
          break; // 봉우리가 아니기 때문에 flag를 0으로 초기화 해준다.
        }
      }
      if (flag) {
        answer++;
      }
    }
  }
  return answer;
}

console.log(otherSolution(arr));
