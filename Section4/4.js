// 졸업 선물
// 선생님의 예산 한정되어 있음
// 상품 하나를 50% 할인쿠폰 있음(할인에 배송비 미포함)
// 상품가격과 배송비는 각각 100,000을 넘지 않고 짝수로만 이루어짐
// 최소한 1개 이상의 상품을 살 수 있는 예산을 갖고 있음
// 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램 작성하세요

function getNumberOfGifts(studentCount, budget, giftList) {
  let result = 0;
  let resultList = [];
  giftList.sort((a, b) => {
    const sumA = a[0] + a[1];
    const sumB = b[0] + b[1];

    if (sumA - sumB) {
      return sumA - sumB;
    }
    return a[0] - b[0];
  });

  for (let i = 0; i < studentCount; i++) {
    let cnt = 0;
    let arr = [];
    let money = budget - (giftList[i][0] / 2 + giftList[i][1]);
    arr.push([giftList[i][0], giftList[i][1]]);
    cnt++;
    for (let j = 0; j < studentCount; j++) {
      if (i === j) {
        continue;
      } else {
        if (money < giftList[j][0] + giftList[j][1]) {
          break;
        } else {
          money -= giftList[j][0] + giftList[j][1];
          cnt++;
          arr.push([giftList[j][0], giftList[j][1]]);
        }
      }

      if (result < cnt) {
        result = cnt;
        resultList = arr;
      }
    }
  }
  console.log("구매목록", resultList);
  return result;
}

let shopList = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

console.log(getNumberOfGifts(5, 28, shopList));
