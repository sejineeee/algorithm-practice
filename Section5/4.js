// 연속 부분수열
// N개의 수로 이루어진 수열이 주어짐
// 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그램
// 만약 N = 5, M = 5이고 수열이 1 3 1 2 3 이라면 합이 5 이하가 되는 연속부분수열은
// {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3}, {1, 3, 1}로 총 10가지

function getMOrLess(M, seq) {
  const N = seq.length;
  const result = [];

  let sum = 0;
  let point1 = 0;

  for (let point2 = 0; point2 < N; point2++) {
    sum += seq[point2];
    if (seq[point2] <= M) {
      result.push([seq[point2]]);
    }

    if (sum <= M) {
      if (point1 === point2) {
        continue;
      }
      result.push(seq.slice(point1, point2 + 1));
    }

    if (sum === M) {
      result.push(seq.slice(point1 + 1, point2 + 1));
    }

    while (sum > M) {
      sum -= seq[point1];
      point1++;
      if (sum <= M) {
        result.push(seq.slice(point1, point2 + 1));
      }
    }
  }

  console.log(result);
  return result.length;
}

const sequence = [1, 3, 1, 2, 3];

console.log(getMOrLess(5, sequence));

module.exports = getMOrLess;
