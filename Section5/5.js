// 최대 매출
// N일 동안의 매출기록을 갖고 연속된 K일 동안의 최대 매출액이 얼마인가
// 만약 N = 10, K = 3이면 12 15 11 20 25 10 20 19 13 15
// 연속된 3일간 최대 매출액은 11 + 20 + 25 = 56만원

function getConsecutiveMaxSales(consecutiveDays, salesList) {
  const N = salesList.length;
  const K = consecutiveDays;

  let sum = 0;
  let result = [];

  let point1 = 0;

  for (let point2 = K; point2 <= N; point2++) {
    const sumList = salesList.slice(point1, point2);
    let value = 0;

    for (let i = 0; i < sumList.length; i++) {
      value += sumList[i];
    }

    if (sum < value) {
      sum = value;
      result = [...sumList];
    }

    point1++;
  }

  console.log(result);
  return sum;
}

const list = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

console.log(getConsecutiveMaxSales(3, list));
