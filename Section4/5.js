// K번째 큰 수
// 1 ~ 100 사이의 자연수가 적힌 N장의 카드가 있음
// 같은 수의 카드가 여러 장 있을 수 있음
// 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록
// 모든 경우를 기록하여 기록한 값 중 K번째로 큰 수를 출력하는 프로그램

function getNthSumOfCard(numberOfCards, k, cards) {
  let resultOfSum = new Set();
  let result;
  for (let i = 0; i < numberOfCards; i++) {
    for (let j = 0; j < numberOfCards; j++) {
      if (i === j) {
        continue;
      }
      for (let m = 0; m < numberOfCards; m++) {
        if (i === m || j === m) {
          continue;
        }
        resultOfSum.add(cards[i] + cards[j] + cards[m]);
      }
    }
  }

  let sortedResult = [...resultOfSum].sort((a, b) => b - a);

  if (k > sortedResult.length) {
    throw new Error("k번째만큼 경우의 수가 존재하는지 확인해주세요");
  } else {
    result = sortedResult.slice(k - 1, k);
    console.log(sortedResult);
    return result;
  }
}

const cardList = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

console.log(getNthSumOfCard(10, 3, cardList));

module.exports = getNthSumOfCard;
