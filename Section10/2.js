// 돌다리 건너기
// N개의 돌로 다리가 만들어져 있음
// 건널 때 한 번에 한 칸 또는 두 칸씩 건널 수 있음

function getNumberOfCases(numberOfStone) {
  const dynamicList = new Array(numberOfStone + 1).fill(0);

  dynamicList[1] = 1;
  dynamicList[2] = 2;

  for (let i = 3; i <= numberOfStone; i++) {
    dynamicList[i] = dynamicList[i - 1] + dynamicList[i - 2];
  }

  return dynamicList[numberOfStone];
}

console.log(getNumberOfCases(7));
