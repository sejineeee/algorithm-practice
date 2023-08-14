// 공통원소 구하기
// A, B 두 개의 집합이 주어지면
// 두 집합의 공통원소를 추출하여 오름차순으로 출력

function getAscendingOfCommon(firstArr, secondArr) {
  const n = firstArr.length;
  const m = secondArr.length;
  const result = [];

  const sortedArr1 = firstArr.sort((a, b) => a - b);
  const sortedArr2 = secondArr.sort((a, b) => a - b);

  let point1 = 0;
  let point2 = 0;

  while (point1 < n && point2 < m) {
    if (firstArr[point1] === secondArr[point2]) {
      result.push(firstArr[point1]);
      point1++;
      point2++;
    } else if (firstArr[point1] < secondArr[point2]) {
      point1++;
    } else {
      point2++;
    }
  }

  return result;
}

const arr1 = [1, 3, 9, 5, 2];
const arr2 = [3, 2, 5, 7, 8];

console.log(getAscendingOfCommon(arr1, arr2));
