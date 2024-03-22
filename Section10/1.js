// 계단오르기
// 계단을 오를 때 한 번에 한 계단 또는 두 계단씩 올라감
// 총 4계단을 오른다면 1+1+1+1+, 1+1+2, 1+2+1, 2+1+1, 2+2로 5가지
// N계단일 때 올라갈 수 있는 방법의 수는 몇 가지인지 출력하는 프로그램 작성

// 1계단, 2계단 올라갈 때의 경우의 수를 이용하여 나머지를 구하는 방법으로 접근하면 된다.

function getAscendingStairsCase(countOfStairs) {
  const dynamicList = new Array(countOfStairs + 1).fill(0);

  dynamicList[1] = 1;
  dynamicList[2] = 2;

  for (let i = 3; i <= countOfStairs; i++) {
    dynamicList[i] = dynamicList[i - 2] + dynamicList[i - 1];
  }

  return dynamicList[countOfStairs];
}

console.log(getAscendingStairsCase(7));
