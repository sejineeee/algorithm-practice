// 두 배열 합치기
// 오름차순으로 정렬이 된 두 배열이 주어지면
// 두 배열을 오름차순으로 합쳐 출력하는 프로그램

function getAscendingOrder(firstNum, firstArr, secondNum, secondArr) {
  const result = [];
  const n = firstNum;
  const m = secondNum;
  let point1 = 0;
  let point2 = 0;

  while (point1 < n && point2 < m) {
    if (firstArr[point1] <= secondArr[point2]) {
      result.push(firstArr[point1]);
      point1++;
    } else {
      result.push(secondArr[point2]);
      point2++;
    }
  }

  while (point1 < n) {
    result.push(firstArr[point1]);
    point1++;
  }

  while (point2 < m) {
    result.push(secondArr[point2]);
    point2++;
  }
  console.log(result);
}

const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];

console.log(getAscendingOrder(3, arr1, 5, arr2));
