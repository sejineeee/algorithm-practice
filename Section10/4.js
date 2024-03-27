// 동전 교환(knapsack 알고리즘)
// 여러 단위의 동전들이 주어졌을 때
// 거스름돈을 가장 적은 수의 동전으로 교환하는 프로그램
// 첫 번째 줄에 동전의 갯수가 주어진다 N(1 <= N <= 12)
// 두 번째 줄에는 N개의 동전의 종류가 주어짐
// 세 번째 줄에는 거슬러 줄 금액 M(1 <= M <= 500)이 주어짐
// 각 동전의 종류는 100원을 넘지 않음

function getMinChange(count, list, changeMoney) {
  if (!changeMoney || !list || !count) {
    throw new Error('함수에 입력값이 모두 주어졌는지 확인해주세요');
  }
  const dynamicList = Array.from(
    {
      length: changeMoney + 1,
    },
    () => Number.MAX_SAFE_INTEGER
  );

  dynamicList[0] = 0;
  dynamicList[1] = 1;

  for (let i = 0; i < count; i++) {
    for (let j = list[i]; j < dynamicList.length; j++) {
      if (dynamicList[j] > dynamicList[j - list[i]] + 1) {
        dynamicList[j] = dynamicList[j - list[i]] + 1;
      }
    }
  }

  return dynamicList[changeMoney];
}

const coinList = [1, 2, 5];

console.log(getMinChange(3, coinList, 15));

module.exports = getMinChange;
