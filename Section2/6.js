// 격자판 최대합
// N * N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합
// N개의 각 자연수는 100을 넘지 않는다

function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let rowSum = 0,
    colSum = 0;
  let crossSum1 = 0,
    crossSum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    (rowSum = 0), (colSum = 0);
    for (let j = 0; j < arr.length; j++) {
      if (i === i) {
        rowSum += arr[i][j];
        colSum += arr[j][i];
      }
    }
    answer = Math.max(answer, rowSum, colSum);
  }
  for (let i = 0; i < arr.length; i++) {
    crossSum1 += arr[i][i];
    crossSum2 += arr[i][arr.length - i - 1];
  }
  answer = Math.max(answer, crossSum1, crossSum2);
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

console.log(solution(arr));
// NaN가 나온다.
