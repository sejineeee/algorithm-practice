// 연속 부분수열 1
// N개의 수로 이루어진 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지
// 만약 N = 8, M = 6이고 수열이 1 2 1 3 1 1 1 2 이면
// 합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지

function getContinuePartSeq(n, m, seq) {
  const N = n;
  const M = m;
  const result = [];

  let point1 = 0;
  let sum = 0;

  for (let point2 = 0; point2 < N; point2++) {
    sum += seq[point2];

    if (sum === M) {
      result.push(seq.slice(point1, point2));
    } else if (sum > M) {
      point1++;
      sum -= seq[point1];
      if (sum === M) {
        result.push(seq.slice(point1, point2 + 1));
      }
    }
  }

  console.log(result);
  return result.length;
}

const sequence = [1, 2, 1, 3, 1, 1, 1, 2];

console.log(getContinuePartSeq(8, 6, sequence));

module.exports = getContinuePartSeq;
