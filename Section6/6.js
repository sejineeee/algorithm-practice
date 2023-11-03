// 공주 구하기
// 왕자 N명, 나이순으로 N번까지 차례로 번호, 차례대로 시계방향으로 앉음
// 시계방향으로 돌아가며 1부터 시작하여 번호를 외치게 함
// 특정숫자 K를 외치면 제외, 원에서도 제외
// 다음 왕자부터 다시 1부터 시작하여 번호 외쳐 마지막 남은 왕자가 공주 구하러 감

function getPrinceToRescuePrincess(numberOfPrinces, specificNumber) {
  const princes = Array(numberOfPrinces)
    .fill()
    .map((v, i) => i + 1);

  let finalPrince = null;
  let number = 1;

  while (princes.length) {
    princes.forEach((prince, i, array) => {
      if (number < specificNumber) {
        array.push(array.shift());
        number += 1;
      }

      if (number === specificNumber) {
        array.shift();
        number = 1;
      }

      if (array.length === 1) {
        return (finalPrince = prince);
      }
    });
  }

  return finalPrince;
}

const PRINCES = 8;
const K = 3;

console.log(getPrinceToRescuePrincess(PRINCES, K));
